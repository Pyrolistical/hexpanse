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
	addConnection,
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

// https://en.wikipedia.org/wiki/Prim%27s_algorithm
export default function* ({ size, seed }: Config): Generator<Cell> {
	const { chooseOne } = Random(seed);
	const coordinates: Coordinate[] = [...CoordinatesGenerator(size)];
	const solution: Record<CoordinateKey, DenormalConnection> = {};
	const visited = new Set<CoordinateKey>();
	const working = new Map<CoordinateKey, Coordinate>();

	const start = chooseOne(coordinates);
	visited.add(asCoordinateKey(start));
	for (const { coordinate } of ValidNeighbours(size, start)) {
		working.set(asCoordinateKey(coordinate), coordinate);
	}

	while (visited.size < coordinates.length) {
		if (working.size === 0) {
			throw new Error("working set unexpectedly empty");
		}
		const workingKey = chooseOne(working);
		const neighbours = [
			...PartitionNeighbours(size, working.get(workingKey)!, visited),
		];
		const connectedNeighbours = neighbours.filter(({ connected }) => connected);
		const {
			neighbour: { coordinate: neighbourCoordinate, direction },
		} = chooseOne(connectedNeighbours);

		const { forwards, backwards } = asConnections(direction);
		addConnection(solution, workingKey, forwards);
		const neighbourKey = asCoordinateKey(neighbourCoordinate);
		addConnection(solution, neighbourKey, backwards);

		visited.add(workingKey);
		for (const {
			neighbour: { coordinate },
		} of neighbours.filter(({ connected }) => !connected)) {
			working.set(asCoordinateKey(coordinate), coordinate);
		}
		working.delete(workingKey);
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
