import { Coordinate, Connection, Orientation } from "../game-loop";
import Prims from "./prims";
import Wilsons from "./wilsons";

const Modes = ["prims", "wilsons"] as const;
type Mode = typeof Modes[number];
export type Config = {
	seed: string;
	size: number;
	mode: Mode;
};
export const validMode = (value: any): value is Mode => {
	return Modes.includes(value);
};
export type Cell = {
	coordinate: Coordinate;
	orientation: Orientation;
	connection: Connection;
};

export type DenormalConnection = number;
export const normalizeConnection = (
	connection: DenormalConnection
): Connection => {
	if (connection === 0) {
		throw new Error("connection cannot be empty");
	}
	if (connection === 0b111111) {
		return 0b111111; // star
	}
	while (!(connection & 0b100000) || connection & 0b000001) {
		const first = connection & 0b100000;
		connection <<= 1;
		connection &= 0b111111;
		if (first) {
			connection |= 0b000001;
		}
	}
	const truncated = (connection & 0b011110) >> 1;
	switch (truncated) {
		case 0b0000:
			return 0b100000; // i

		case 0b1000:
			return 0b110000; // v
		case 0b0100:
			return 0b101000; // C
		case 0b0010:
			return 0b100100; // l
		case 0b0001:
			return 0b101000; // C

		case 0b1100:
			return 0b111000; // E
		case 0b0110:
			return 0b101100; // y
		case 0b0011:
			return 0b110100; // λ
		case 0b1001:
			return 0b101100; // y
		case 0b1010:
			return 0b110100; // λ
		case 0b0101:
			return 0b101010; // tri

		case 0b1110:
			return 0b111100; // K
		case 0b0111:
			return 0b101110; // Ψ
		case 0b1011:
			return 0b110110; // X
		case 0b1101:
			return 0b101110; // Ψ

		case 0b1111:
			return 0b111110; // hat

		default:
			throw new Error(
				`unhandled truncated case ${truncated.toString(
					2
				)} from connection ${connection.toString(2)}`
			);
	}
};

// direction is indexes a hex side
type Direction =
	| 0 // q
	| 1 // -s
	| 2 // r
	| 3 // -q
	| 4 // s
	| 5; // -r
export type Neighbour = { coordinate: Coordinate; direction: Direction };
const Neighbours = ({ q, r, s }: Coordinate): Neighbour[] => {
	return [
		// q
		{
			coordinate: { q, r: r - 1, s: s + 1 },
			direction: 0,
		},

		// -s
		{
			coordinate: { q: q + 1, r: r - 1, s },
			direction: 1,
		},

		// r
		{
			coordinate: { q: q + 1, r, s: s - 1 },
			direction: 2,
		},

		// -q
		{
			coordinate: { q, r: r + 1, s: s - 1 },
			direction: 3,
		},

		// s
		{
			coordinate: { q: q - 1, r: r + 1, s },
			direction: 4,
		},

		// -r
		{
			coordinate: { q: q - 1, r, s: s + 1 },
			direction: 5,
		},
	];
};

export const ValidNeighbours = (
	size: number,
	coordinate: Coordinate
): Neighbour[] =>
	Neighbours(coordinate).filter(({ coordinate: { q, r, s } }) => {
		if (q < -size || q > size) {
			return false;
		}
		if (r < -size || r > size) {
			return false;
		}
		if (s < -size || s > size) {
			return false;
		}
		return true;
	});

export const CoordinatesGenerator = (size: number): Coordinate[] => {
	const coordinates = [];
	for (let q = -size; q <= size; q++) {
		for (let r = -size; r <= size; r++) {
			const s = -q - r;
			if (-size <= s && s <= size) {
				coordinates.push({
					q,
					r,
					s,
				});
			}
		}
	}
	return coordinates;
};

export const asConnections = (
	direction: Direction
): {
	forwards: DenormalConnection;
	backwards: DenormalConnection;
} => {
	return {
		forwards: 0b100000 >> direction,
		backwards: 0b100000 >> (direction + 3) % 6,
	};
};

export default (config: Config): Cell[] => {
	const { mode } = config;
	switch (mode) {
		case "prims":
			return Prims(config);
		case "wilsons":
			return Wilsons(config);
	}
};
