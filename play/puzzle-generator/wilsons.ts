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

function* skip<T>(n: number, iterator: IterableIterator<T>): Generator<T> {
	let i = 0;
	for (const value of iterator) {
		if (i++ < n) {
			continue;
		}
		yield value;
	}
}

// https://en.wikipedia.org/wiki/Loop-erased_random_walk
export default function* ({ size, seed }: Config): Generator<Cell> {
	const random = Seedrandom(seed);
	const RandomNeighbour = (size: number, coordinate: Coordinate): Neighbour => {
		const neighbours = ValidNeighbours(size, coordinate);
		const randomIndex = Math.floor(random() * neighbours.length);
		return neighbours[randomIndex]!;
	};

	const loopErasedRandomWalk = (
		start: Coordinate,
		remaining: Map<CoordinateKey, Coordinate>
	): Segment[] => {
		const working = new Map<CoordinateKey, Coordinate>();
		const startKey = asCoordinateKey(start);
		let path: Segment[] = [
			{
				key: startKey,
				coordinate: start,
				forwards: 0,
				backwards: 0,
			},
		];
		working.set(startKey, start);
		while (true) {
			const current = path.at(-1)!.coordinate;
			const { coordinate: neighbourCoordinate, direction } = RandomNeighbour(
				size,
				current
			);
			const neighbourKey = asCoordinateKey(neighbourCoordinate);
			const looped = working.has(neighbourKey);
			if (looped) {
				const loopIndex = path.findIndex(({ key }) => key === neighbourKey) + 1;
				for (let i = loopIndex; i < path.length; i++) {
					const { key } = path[i]!;
					working.delete(key);
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
				const end = !remaining.has(neighbourKey);
				if (end) {
					return path;
				}
				working.set(neighbourKey, neighbourCoordinate);
			}
		}
	};

	const coordinates: Coordinate[] = [...CoordinatesGenerator(size)];
	const solution: Record<CoordinateKey, DenormalConnection> = {};
	const remaining = new Map<CoordinateKey, Coordinate>();
	for (const coordinate of coordinates) {
		remaining.set(asCoordinateKey(coordinate), coordinate);
	}

	// start
	const randomRemainingIndex = Math.floor(random() * remaining.size);
	const randomRemainingKey = skip(randomRemainingIndex, remaining.keys()).next()
		.value;
	remaining.delete(randomRemainingKey);

	while (remaining.size > 0) {
		const randomRemainingIndex = Math.floor(random() * remaining.size);
		const randomRemainingKey = skip(
			randomRemainingIndex,
			remaining.keys()
		).next().value;
		const current = remaining.get(randomRemainingKey)!;
		remaining.delete(randomRemainingKey);
		const path = loopErasedRandomWalk(current, remaining);
		for (const { key, forwards, backwards } of path) {
			remaining.delete(key);
			solution[key] |= forwards | backwards;
		}
	}

	for (const coordinate of coordinates) {
		const denormalConnection = solution[asCoordinateKey(coordinate)]!;
		const randomOrientationIndex = Math.floor(random() * Orientations.length);
		const orientation = Orientations[randomOrientationIndex]!;
		const connection = normalizeConnection(denormalConnection);
		yield {
			coordinate,
			orientation,
			connection,
		};
	}
}
