import stringify from "fast-json-stable-stringify";
import { createInstance, INDEXEDDB } from "localforage";
const store = createInstance({
	driver: INDEXEDDB,
	name: "hexpanse",
	version: 1.0,
	storeName: "gameState",
});

import PuzzleGenerator, { Config } from "../puzzle-generator";
import {
	asCoordinateKey,
	CoordinateKey,
	Coordinate,
	Orientation,
	Connection,
} from "../elements";

import { Message, Reply, State, Color } from "./client";

const reply = (reply: Reply) => {
	postMessage(reply);
};
let config: Config;
let key: string;
let state: State;
onmessage = async ({ data }: MessageEvent<Message>) => {
	switch (data.type) {
		case "restore": {
			config = data.config;
			key = stringify(config);
			const storedState = await store.getItem<State>(key);
			if (storedState) {
				state = storedState;
			} else {
				state = {};
				for (const { coordinate, orientation, connection } of PuzzleGenerator(
					config
				)) {
					state[asCoordinateKey(coordinate)] = {
						coordinate,
						orientation,
						connection,
						color: "none",
					};
				}
				await store.setItem<State>(key, state);
			}

			reply({
				type: "restored",
				config,
				state,
			});

			facingNeighboursByCoordinate = {};
			for (const coordinateKey of Object.keys(state)) {
				assertCoordinateKey(coordinateKey);
				updateFacingNeighbours(coordinateKey);
			}
			updateSpan();

			return;
		}
		case "update cell": {
			const { coordinate, orientation } = data;
			const coordinateKey = asCoordinateKey(coordinate);
			const cell = state[coordinateKey];
			if (cell) {
				cell.orientation = orientation;
				await store.setItem<State>(key, state);

				delete facingNeighboursByCoordinate[coordinateKey];
				updateFacingNeighbours(coordinateKey);
				updateSpan();
			}
			return;
		}
	}
};

function assertCoordinateKey(value: string): asserts value is CoordinateKey {}

const rotate = (
	coordinate: Coordinate,
	orientation: Orientation,
	origin: Coordinate
): Coordinate => {
	coordinate.q -= origin.q;
	coordinate.r -= origin.r;
	coordinate.s -= origin.s;
	while (orientation > 0) {
		const next = {
			q: -coordinate.r,
			r: -coordinate.s,
			s: -coordinate.q,
		};
		coordinate = next;
		orientation -= 60;
	}
	coordinate.q += origin.q;
	coordinate.r += origin.r;
	coordinate.s += origin.s;
	return coordinate;
};
function* Neighbours(
	coordinate: Coordinate,
	orientation: Orientation,
	connection: Connection
): Generator<Coordinate> {
	const { q, r, s } = coordinate;
	// r
	if (connection & 0b100000) {
		yield rotate({ q: q + 1, r, s: s - 1 }, orientation, coordinate);
	}

	// -q
	if (connection & 0b010000) {
		yield rotate({ q, r: r + 1, s: s - 1 }, orientation, coordinate);
	}

	// s
	if (connection & 0b001000) {
		yield rotate({ q: q - 1, r: r + 1, s }, orientation, coordinate);
	}

	// -r
	if (connection & 0b000100) {
		yield rotate({ q: q - 1, r, s: s + 1 }, orientation, coordinate);
	}

	// q
	if (connection & 0b000010) {
		yield rotate({ q, r: r - 1, s: s + 1 }, orientation, coordinate);
	}

	// -s
	if (connection & 0b000001) {
		yield rotate({ q: q + 1, r: r - 1, s }, orientation, coordinate);
	}
}

let facingNeighboursByCoordinate: Record<CoordinateKey, Set<CoordinateKey>>;
const updateFacingNeighbours = (coordinateKey: CoordinateKey) => {
	const { coordinate, orientation, connection } = state[coordinateKey]!;
	for (const neighbour of Neighbours(coordinate, orientation, connection)) {
		const neighbourKey = asCoordinateKey(neighbour);
		const neighbourState = state[neighbourKey];
		if (!neighbourState) {
			continue;
		}
		facingNeighboursByCoordinate[coordinateKey] ??= new Set<CoordinateKey>();
		facingNeighboursByCoordinate[coordinateKey]!.add(neighbourKey);
	}
};

