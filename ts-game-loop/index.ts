import PuzzleGenerator from "./puzzle-generator";

export type Coordinate = {
	q: number;
	r: number;
};

type Milliseconds = number;
type RotationDirection = "clockwise" | "counter-clockwise";
type OrientationAnimation = {
	value: Orientation;
	animate: RotationDirection;
	startTime: DOMHighResTimeStamp;
	duration: Milliseconds;
};
type Cell = {
	q: number;
	r: number;
	orientation: OrientationAnimation;
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

const drawCellBackground = (ctx: CanvasRenderingContext2D): boolean => {
	ctx.save();
	ctx.scale(0.855, 0.855);
	ctx.fill(hexagon);
	const clicked = false; //ctx.isPointInPath(hexagon, x, y);
	ctx.restore();
	return clicked;
};

import BezierEasing from "bezier-easing";
const easing = BezierEasing(0.25, 0.1, 0.25, 1);
const drawCell = (
	frame: Frame,
	ctx: CanvasRenderingContext2D,
	{ orientation, connection, color }: Cell
): boolean => {
	const clicked = drawCellBackground(ctx);

	ctx.save();
	const t = easing(
		Math.min((frame.time() - orientation.startTime) / orientation.duration, 1)
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
		frame.next();
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
	frame: Frame,
	ctx: CanvasRenderingContext2D,
	{ orientation, connection }: Cell,
	l: number
) => {
	drawCellBackground(ctx);

	ctx.save();
	const t = easing(
		Math.min((frame.time() - orientation.startTime) / orientation.duration, 1)
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
		frame.next();
	}
	ctx.fillStyle = ctx.strokeStyle = `hsl(51deg 100% ${l}%)`;
	drawEdges(ctx, connection);
	ctx.restore();
};

const drawEdges = (ctx: CanvasRenderingContext2D, connection: Connection) => {
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
const floodFill = (
	size: number,
	currentQ: number,
	currentR: number,
	span: number,
	spanByCoordinate: QR<number>,
	facingNeighboursByCoordinate: FacingNeighboursByCoordinate
) => {
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
					floodFill(
						size,
						q,
						r,
						span,
						spanByCoordinate,
						facingNeighboursByCoordinate
					);
				}
			}
		}
	}
};
const calculateSpans = (
	size: number,
	facingNeighboursByCoordinate: FacingNeighboursByCoordinate
): Spans => {
	let nextSpan = 0;
	const spanByCoordinate: QR<number> = [];
	for (let q = 0; q <= 2 * size; q++) {
		for (let r = 0; r <= 2 * size; r++) {
			if (q + r < size || q + r > 3 * size) {
				continue;
			}
			floodFill(
				size,
				q,
				r,
				++nextSpan,
				spanByCoordinate,
				facingNeighboursByCoordinate
			);
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
	size: number,
	q: number,
	r: number,
	orientation: Orientation,
	originQ: number,
	originR: number
): Coordinate => {
	q -= size;
	r -= size;
	originQ -= size;
	originR -= size;
	let resultQ = q - originQ;
	let resultR = r - originR;
	const s = -q - r;
	const originS = -originQ - originR;
	let resultS = s - originS;
	while (orientation > 0) {
		const nextQ = -resultR;
		const nextR = -resultS;
		const nextS = -resultQ;
		resultQ = nextQ;
		resultR = nextR;
		resultS = nextS;
		orientation -= 60;
	}
	resultQ += originQ;
	resultR += originR;
	return { q: resultQ + size, r: resultR + size };
};

const Neighbours = (
	size: number,
	{ q, r, orientation: { value: orientation }, connection }: Cell
): Coordinate[] => {
	const coordinates = [];
	// r
	if (connection & 0b100000) {
		coordinates.push(rotate(size, q + 1, r, orientation, q, r));
	}

	// -q
	if (connection & 0b010000) {
		coordinates.push(rotate(size, q, r + 1, orientation, q, r));
	}

	// s
	if (connection & 0b001000) {
		coordinates.push(rotate(size, q - 1, r + 1, orientation, q, r));
	}

	// -r
	if (connection & 0b000100) {
		coordinates.push(rotate(size, q - 1, r, orientation, q, r));
	}

	// q
	if (connection & 0b000010) {
		coordinates.push(rotate(size, q, r - 1, orientation, q, r));
	}

	// -s
	if (connection & 0b000001) {
		coordinates.push(rotate(size, q + 1, r - 1, orientation, q, r));
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
	for (const { q: neighbourQ, r: neighbourR } of Neighbours(size, cell)) {
		const neighbourCell = cells[neighbourQ]?.[neighbourR];
		if (!neighbourCell) {
			continue;
		}
		facingNeighboursByCoordinate[q] ??= [];
		facingNeighboursByCoordinate[q]![r] ??= [];
		facingNeighboursByCoordinate[q]![r]![neighbourQ] ??= [];
		facingNeighboursByCoordinate[q]![r]![neighbourQ]![neighbourR] = true;
	}
};

import type { GameLoop, Frame } from "../play/index";

export default async (
	ctx: CanvasRenderingContext2D,
	frame: Frame
): Promise<GameLoop> => {
	let state: "boot" | "playing" | "game over" = "boot";
	let cells: QR<Cell>;
	let facingNeighboursByCoordinate: FacingNeighboursByCoordinate;
	return () => {
		const width = frame.width();
		const height = frame.height();
		ctx.fillStyle = background;
		ctx.fillRect(0, 0, width, height);

		const size = 13;
		if (state === "boot") {
			cells = [];
			const config = {
				size,
				seed: "9f96afb4-47ea-4ef8-8a18-7b8fa218573f",
				mode: "wilsons",
			} as const;
			for (const { q, r, orientation, connection } of PuzzleGenerator(config)) {
				cells[q] ??= [];
				cells[q]![r] = {
					q,
					r,
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
			state = "playing";
			facingNeighboursByCoordinate = [];
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
			// const spans = calculateSpans(size, facingNeighboursByCoordinate);
			// updateColors(size, cells, spans);
		}

		switch (state) {
			case "playing": {
				ctx.save();
				ctx.translate(width / 2, height / 2);
				const horizontalScale =
					width / (hexagonUnitHeight * 2 * (2 * size + 1));
				const verticalScale = height / (2 * (2 * size * 0.75 + 1));
				const scale = Math.min(horizontalScale, verticalScale);
				ctx.scale(scale, scale);
				ctx.fillStyle = cellBackground;
				for (let q = 0; q <= 2 * size; q++) {
					for (let r = 0; r <= 2 * size; r++) {
						if (q + r < size || q + r > 3 * size) {
							continue;
						}
						const cell = cells[q]![r]!;
						const { q: cellQ, r: cellR } = cell;
						// Q basis [Math.sqrt(3), 0]
						// R basis [Math.sqrt(3) / 2, 3 / 2]
						// [x, y] = Q basis * q + R basis * r
						const x =
							2 * hexagonUnitHeight * (cellQ - size) +
							hexagonUnitHeight * (cellR - size);
						const y = (3 / 2) * (cellR - size);
						ctx.save();
						ctx.translate(x, y);
						if (drawCell(frame, ctx, cell)) {
							cell.orientation.value += 60;
							cell.orientation.value %= 360;
							cell.orientation.animate = "clockwise";
							cell.orientation.startTime = frame.time();

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
								state = "game over";
							} else {
								updateColors(size, cells, spans);
							}
							frame.next();
						}
						ctx.restore();
					}
				}
				ctx.restore();
				return;
			}

			case "game over": {
				ctx.save();
				ctx.translate(width / 2, height / 2);
				const horizontalScale =
					width / (hexagonUnitHeight * 2 * (2 * size + 1));
				const verticalScale = height / (2 * (2 * size * 0.75 + 1));
				const scale = Math.min(horizontalScale, verticalScale);
				ctx.scale(scale, scale);
				ctx.fillStyle = cellBackground;
				const t = (Math.cos(Math.PI * (frame.time() / 2000)) + 1) / 2;
				const l = Math.round(lerp(t, 50, 100));
				for (let q = 0; q <= 2 * size; q++) {
					for (let r = 0; r <= 2 * size; r++) {
						if (q + r < size || q + r > 3 * size) {
							continue;
						}
						const cell = cells[q]![r]!;
						const { q: cellQ, r: cellR } = cell;
						// Q basis [Math.sqrt(3), 0]
						// R basis [Math.sqrt(3) / 2, 3 / 2]
						// [x, y] = Q basis * q + R basis * r
						const x =
							2 * hexagonUnitHeight * (cellQ - size) +
							hexagonUnitHeight * (cellR - size);
						const y = (3 / 2) * (cellR - size);
						ctx.save();
						ctx.translate(x, y);
						drawGameOverCell(frame, ctx, cell, l);
						ctx.restore();
					}
				}
				ctx.restore();
				return;
			}
		}
	};
};
