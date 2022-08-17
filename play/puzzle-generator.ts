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

// direction is indexes a hex side
type Direction =
	| 0 // q
	| 1 // -s
	| 2 // r
	| 3 // -q
	| 4 // s
	| 5; // -r
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
	for (const neighbour of Neighbours(coordinate)) {
		const {
			coordinate: { q, r, s },
		} = neighbour;
		if (q < -size || q > size) {
			continue;
		}
		if (r < -size || r > size) {
			continue;
		}
		if (s < -size || s > size) {
			continue;
		}
		yield neighbour;
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
	coordinate: Coordinate,
	visited: Set<CoordinateKey>
): Generator<ConnectableNeighbour, any, any> {
	for (const neighbour of ValidNeighbours(size, coordinate)) {
		const { coordinate: neighbourCoordinate } = neighbour;
		const connected = visited.has(asCoordinateKey(neighbourCoordinate));
		yield {
			neighbour,
			connected,
		};
	}
}

type Solution = { coordinate: Coordinate; connection: Connection };
// https://en.wikipedia.org/wiki/Prim%27s_algorithm
export default function* (
	size: number,
	chooseOne: ChooseOne
): Generator<Solution, any, any> {
	const coordinates: Coordinate[] = [...CoordinatesGenerator(size)];
	const solution: Record<CoordinateKey, number> = {};
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
		const cellKey = chooseOne(working);
		const cell = working.get(cellKey)!;
		const neighbours = [...PartitionNeighbours(size, cell, visited)];
		const connectedNeighbours = neighbours.filter(({ connected }) => connected);
		const {
			neighbour: { coordinate, direction },
		} = chooseOne(connectedNeighbours);

		const connectedNeighbourKey = asCoordinateKey(coordinate);
		solution[connectedNeighbourKey] ??= 0;
		solution[connectedNeighbourKey] |= 0b100000 >> (direction + 3) % 6;

		solution[cellKey] ??= 0;
		solution[cellKey] |= 0b100000 >> direction;

		visited.add(cellKey);
		for (const {
			neighbour: { coordinate },
		} of neighbours.filter(({ connected }) => !connected)) {
			working.set(asCoordinateKey(coordinate), coordinate);
		}
		working.delete(cellKey);
	}

	for (const coordinate of coordinates) {
		const denormalConnection = solution[asCoordinateKey(coordinate)]!;
		const connection = normalizeConnection(denormalConnection);
		yield {
			coordinate,
			connection,
		};
	}
}
