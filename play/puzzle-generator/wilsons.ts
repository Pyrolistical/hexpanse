import {
	Coordinate,
	CoordinateKey,
	asCoordinateKey,
	Orientations,
} from "../game-loop";

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
	key: CoordinateKey;
	coordinate: Coordinate;
	forwards: DenormalConnection;
	backwards: DenormalConnection;
};

// https://en.wikipedia.org/wiki/Loop-erased_random_walk
export default ({ size, seed }: Config): Cell[] => {
	const asIndex = (x: number) => x + size;

	const random = Seedrandom(seed);
	const RandomNeighbour = (size: number, coordinate: Coordinate): Neighbour => {
		const neighbours = ValidNeighbours(size, coordinate);
		const randomIndex = Math.floor(random() * neighbours.length);
		return neighbours[randomIndex]!;
	};

	const loopErasedRandomWalk = (
		start: Coordinate,
		remaining: Coordinate[][]
	): Segment[] => {
		const working: Coordinate[][] = [];
		const startKey = asCoordinateKey(start);
		let path: Segment[] = [
			{
				key: startKey,
				coordinate: start,
				forwards: 0,
				backwards: 0,
			},
		];
		working[asIndex(start.q)] ??= [];
		working[asIndex(start.q)]![asIndex(start.r)] = start;
		while (true) {
			const current = path.at(-1)!.coordinate;
			const { coordinate: neighbourCoordinate, direction } = RandomNeighbour(
				size,
				current
			);
			const neighbourKey = asCoordinateKey(neighbourCoordinate);
			const looped =
				working[asIndex(neighbourCoordinate.q)]?.[
					asIndex(neighbourCoordinate.r)
				];
			if (looped) {
				const loopIndex = path.findIndex(({ key }) => key === neighbourKey) + 1;
				for (let i = loopIndex; i < path.length; i++) {
					const { coordinate } = path[i]!;
					const q = asIndex(coordinate.q);
					const r = asIndex(coordinate.r);
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
					key: neighbourKey,
					coordinate: neighbourCoordinate,
					forwards: 0,
					backwards,
				});
				const end =
					!remaining[asIndex(neighbourCoordinate.q)]?.[
						asIndex(neighbourCoordinate.r)
					];
				if (end) {
					return path;
				}
				working[asIndex(neighbourCoordinate.q)] ??= [];
				working[asIndex(neighbourCoordinate.q)]![
					asIndex(neighbourCoordinate.r)
				] = neighbourCoordinate;
			}
		}
	};

	const coordinates: Coordinate[] = CoordinatesGenerator(size);
	const solution: Record<CoordinateKey, DenormalConnection> = {};
	const remaining: Coordinate[][] = [];
	let remainingCount = 0;
	for (const coordinate of coordinates) {
		remaining[asIndex(coordinate.q)] ??= [];
		remaining[asIndex(coordinate.q)]![asIndex(coordinate.r)] = coordinate;
		remainingCount += 1;
	}

	// start
	let randomRemainingIndex = Math.floor(random() * remainingCount);
	q: for (let q = 0; q < 2 * size; q++) {
		for (let r = 0; r < 2 * size; r++) {
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
		const path = loopErasedRandomWalk(current!, remaining);
		for (const { key, coordinate, forwards, backwards } of path) {
			const q = asIndex(coordinate.q);
			const r = asIndex(coordinate.r);
			if (remaining[q]![r]) {
				delete remaining[q]![r];
				if (remaining[q]!.length === 0) {
					delete remaining[q];
				}
				remainingCount -= 1;
			}
			solution[key] |= forwards | backwards;
		}
	}

	const cells = [];
	for (const coordinate of coordinates) {
		const denormalConnection = solution[asCoordinateKey(coordinate)]!;
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
