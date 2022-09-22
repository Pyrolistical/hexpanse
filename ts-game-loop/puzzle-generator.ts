import { Connection, Orientation, Orientations } from "./index";

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
	q: number;
	r: number;
	orientation: Orientation;
	connection: Connection;
};

export type DenormalConnection = number;
export const normalizeConnection = (
	connection: DenormalConnection
): Connection => {
	if (!connection) {
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
export type Neighbour = { q: number; r: number; direction: Direction };
const Neighbours = (q: number, r: number): Neighbour[] => {
	return [
		// q
		{
			q,
			r: r - 1,
			direction: 0,
		},

		// -s
		{
			q: q + 1,
			r: r - 1,
			direction: 1,
		},

		// r
		{
			q: q + 1,
			r,
			direction: 2,
		},

		// -q
		{
			q,
			r: r + 1,
			direction: 3,
		},

		// s
		{
			q: q - 1,
			r: r + 1,
			direction: 4,
		},

		// -r
		{
			q: q - 1,
			r,
			direction: 5,
		},
	];
};

export const ValidNeighbours = (
	size: number,
	q: number,
	r: number
): Neighbour[] =>
	Neighbours(q, r).filter(({ q, r }) => {
		if (
			q < 0 ||
			q > 2 * size ||
			r < 0 ||
			r > 2 * size ||
			q + r < size ||
			q + r > 3 * size
		) {
			return false;
		}
		return true;
	});

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

import Seedrandom from "seedrandom";

type Segment = {
	q: number;
	r: number;
	forwards: DenormalConnection;
	backwards: DenormalConnection;
};

type QR<T> = T[][];

const RandomNeighbour = (
	random: Seedrandom.PRNG,
	size: number,
	q: number,
	r: number
): Neighbour => {
	const neighbours = ValidNeighbours(size, q, r);
	const randomIndex = Math.floor(random() * neighbours.length);
	return neighbours[randomIndex]!;
};

const loopErasedRandomWalk = (
	size: number,
	random: Seedrandom.PRNG,
	q: number,
	r: number,
	remaining: QR<boolean>
): Segment[] => {
	const working: QR<boolean> = [];
	let path: Segment[] = [
		{
			q,
			r,
			forwards: 0,
			backwards: 0,
		},
	];
	working[q] ??= [];
	working[q]![r] = true;
	while (true) {
		const { q, r } = path.at(-1)!;
		const {
			q: neighbourQ,
			r: neighbourR,
			direction,
		} = RandomNeighbour(random, size, q, r);
		const looped = working[neighbourQ]?.[neighbourR];
		if (looped) {
			const loopIndex =
				path.findIndex(({ q, r }) => q === neighbourQ && r === neighbourR) + 1;
			for (let i = loopIndex; i < path.length; i++) {
				const { q, r } = path[i]!;
				delete working[q]![r];
				if (working[q]!.length === 0) {
					delete working[q];
				}
			}
			path = path.slice(0, loopIndex);

			continue;
		} else {
			const { forwards, backwards } = asConnections(direction);
			path.at(-1)!.forwards = forwards;
			path.push({
				q: neighbourQ,
				r: neighbourR,
				forwards: 0,
				backwards,
			});
			const end = !remaining[neighbourQ]?.[neighbourR];
			if (end) {
				return path;
			}
			working[neighbourQ] ??= [];
			working[neighbourQ]![neighbourR] = true;
		}
	}
};

// https://en.wikipedia.org/wiki/Loop-erased_random_walk
export default ({ size, seed }: Config): Cell[] => {
	const random = Seedrandom(seed);

	const solution: QR<DenormalConnection> = [];
	const remaining: QR<boolean> = [];
	let remainingCount = 0;
	for (let q = 0; q <= 2 * size; q++) {
		for (let r = 0; r <= 2 * size; r++) {
			if (q + r < size || q + r > 3 * size) {
				continue;
			}
			remaining[q] ??= [];
			remaining[q]![r] = true;
			remainingCount += 1;
		}
	}

	// start
	let randomRemainingIndex = Math.floor(random() * remainingCount);
	q: for (let q = 0; q <= 2 * size; q++) {
		for (let r = 0; r <= 2 * size; r++) {
			if (q + r < size || q + r > 3 * size) {
				continue;
			}
			if (!remaining[q]?.[r]) {
				continue;
			}
			if (randomRemainingIndex === 0) {
				delete remaining[q]![r];
				if (remaining[q]!.length === 0) {
					delete remaining[q];
				}
				remainingCount -= 1;
				break q;
			}
			randomRemainingIndex -= 1;
		}
	}

	remaining: while (remainingCount > 0) {
		let randomRemainingIndex = Math.floor(random() * remainingCount);
		for (let q = 0; q <= 2 * size; q++) {
			for (let r = 0; r <= 2 * size; r++) {
				if (q + r < size || q + r > 3 * size) {
					continue;
				}
				if (!remaining[q]?.[r]) {
					continue;
				}
				if (randomRemainingIndex === 0) {
					delete remaining[q]![r];
					if (remaining[q]!.length === 0) {
						delete remaining[q];
					}
					remainingCount -= 1;

					const path = loopErasedRandomWalk(size, random, q, r, remaining);
					for (const { q, r, forwards, backwards } of path) {
						if (remaining[q]![r]) {
							delete remaining[q]![r];
							if (remaining[q]!.length === 0) {
								delete remaining[q];
							}
							remainingCount -= 1;
						}
						solution[q] ??= [];
						solution[q]![r] |= forwards | backwards;
					}
					continue remaining;
				}
				randomRemainingIndex -= 1;
			}
		}
	}

	const cells = [];
	for (let q = 0; q <= 2 * size; q++) {
		for (let r = 0; r <= 2 * size; r++) {
			if (q + r < size || q + r > 3 * size) {
				continue;
			}
			const randomOrientationIndex = Math.floor(random() * Orientations.length);
			const orientation = Orientations[randomOrientationIndex]!;
			const denormalConnection = solution[q]![r]!;
			const connection = normalizeConnection(denormalConnection);
			cells.push({
				q,
				r,
				orientation,
				connection,
			});
		}
	}
	return cells;
};
