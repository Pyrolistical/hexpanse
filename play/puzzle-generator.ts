import {
	Coordinate,
	CoordinateKey,
	asCoordinateKey,
	Connection,
} from "./elements";

import { ChooseOne } from "./random";

const normalizeConnection = (connection: number): Connection => {
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
			return 0b101000; // c
		case 0b0010:
			return 0b100100; // l
		case 0b0001:
			return 0b101000; // c

		case 0b1100:
			return 0b111000; // e
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
			return 0b111100; // half
		case 0b0111:
			return 0b101110; // rake
		case 0b1011:
			return 0b110110; // x
		case 0b1101:
			return 0b101110; // rake

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

type Direction = 0 | 1 | 2 | 3 | 4 | 5;
type Neighbour = { coordinate: Coordinate; direction: Direction };
function* Neighbours({ q, r, s }: Coordinate): Generator<Neighbour, any, any> {
	yield {
		coordinate: { q, r: r - 1, s: s + 1 },
		direction: 0,
	};
	yield {
		coordinate: { q: q + 1, r: r - 1, s },
		direction: 1,
	};
	yield {
		coordinate: { q: q + 1, r, s: s - 1 },
		direction: 2,
	};
	yield {
		coordinate: { q, r: r + 1, s: s - 1 },
		direction: 3,
	};
	yield {
		coordinate: { q: q - 1, r: r + 1, s },
		direction: 4,
	};
	yield {
		coordinate: { q: q - 1, r, s: s + 1 },
		direction: 5,
	};
}
function* ValidNeighbours(
	size: number,
	coordinate: Coordinate
): Generator<Neighbour, any, any> {
	for (const { coordinate: neighbourCoordinate, direction } of Neighbours(
		coordinate
	)) {
		const { q, r, s } = neighbourCoordinate;
		if (q < -size || q > size) {
			continue;
		}
		if (r < -size || r > size) {
			continue;
		}
		if (s < -size || s > size) {
			continue;
		}
		yield { coordinate: neighbourCoordinate, direction };
	}
}

function* CoordinatesGenerator(size: number): Generator<Coordinate, any, any> {
	for (let q = -size; q <= size; q++) {
		for (let r = -size; r <= size; r++) {
			const s = -q - r;
			if (-size <= s && s <= size) {
				yield {
					q,
					r,
					s,
				};
			}
		}
	}
}

type ConnectableNeighbour = { neighbour: Neighbour; connected: boolean };
function* PartitionNeighbours(
	size: number,
	cell: Coordinate,
	connected: Set<CoordinateKey>
): Generator<ConnectableNeighbour, any, any> {
	for (const neighbour of ValidNeighbours(size, cell)) {
		const { coordinate } = neighbour;
		yield { neighbour, connected: connected.has(asCoordinateKey(coordinate)) };
	}
}

type Solution = { coordinate: Coordinate; connection: Connection };
// https://en.wikipedia.org/wiki/Prim%27s_algorithm
export default function* (
	size: number,
	chooseOne: ChooseOne
): Generator<Solution, any, any> {
	const coordinates: Coordinate[] = [...CoordinatesGenerator(size)];
	const solutionTree: Record<CoordinateKey, number> = {};
	const connected = new Set<CoordinateKey>();
	const working = new Map<CoordinateKey, Coordinate>();

	const start = chooseOne(coordinates);
	connected.add(asCoordinateKey(start));
	for (const { coordinate } of ValidNeighbours(size, start)) {
		working.set(asCoordinateKey(coordinate), coordinate);
	}

	while (connected.size < coordinates.length) {
		if (working.size === 0) {
			throw new Error("working set unexpectedly empty");
		}
		const cellKey = chooseOne(working);
		const cell = working.get(cellKey)!;
		const neighbours = [...PartitionNeighbours(size, cell, connected)];
		const connectedNeighbours = neighbours.filter(({ connected }) => connected);
		const {
			neighbour: { coordinate, direction },
		} = chooseOne(connectedNeighbours);

		const connectedNeighbourKey = asCoordinateKey(coordinate);
		solutionTree[connectedNeighbourKey] ??= 0;
		solutionTree[connectedNeighbourKey] |= 0b100000 >> (direction + 3) % 6;

		solutionTree[cellKey] ??= 0;
		solutionTree[cellKey] |= 0b100000 >> direction;

		connected.add(cellKey);
		for (const {
			neighbour: { coordinate },
		} of neighbours.filter(({ connected }) => !connected)) {
			working.set(asCoordinateKey(coordinate), coordinate);
		}
		working.delete(cellKey);
	}

	for (const coordinate of coordinates) {
		const solution = solutionTree[asCoordinateKey(coordinate)]!;
		const connection = normalizeConnection(solution);
		yield {
			coordinate,
			connection,
		};
	}
}
