import type { GameLoop, Frame, Mouse } from "../play/index";

import PuzzleGenerator from "./puzzle-generator";
import * as elements from "./elements";
const hexagonUnitHeight = elements.hexagonUnitHeight;

import {
	FacingNeighboursByCoordinate,
	updateFacingNeighbours,
	calculateSpans,
	updateColors,
	Color,
} from "./coloring";

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
export type Cell = {
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

type QR<T> = T[][];

const lerp = (t: number, a: number, b: number): number => {
	return (1 - t) * a + t * b;
};

export default async (
	ctx: CanvasRenderingContext2D,
	frame: Frame,
	mouse: Mouse
): Promise<GameLoop> => {
	let state: "boot" | "playing" | "game over" = "boot";
	let cells: QR<Cell>;
	let facingNeighboursByCoordinate: FacingNeighboursByCoordinate;
	return () => {
		const width = frame.width();
		const height = frame.height();
		elements.background(ctx, width, height);

		const size = 1;
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
			const spans = calculateSpans(size, facingNeighboursByCoordinate);
			updateColors(size, cells, spans);
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
						if (elements.cellBackgroundAndEdges(frame, ctx, cell, mouse)) {
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
						elements.gameOverCell(frame, ctx, cell, l);
						ctx.restore();
					}
				}
				ctx.restore();
				return;
			}
		}
	};
};
