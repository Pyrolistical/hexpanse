import PuzzleGenerator from "./puzzle-generator";

export type Coordinate = {
	q: number;
	r: number;
	s: number;
};
export type CoordinateKey =
	`${Coordinate["q"]} ${Coordinate["r"]} ${Coordinate["s"]}`;
export const asCoordinateKey = ({ q, r, s }: Coordinate): CoordinateKey =>
	`${q} ${r} ${s}`;

type Milliseconds = number;
type Cell = {
	coordinate: Coordinate;
	orientation: {
		value: Orientation;
		animate: "clockwise" | "counter-clockwise";
		startTime: DOMHighResTimeStamp;
		duration: Milliseconds;
	};
	connection: Connection;
	color: Color;
};

export const Orientations = [0, 60, 120, 180, 240, 300] as const;
export type Orientation = typeof Orientations[number];

// 8-bit flag to indicate there is a connection in that cube coordinate direction
const Connections = [
	// r -q s -r q -s
	0b100000, // i

	0b110000, // v
	0b101000, // C
	0b100100, // l
	// 0b100010, // dupe C

	0b111000, // E
	0b101100, // y
	0b110100, // λ
	0b101010, // tri

	0b111100, // K
	0b101110, // Ψ
	0b110110, // X
	// 0b111010, // dupe Ψ

	0b111110, // hat

	0b111111, // star
] as const;
export type Connection = typeof Connections[number];

const Colors = ["none", "red", "green", "blue"] as const;
export type Color = typeof Colors[number];

type Cells = Record<CoordinateKey, Cell>;

const lerp = (t: number, a: number, b: number): number => {
	return (1 - t) * a + t * b;
};

const drawCellBackground = (
	ctx: Context2D,
	coordinate: Coordinate
): boolean => {
	ctx.save();
	ctx.scale(0.855, 0.855);
	ctx.fill(hexagon);
	const interactionKey = asCoordinateKey(coordinate);
	ctx.interactible(interactionKey, hexagon);
	ctx.restore();
	return ctx.interacted(interactionKey);
};

import BezierEasing from "bezier-easing";
const easing = BezierEasing(0.25, 0.1, 0.25, 1);
const drawCell = (
	ctx: Context2D,
	time: DOMHighResTimeStamp,
	{ coordinate, orientation, connection, color }: Cell
): boolean => {
	const clicked = drawCellBackground(ctx, coordinate);

	ctx.save();
	const t = easing(
		Math.min((time - orientation.startTime) / orientation.duration, 1)
	);
	ctx.rotate(
		(lerp(
			t,
			orientation.animate === "clockwise"
				? orientation.value - 60
				: orientation.value + 60,
			orientation.value
		) *
			Math.PI) /
			180
	);
	if (t < 1) {
		ctx.draw();
	}
	switch (color) {
		case "none":
			ctx.fillStyle = ctx.strokeStyle = cellForeground;
			break;
		case "red":
			ctx.fillStyle = ctx.strokeStyle = red;
			break;
		case "green":
			ctx.fillStyle = ctx.strokeStyle = green;
			break;
		case "blue":
			ctx.fillStyle = ctx.strokeStyle = blue;
			break;
	}
	drawEdges(ctx, connection);
	ctx.restore();

	return clicked;
};

const drawGameOverCell = (
	ctx: Context2D,
	{ coordinate, orientation, connection }: Cell,
	l: number
) => {
	drawCellBackground(ctx, coordinate);

	ctx.save();
	ctx.rotate((orientation.value * Math.PI) / 180);
	ctx.fillStyle = ctx.strokeStyle = `hsl(51deg 100% ${l}%)`;
	drawEdges(ctx, connection);
	ctx.restore();
};

