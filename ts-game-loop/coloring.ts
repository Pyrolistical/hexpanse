import { Cell, Orientation, Coordinate } from "./index";
const Colors = ["none", "red", "green", "blue"] as const;
export type Color = typeof Colors[number];

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
export type FacingNeighboursByCoordinate = QR<QR<boolean>>;
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
export const calculateSpans = (
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

export const updateColors = (size: number, cells: QR<Cell>, spans: Spans) => {
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

export const updateFacingNeighbours = (
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
