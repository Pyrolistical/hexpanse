import { Orientations } from "../game-loop";

import Seedrandom from "seedrandom";

import {
	Config,
	Cell,
	DenormalConnection,
	ValidNeighbours,
	asConnections,
	normalizeConnection,
	Neighbour,
} from "./";

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
