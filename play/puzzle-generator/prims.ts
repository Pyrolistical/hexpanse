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

type ConnectableNeighbour = { neighbour: Neighbour; connected: boolean };
function* PartitionNeighbours(
	size: number,
	coordinate: Coordinate,
	visited: Set<CoordinateKey>
): Generator<ConnectableNeighbour> {
	for (const neighbour of ValidNeighbours(size, coordinate)) {
		const { coordinate: neighbourCoordinate } = neighbour;
		const connected = visited.has(asCoordinateKey(neighbourCoordinate));
		yield {
			neighbour,
			connected,
		};
	}
}

const addConnection = (
	solution: Record<CoordinateKey, DenormalConnection>,
	key: CoordinateKey,
	connection: DenormalConnection
) => {
	solution[key] ??= 0;
	solution[key] |= connection;
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

// https://en.wikipedia.org/wiki/Prim%27s_algorithm
export default function* ({ size, seed }: Config): Generator<Cell> {
	const random = Seedrandom(seed);
	const coordinates: Coordinate[] = [...CoordinatesGenerator(size)];
	const solution: Record<CoordinateKey, DenormalConnection> = {};
	const visited = new Set<CoordinateKey>();
	const working = new Map<CoordinateKey, Coordinate>();

	const randomStartIndex = Math.floor(random() * coordinates.length);
	const start = coordinates[randomStartIndex]!;
	visited.add(asCoordinateKey(start));
	for (const { coordinate } of ValidNeighbours(size, start)) {
		working.set(asCoordinateKey(coordinate), coordinate);
	}

	while (visited.size < coordinates.length) {
		if (working.size === 0) {
			throw new Error("working set unexpectedly empty");
		}
		const randomWorkingIndex = Math.floor(random() * working.size);
		const randomWorkingKey = skip(randomWorkingIndex, working.keys()).next()
			.value;
		const current = working.get(randomWorkingKey)!;
		working.delete(randomWorkingKey);
		const workingKey = asCoordinateKey(current);
		const neighbours = [...PartitionNeighbours(size, current, visited)];
		const connectedNeighbours = neighbours.filter(({ connected }) => connected);
		const randomConnectedNeighbourIndex = Math.floor(
			random() * connectedNeighbours.length
		);
		const {
			neighbour: { coordinate: neighbourCoordinate, direction },
		} = connectedNeighbours[randomConnectedNeighbourIndex]!;

		const { forwards, backwards } = asConnections(direction);
		const neighbourKey = asCoordinateKey(neighbourCoordinate);

		addConnection(solution, workingKey, forwards);
		addConnection(solution, neighbourKey, backwards);

		visited.add(workingKey);
		for (const {
			neighbour: { coordinate },
		} of neighbours.filter(({ connected }) => !connected)) {
			working.set(asCoordinateKey(coordinate), coordinate);
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
