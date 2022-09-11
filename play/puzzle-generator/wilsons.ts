import { Coordinate, Orientations } from "../game-loop";

import Seedrandom from "seedrandom";

import {
	Config,
	Cell,
	CoordinatesGenerator,
	DenormalConnection,
	ValidNeighbours,
	asConnections,
	normalizeConnection,
	Neighbour,
} from "./";

type Segment = {
	coordinate: Coordinate;
	forwards: DenormalConnection;
	backwards: DenormalConnection;
};

type QR<T> = T[][];
const Q = (size: number, { q }: Coordinate) => size + q;
const R = (size: number, { r }: Coordinate) => size + r;

const RandomNeighbour = (
	random: Seedrandom.PRNG,
	size: number,
	coordinate: Coordinate
): Neighbour => {
	const neighbours = ValidNeighbours(size, coordinate);
	const randomIndex = Math.floor(random() * neighbours.length);
	return neighbours[randomIndex]!;
};

const loopErasedRandomWalk = (
	size: number,
	random: Seedrandom.PRNG,
	start: Coordinate,
	remaining: QR<Coordinate>
): Segment[] => {
	const working: QR<boolean> = [];
	let path: Segment[] = [
		{
			coordinate: start,
			forwards: 0,
			backwards: 0,
		},
	];
	working[Q(size, start)] ??= [];
	working[Q(size, start)]![R(size, start)] = true;
	while (true) {
		const current = path.at(-1)!.coordinate;
		const { coordinate: neighbourCoordinate, direction } = RandomNeighbour(
			random,
			size,
			current
		);
		const looped =
			working[Q(size, neighbourCoordinate)]?.[R(size, neighbourCoordinate)];
		if (looped) {
			const loopIndex =
				path.findIndex(
					({ coordinate }) =>
						coordinate.q === neighbourCoordinate.q &&
						coordinate.r === neighbourCoordinate.r
				) + 1;
			for (let i = loopIndex; i < path.length; i++) {
				const { coordinate } = path[i]!;
				const q = Q(size, coordinate);
				const r = R(size, coordinate);
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
				coordinate: neighbourCoordinate,
				forwards: 0,
				backwards,
			});
			const end =
				!remaining[Q(size, neighbourCoordinate)]?.[
					R(size, neighbourCoordinate)
				];
			if (end) {
				return path;
			}
			working[Q(size, neighbourCoordinate)] ??= [];
			working[Q(size, neighbourCoordinate)]![R(size, neighbourCoordinate)] =
				true;
		}
	}
};

// https://en.wikipedia.org/wiki/Loop-erased_random_walk
export default ({ size, seed }: Config): Cell[] => {
	const random = Seedrandom(seed);

	const coordinates: Coordinate[] = CoordinatesGenerator(size);
	const solution: QR<DenormalConnection> = [];
	const remaining: QR<Coordinate> = [];
	let remainingCount = 0;
	for (const coordinate of coordinates) {
		remaining[Q(size, coordinate)] ??= [];
		remaining[Q(size, coordinate)]![R(size, coordinate)] = coordinate;
		remainingCount += 1;
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

	while (remainingCount > 0) {
		let randomRemainingIndex = Math.floor(random() * remainingCount);
		let current: Coordinate;
		q: for (let q = 0; q <= 2 * size; q++) {
			for (let r = 0; r <= 2 * size; r++) {
				if (q + r < size || q + r > 3 * size) {
					continue;
				}
				if (!remaining[q]?.[r]) {
					continue;
				}
				if (randomRemainingIndex === 0) {
					current = remaining[q]![r]!;
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
		const path = loopErasedRandomWalk(size, random, current!, remaining);
		for (const { coordinate, forwards, backwards } of path) {
			const q = Q(size, coordinate);
			const r = R(size, coordinate);
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
	}

	const cells = [];
	for (const coordinate of coordinates) {
		const denormalConnection =
			solution[Q(size, coordinate)]![R(size, coordinate)]!;
		const randomOrientationIndex = Math.floor(random() * Orientations.length);
		const orientation = Orientations[randomOrientationIndex]!;
		const connection = normalizeConnection(denormalConnection);
		cells.push({
			coordinate,
			orientation,
			connection,
		});
	}
	return cells;
};