const mostCommonColor = (span: Set<CoordinateKey>): Color => {
	const colorCount: Record<Color, number> = {
		none: 0,
		red: 0,
		green: 0,
		blue: 0,
	};
	for (const coordinateKey of span) {
		const { color } = state[coordinateKey]!;
		if (color) {
			colorCount[color] = (colorCount[color] ?? 0) + 1;
		}
	}
	const { color } = Object.entries(colorCount).reduce<{
		color: Color;
		count: number;
	}>(
		(highest, [color, count]) => {
			if (highest.count > count) {
				return highest;
			}
			return {
				color: color as Color,
				count,
			};
		},
		{
			color: "none",
			count: 0,
		}
	);

	return color;
};

const entries = <K extends string, V>(values: Record<K, V>): [K, V][] =>
	Object.entries(values) as [K, V][];

const updateSpan = () => {
	let nextSpan = 0;
	const spanByCoordinate: Record<CoordinateKey, number> = {};
	const floodFill = (coordinateKey: CoordinateKey, span: number) => {
		if (spanByCoordinate[coordinateKey]) {
			return;
		}
		spanByCoordinate[coordinateKey] = span;
		const facingNeighbours = facingNeighboursByCoordinate[coordinateKey];
		if (facingNeighbours) {
			for (const neighbourKey of facingNeighbours) {
				assertCoordinateKey(neighbourKey);
				if (facingNeighboursByCoordinate[neighbourKey]?.has(coordinateKey)) {
					floodFill(neighbourKey, span);
				}
			}
		}
	};
	for (const coordinateKey of Object.keys(state)) {
		assertCoordinateKey(coordinateKey);
		floodFill(coordinateKey, ++nextSpan);
	}
	const spans: Record<number, Set<CoordinateKey>> = {};
	for (const [coordinateKey, span] of Object.entries(spanByCoordinate)) {
		assertCoordinateKey(coordinateKey);
		spans[span] ??= new Set<CoordinateKey>();
		spans[span]!.add(coordinateKey);
	}
	if (Object.values(spans).length === 1) {
		return reply({
			type: "game over",
		});
	}

	// Duplicated Colors from client.ts in order to workaround https://github.com/vitejs/vite/issues/7015
	const Colors = ["none", "red", "green", "blue"] as const;

	const avaiableColors = new Set<Color>(Colors);
	avaiableColors.delete("none");

	const colors: Record<Color, Set<CoordinateKey>> = {
		none: new Set<CoordinateKey>(),
		red: new Set<CoordinateKey>(),
		green: new Set<CoordinateKey>(),
		blue: new Set<CoordinateKey>(),
	};
	const sortedSpans = Object.values(spans).sort((a, b) => b.size - a.size);
	const longestSpans = [];
	const uncoloredSpans = [];

	for (const span of sortedSpans) {
		if (span.size > 1 && longestSpans.length < avaiableColors.size) {
			longestSpans.push(span);
		} else {
			uncoloredSpans.push(span);
		}
	}

	for (const span of longestSpans) {
		const currentColor = mostCommonColor(span);
		if (avaiableColors.has(currentColor)) {
			colors[currentColor] = span;
			avaiableColors.delete(currentColor);
		} else {
			uncoloredSpans.unshift(span);
		}
	}

	let i = 0;
	for (const color of avaiableColors) {
		if (i >= uncoloredSpans.length) {
			break;
		}
		const span = uncoloredSpans[i]!;
		if (span.size <= 1) {
			break;
		}
		colors[color] = span;
		i += 1;
	}

	for (const span of uncoloredSpans.slice(i)) {
		for (const coodrinateKey of span) {
			colors.none.add(coodrinateKey);
		}
	}

	reply({
		type: "coloring",
		colors,
	});

	for (const [color, coordinateKeys] of entries(colors)) {
		for (const coordinateKey of coordinateKeys) {
			state[coordinateKey]!.color = color;
		}
	}
};
