import {
	Coordinate,
	CoordinateKey,
	asCoordinateKey,
	Orientations,
} from "../elements";

import Random from "../random";

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
export default function* ({ size, seed }: Config): Generator<Cell> {
	const { chooseOne, randomIterator, removeOne } = Random(seed);
	const RandomNeighbour = (size: number, coordinate: Coordinate): Neighbour =>
		randomIterator(ValidNeighbours(size, coordinate)).next().value;

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

	removeOne(remaining); // start
	while (remaining.size > 0) {
		const current = removeOne(remaining);
		const path = loopErasedRandomWalk(current, remaining);
		for (const { key, forwards, backwards } of path) {
			remaining.delete(key);
			solution[key] |= forwards | backwards;
		}
	}

	for (const coordinate of coordinates) {
		const denormalConnection = solution[asCoordinateKey(coordinate)]!;
		const orientation = chooseOne(Orientations);
		const connection = normalizeConnection(denormalConnection);
		yield {
			coordinate,
			orientation,
			connection,
		};
	}
}
