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
	time: DOMHighResTimeStamp,
	{ coordinate, orientation, connection }: Cell,
	l: number
) => {
	drawCellBackground(ctx, coordinate);

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
// const base01 = "#586e75";
// const base00 = "#657b83";
const base0 = "#839496";
// const base1 = "#93a1a1";
// const base2 = "#eee8d5";
// const base3 = "#fdf6e3";
// const yellow = "#b58900";
// const orange = "#cb4b16";
const red = "#dc322f";
// const magenta = "#d33682";
// const violet = "#6c71c4";
const blue = "#268bd2";
// const cyan = "#2aa198";
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

const mostCommonColor = (
	size: number,
	cells: QR<Cell>,
	span: QR<boolean>
): Color => {
	const colorCount: Record<Color, number> = {
		none: 0,
		red: 0,
		green: 0,
		blue: 0,
	};
	for (let q = 0; q <= 2 * size; q++) {
		for (let r = 0; r <= 2 * size; r++) {
			if (q + r < size || q + r > 3 * size) {
				continue;
			}
			if (span[q]?.[r]) {
				const { color } = cells[q]![r]!;
				colorCount[color] ??= 0;
				colorCount[color] += 1;
			}
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

type QR<T> = T[][];
const Q = (size: number, { q }: Coordinate) => size + q;
const R = (size: number, { r }: Coordinate) => size + r;

const QRSize = <T>(size: number, qr: QR<T>): number => {
	let count = 0;
	for (let q = 0; q <= 2 * size; q++) {
		for (let r = 0; r <= 2 * size; r++) {
			if (q + r < size || q + r > 3 * size) {
				continue;
			}
			if (qr[q]?.[r]) {
				count += 1;
			}
		}
	}
	return count;
};

const entries = <K extends string, V>(values: Record<K, V>): [K, V][] =>
	Object.entries(values) as [K, V][];
type FacingNeighboursByCoordinate = QR<QR<boolean>>;
type Spans = Record<number, QR<boolean>>;
const calculateSpans = (
	size: number,
	facingNeighboursByCoordinate: FacingNeighboursByCoordinate
): Spans => {
	let nextSpan = 0;
	const spanByCoordinate: QR<number> = [];
	const floodFill = (currentQ: number, currentR: number, span: number) => {
		if (spanByCoordinate[currentQ]?.[currentR]) {
			return;
		}
		spanByCoordinate[currentQ] ??= [];
		spanByCoordinate[currentQ]![currentR] = span;
		const facingNeighbours = facingNeighboursByCoordinate[currentQ]?.[currentR];
		if (facingNeighbours) {
			for (let q = 0; q <= 2 * size; q++) {
				for (let r = 0; r <= 2 * size; r++) {
					if (q + r < size || q + r > 3 * size) {
						continue;
					}
					if (
						facingNeighbours[q]?.[r] &&
						facingNeighboursByCoordinate[q]?.[r]?.[currentQ]?.[currentR]
					) {
						floodFill(q, r, span);
					}
				}
			}
		}
	};
	for (let q = 0; q <= 2 * size; q++) {
		for (let r = 0; r <= 2 * size; r++) {
			if (q + r < size || q + r > 3 * size) {
				continue;
			}
			floodFill(q, r, ++nextSpan);
		}
	}
	const spans: Spans = {};
	for (let q = 0; q <= 2 * size; q++) {
		for (let r = 0; r <= 2 * size; r++) {
			if (q + r < size || q + r > 3 * size) {
				continue;
			}
			const span = spanByCoordinate[q]![r]!;
			spans[span] ??= [];
			spans[span]![q] ??= [];
			spans[span]![q]![r] = true;
		}
	}
	return spans;
};

const updateColors = (size: number, cells: QR<Cell>, spans: Spans) => {
	const avaiableColors = new Set<Color>(Colors);
	avaiableColors.delete("none");

	const colors: Record<Color, QR<boolean>> = {
		none: [],
		red: [],
		green: [],
		blue: [],
	};
	const sortedSpans = Object.values(spans).sort(
		(a, b) => QRSize(size, b) - QRSize(size, a)
	);
	const longestSpans = [];
	const uncoloredSpans = [];

	for (const span of sortedSpans) {
		if (QRSize(size, span) > 1 && longestSpans.length < avaiableColors.size) {
			longestSpans.push(span);
		} else {
			uncoloredSpans.push(span);
		}
	}

	for (const span of longestSpans) {
		const currentColor = mostCommonColor(size, cells, span);
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
		if (QRSize(size, span) <= 1) {
			break;
		}
		colors[color] = span;
		i += 1;
	}

	for (const span of uncoloredSpans.slice(i)) {
		for (let q = 0; q <= 2 * size; q++) {
			for (let r = 0; r <= 2 * size; r++) {
				if (q + r < size || q + r > 3 * size) {
					continue;
				}
				if (span[q]?.[r]) {
					colors.none[q] ??= [];
					colors.none[q]![r] = true;
				}
			}
		}
	}

	for (const [color, group] of entries(colors)) {
		for (let q = 0; q <= 2 * size; q++) {
			for (let r = 0; r <= 2 * size; r++) {
				if (q + r < size || q + r > 3 * size) {
					continue;
				}
				if (group[q]?.[r]) {
					cells[q] ??= [];
					cells[q]![r]!.color = color;
				}
			}
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
	size: number,
	q: number,
	r: number,
	cells: QR<Cell>,
	facingNeighboursByCoordinate: FacingNeighboursByCoordinate
) => {
	const cell = cells[q]![r]!;
	for (const neighbour of Neighbours(cell)) {
		const neighbourCell = cells[Q(size, neighbour)]?.[R(size, neighbour)];
		if (!neighbourCell) {
			continue;
		}
		facingNeighboursByCoordinate[q] ??= [];
		facingNeighboursByCoordinate[q]![r] ??= [];
		facingNeighboursByCoordinate[q]![r]![Q(size, neighbour)] ??= [];
		facingNeighboursByCoordinate[q]![r]![Q(size, neighbour)]![
			R(size, neighbour)
		] = true;
	}
};

import type { GameLoop, Context2D } from "./index";

const gameLoop: GameLoop =
	(memory) =>
	(ctx, time, [width, height]) => {
		ctx.fillStyle = background;
		ctx.fillRect(0, 0, width, height);

		const size = 1;
		if (!memory["state"]) {
			const cells: QR<Cell> = [];
			const config = {
				size,
				seed: "9f96afb4-47ea-4ef8-8a18-7b8fa218573f",
				mode: "wilsons",
			} as const;
			for (const { coordinate, orientation, connection } of PuzzleGenerator(
				config
			)) {
				cells[Q(size, coordinate)] ??= [];
				cells[Q(size, coordinate)]![R(size, coordinate)] = {
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
			const facingNeighboursByCoordinate: FacingNeighboursByCoordinate = [];
			for (let q = 0; q <= 2 * size; q++) {
				for (let r = 0; r <= 2 * size; r++) {
					if (q + r < size || q + r > 3 * size) {
						continue;
					}
					updateFacingNeighbours(
						size,
						q,
						r,
						cells,
						facingNeighboursByCoordinate
					);
				}
			}
			memory["facingNeighboursByCoordinate"] = facingNeighboursByCoordinate;
			const spans = calculateSpans(size, facingNeighboursByCoordinate);
			updateColors(size, cells, spans);
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
				const cells: QR<Cell> = memory["cells"];
				ctx.fillStyle = cellBackground;
				for (let q = 0; q <= 2 * size; q++) {
					for (let r = 0; r <= 2 * size; r++) {
						if (q + r < size || q + r > 3 * size) {
							continue;
						}
						const cell = cells[q]![r]!;
						const {
							coordinate: { q: cellQ, r: cellR },
						} = cell;
						// Q basis [Math.sqrt(3), 0]
						// R basis [Math.sqrt(3) / 2, 3 / 2]
						// [x, y] = Q basis * q + R basis * r
						const x = 2 * hexagonUnitHeight * cellQ + hexagonUnitHeight * cellR;
						const y = (3 / 2) * cellR;
						ctx.save();
						ctx.translate(x, y);
						if (drawCell(ctx, time, cell)) {
							cell.orientation.value += 60;
							cell.orientation.value %= 360;
							cell.orientation.animate = "clockwise";
							cell.orientation.startTime = time;

							const facingNeighboursByCoordinate: FacingNeighboursByCoordinate =
								memory["facingNeighboursByCoordinate"];
							delete facingNeighboursByCoordinate[q]?.[r];
							if (facingNeighboursByCoordinate[q]?.length === 0) {
								delete facingNeighboursByCoordinate[q];
							}
							updateFacingNeighbours(
								size,
								q,
								r,
								cells,
								facingNeighboursByCoordinate
							);
							const spans = calculateSpans(size, facingNeighboursByCoordinate);
							if (Object.values(spans).length === 1) {
								memory["state"] = "game over";
							} else {
								updateColors(size, cells, spans);
							}
							ctx.draw();
						}
						ctx.restore();
					}
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
				const cells: QR<Cell> = memory["cells"];
				ctx.fillStyle = cellBackground;
				const t = (Math.cos(Math.PI * (time / 2000)) + 1) / 2;
				const l = Math.round(lerp(t, 50, 100));
				for (let q = 0; q <= 2 * size; q++) {
					for (let r = 0; r <= 2 * size; r++) {
						if (q + r < size || q + r > 3 * size) {
							continue;
						}
						const cell = cells[q]![r]!;
						const {
							coordinate: { q: cellQ, r: cellR },
						} = cell;
						// Q basis [Math.sqrt(3), 0]
						// R basis [Math.sqrt(3) / 2, 3 / 2]
						// [x, y] = Q basis * q + R basis * r
						const x = 2 * hexagonUnitHeight * cellQ + hexagonUnitHeight * cellR;
						const y = (3 / 2) * cellR;
						ctx.save();
						ctx.translate(x, y);
						drawGameOverCell(ctx, time, cell, l);
						ctx.restore();
					}
				}
				ctx.restore();
				ctx.draw();
				break;
			}
		}
	};

export default gameLoop;
