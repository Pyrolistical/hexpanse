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
export const Colors = ["none", "red", "green", "blue"] as const;
export type Color = typeof Colors[number];
type Coloring = {
	type: "coloring";
	colors: Record<Color, Set<CoordinateKey>>;
};
type GameOver = {
	type: "game over";
};
export type Reply = Restored | Coloring | GameOver;

export type State = Record<CoordinateKey, CellState>;
type CellState = {
	coordinate: Coordinate;
	orientation: Orientation;
	connection: Connection;
	color: Color;
};

type SaveWorker = {
	restore(config: Config): void;
	updateCell(coordinate: Coordinate, orientation: Orientation): void;

	onRestored(config: Config, state: State): void;
	onColoring(colors: Record<Color, Set<CoordinateKey>>): void;
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

		onColoring() {
			throw new Error("missing onColoring");
		},

		onGameOver() {
			throw new Error("missing onGameOver");
		},
	};

	worker.onmessage = ({ data }: MessageEvent<Reply>) => {
		switch (data.type) {
			case "restored":
				return saveWorker.onRestored(data.config, data.state);
			case "coloring":
				return saveWorker.onColoring(data.colors);
			case "game over":
				return saveWorker.onGameOver();
		}
	};

	return saveWorker;
};
