import { Config } from "../puzzle-generator";
import {
	CoordinateKey,
	Coordinate,
	Orientation,
	Connection,
} from "../elements";

type Restore = {
	type: "restore";
	config: Config;
};
type UpdateCell = {
	type: "update cell";
	coordinate: Coordinate;
	orientation: Orientation;
};
export type Message = Restore | UpdateCell;

type Restored = {
	type: "restored";
	config: Config;
	state: State;
};
export const Colors = [
	"yellow",
	"orange",
	"red",
	"magenta",
	"violet",
	"blue",
	"cyan",
	"green",
];
type Color = typeof Colors[number];
type PaintedCell = {
	type: "painted cell";
	coordinate: Coordinate;
	color: Color;
};
type GameOver = {
	type: "game over";
};
export type Reply = Restored | PaintedCell | GameOver;

export type State = Record<CoordinateKey, CellState>;
type CellState = {
	coordinate: Coordinate;
	orientation: Orientation;
	connection: Connection;
	color?: Color;
};

type SaveWorker = {
	restore(config: Config): void;
	updateCell(coordinate: Coordinate, orientation: Orientation): void;

	onRestored(config: Config, state: State): void;
	onPaintedCell(coordinate: Coordinate, color: Color): void;
	onGameOver(): void;
};

export default (): SaveWorker => {
	const worker = new Worker(new URL("./worker.ts", import.meta.url), {
		type: "module",
	});
	const message = (message: Message) => {
		worker.postMessage(message);
	};

	const saveWorker: SaveWorker = {
		restore(config) {
			message({
				type: "restore",
				config,
			});
		},
		updateCell(coordinate, orientation) {
			message({
				type: "update cell",
				coordinate,
				orientation,
			});
		},

		onRestored() {
			throw new Error("missing onRestored");
		},

		onPaintedCell() {
			throw new Error("missing onPaintedCell");
		},

		onGameOver() {
			throw new Error("missing onGameOver");
		},
	};

	worker.onmessage = ({ data }: MessageEvent<Reply>) => {
		switch (data.type) {
			case "restored":
				return saveWorker.onRestored(data.config, data.state);
			case "painted cell":
				return saveWorker.onPaintedCell(data.coordinate, data.color);
			case "game over":
				return saveWorker.onGameOver();
		}
	};

	return saveWorker;
};