const drawEdges = (ctx: Context2D, connection: Connection) => {
	switch (connection) {
		case 0b100000: // i
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.restore();

			ctx.save();
			ctx.scale(0.25, 0.25);
			ctx.fill(hexagon);
			ctx.restore();
			break;
		case 0b110000: // v
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.restore();
			break;
		case 0b101000: // C
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((120 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.restore();
			break;
		case 0b100100: // l
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(-hexagonUnitHeight, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.restore();
			break;
		case 0b111000: // E
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.restore();
			break;
		case 0b101100: // y
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(-hexagonUnitHeight, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((120 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.restore();
			break;
		case 0b110100: // λ
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(-hexagonUnitHeight, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.restore();
			break;
		case 0b101010: // tri
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((120 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((120 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.restore();
			break;
		case 0b111100: // K
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(-hexagonUnitHeight, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.restore();
			break;
		case 0b101110: // Ψ
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(-hexagonUnitHeight, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((120 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((120 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.restore();
			break;
		case 0b110110: // X
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(-hexagonUnitHeight, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(-hexagonUnitHeight, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.restore();
			break;
		case 0b111110: // hat
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(-hexagonUnitHeight, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(-hexagonUnitHeight, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.restore();
			break;
		case 0b111111: // star
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(-hexagonUnitHeight, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(-hexagonUnitHeight, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(-hexagonUnitHeight, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.restore();
			break;
	}
};

const base03 = "#002b36";
const base02 = "#073642";
const base01 = "#586e75";
const base00 = "#657b83";
const base0 = "#839496";
const base1 = "#93a1a1";
const base2 = "#eee8d5";
const base3 = "#fdf6e3";
const yellow = "#b58900";
const orange = "#cb4b16";
const red = "#dc322f";
const magenta = "#d33682";
const violet = "#6c71c4";
const blue = "#268bd2";
const cyan = "#2aa198";
const green = "#859900";
const background = base03;
const cellBackground = base02;
const cellForeground = base0;
const hexagonUnitHeight = Math.sqrt(3) / 2;
const hexagon = new Path2D(`
  m ${-hexagonUnitHeight} -0.5
  l  ${hexagonUnitHeight} -0.5
  l  ${hexagonUnitHeight}  0.5
  l                     0    1
  l ${-hexagonUnitHeight}  0.5
  l ${-hexagonUnitHeight} -0.5
  z
`);

const mostCommonColor = (cells: Cells, span: Set<CoordinateKey>): Color => {
	const colorCount: Record<Color, number> = {
		none: 0,
		red: 0,
		green: 0,
		blue: 0,
	};
	for (const coordinateKey of span) {
		const { color } = cells[coordinateKey]!;
		colorCount[color] ??= 0;
		colorCount[color] += 1;
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
function assertCoordinateKey(value: string): asserts value is CoordinateKey {}

const entries = <K extends string, V>(values: Record<K, V>): [K, V][] =>
	Object.entries(values) as [K, V][];
type FacingNeighboursByCoordinate = Record<CoordinateKey, Set<CoordinateKey>>;
type Spans = Record<number, Set<CoordinateKey>>;
const calculateSpans = (
	cells: Cells,
	facingNeighboursByCoordinate: FacingNeighboursByCoordinate
): Spans => {
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
	for (const coordinateKey of Object.keys(cells)) {
		assertCoordinateKey(coordinateKey);
		floodFill(coordinateKey, ++nextSpan);
	}
	const spans: Spans = {};
	for (const [coordinateKey, span] of Object.entries(spanByCoordinate)) {
		assertCoordinateKey(coordinateKey);
		spans[span] ??= new Set<CoordinateKey>();
		spans[span]!.add(coordinateKey);
	}
	return spans;
};

const updateColors = (cells: Cells, spans: Spans) => {
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
		const currentColor = mostCommonColor(cells, span);
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

	for (const [color, coordinateKeys] of entries(colors)) {
		for (const coordinateKey of coordinateKeys) {
			cells[coordinateKey]!.color = color;
		}
	}
};
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

const Neighbours = ({
	coordinate,
	orientation: { value: orientation },
	connection,
}: Cell): Coordinate[] => {
	const coordinates = [];
	const { q, r, s } = coordinate;
	// r
	if (connection & 0b100000) {
		coordinates.push(
			rotate({ q: q + 1, r, s: s - 1 }, orientation, coordinate)
		);
	}

	// -q
	if (connection & 0b010000) {
		coordinates.push(
			rotate({ q, r: r + 1, s: s - 1 }, orientation, coordinate)
		);
	}

	// s
	if (connection & 0b001000) {
		coordinates.push(
			rotate({ q: q - 1, r: r + 1, s }, orientation, coordinate)
		);
	}

	// -r
	if (connection & 0b000100) {
		coordinates.push(
			rotate({ q: q - 1, r, s: s + 1 }, orientation, coordinate)
		);
	}

	// q
	if (connection & 0b000010) {
		coordinates.push(
			rotate({ q, r: r - 1, s: s + 1 }, orientation, coordinate)
		);
	}

	// -s
	if (connection & 0b000001) {
		coordinates.push(
			rotate({ q: q + 1, r: r - 1, s }, orientation, coordinate)
		);
	}
	return coordinates;
};

const updateFacingNeighbours = (
	coordinateKey: CoordinateKey,
	cells: Cells,
	facingNeighboursByCoordinate: FacingNeighboursByCoordinate
) => {
	const cell = cells[coordinateKey]!;
	for (const neighbour of Neighbours(cell)) {
		const neighbourKey = asCoordinateKey(neighbour);
		const neighbourCell = cells[neighbourKey];
		if (!neighbourCell) {
			continue;
		}
		facingNeighboursByCoordinate[coordinateKey] ??= new Set<CoordinateKey>();
		facingNeighboursByCoordinate[coordinateKey]!.add(neighbourKey);
	}
};

import type { GameLoop, Context2D } from "./index";

const gameLoop: GameLoop =
	(memory) =>
	(ctx, time, [width, height], events) => {
		ctx.fillStyle = background;
		ctx.fillRect(0, 0, width, height);

		const size = 5;
		if (!memory["state"]) {
			const cells: Cells = {};
			const config = {
				size,
				seed: "9f96afb4-47ea-4ef8-8a18-7b8fa218573f",
				mode: "prims",
			} as const;
			for (const { coordinate, orientation, connection } of PuzzleGenerator(
				config
			)) {
				cells[asCoordinateKey(coordinate)] = {
					coordinate,
					orientation: {
						value: orientation,
						animate: "clockwise",
						startTime: 0,
						duration: 250,
					},
					connection,
					color: "none",
				};
			}
			memory["cells"] = cells;
			memory["state"] = "playing";
			const facingNeighboursByCoordinate = {};
			for (const coordinateKey of Object.keys(cells)) {
				assertCoordinateKey(coordinateKey);
				updateFacingNeighbours(
					coordinateKey,
					cells,
					facingNeighboursByCoordinate
				);
			}
			memory["facingNeighboursByCoordinate"] = facingNeighboursByCoordinate;
			const spans = calculateSpans(cells, facingNeighboursByCoordinate);
			updateColors(cells, spans);
		}

		switch (memory["state"]) {
			case "playing": {
				ctx.save();
				ctx.translate(width / 2, height / 2);
				const horizontalScale =
					width / (hexagonUnitHeight * 2 * (2 * size + 1));
				const verticalScale = height / (2 * (2 * size * 0.75 + 1));
				const scale = Math.min(horizontalScale, verticalScale);
				ctx.scale(scale, scale);
				const cells: Cells = memory["cells"];
				ctx.fillStyle = cellBackground;
				for (const [coordinateKey, cell] of Object.entries(cells)) {
					assertCoordinateKey(coordinateKey);
					const {
						coordinate: { q, r },
					} = cell;
					// Q basis [Math.sqrt(3), 0]
					// R basis [Math.sqrt(3) / 2, 3 / 2]
					// [x, y] = Q basis * q + R basis * r
					const x = 2 * hexagonUnitHeight * q + hexagonUnitHeight * r;
					const y = (3 / 2) * r;
					ctx.save();
					ctx.translate(x, y);
					if (drawCell(ctx, time, cell)) {
						cell.orientation.value += 60;
						cell.orientation.value %= 360;
						cell.orientation.animate = "clockwise";
						cell.orientation.startTime = time;

						const facingNeighboursByCoordinate =
							memory["facingNeighboursByCoordinate"];
						delete facingNeighboursByCoordinate[coordinateKey];
						updateFacingNeighbours(
							coordinateKey,
							cells,
							facingNeighboursByCoordinate
						);
						const spans = calculateSpans(cells, facingNeighboursByCoordinate);
						if (Object.values(spans).length === 1) {
							memory["state"] = "game over";
						} else {
							updateColors(cells, spans);
						}
						ctx.draw();
					}
					ctx.restore();
				}
				ctx.restore();
				break;
			}

			case "game over": {
				ctx.save();
				ctx.translate(width / 2, height / 2);
				const horizontalScale =
					width / (hexagonUnitHeight * 2 * (2 * size + 1));
				const verticalScale = height / (2 * (2 * size * 0.75 + 1));
				const scale = Math.min(horizontalScale, verticalScale);
				ctx.scale(scale, scale);
				const cells: Cells = memory["cells"];
				ctx.fillStyle = cellBackground;
				const t = (Math.cos(Math.PI * (time / 2000)) + 1) / 2;
				const l = Math.round(lerp(t, 50, 100));
				for (const [coordinateKey, cell] of Object.entries(cells)) {
					assertCoordinateKey(coordinateKey);
					const {
						coordinate: { q, r },
					} = cell;
					// Q basis [Math.sqrt(3), 0]
					// R basis [Math.sqrt(3) / 2, 3 / 2]
					// [x, y] = Q basis * q + R basis * r
					const x = 2 * hexagonUnitHeight * q + hexagonUnitHeight * r;
					const y = (3 / 2) * r;
					ctx.save();
					ctx.translate(x, y);
					drawGameOverCell(ctx, cell, l);
					ctx.restore();
				}
				ctx.restore();
				ctx.draw();
				break;
			}
		}
	};

export default gameLoop;
