import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/assets.css";
import "sanitize.css/typography.css";
import "./index.css";
import "../polyfill.js";

import { v4 as uuid } from "uuid";
import Seedrandom from "seedrandom";

import {
	Main,
	Coordinate,
	CoordinateKey,
	asCoordinateKey,
	Grid,
	Cell,
	Cells,
	Connection,
} from "./elements";

import { html } from "./component";

const width = 1000;
const height = (width * Math.sqrt(3)) / 2;
const main = Main([width, height]);

const unseeded = Seedrandom();

const size = 15;

const validate = (grid: Grid, cell: Cell) => {};

const normalizeConnections = (connection: number): Connection => {
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

const coordinates: Coordinate[] = [];
for (let q = -size; q <= size; q++) {
	for (let r = -size; r <= size; r++) {
		const s = -q - r;
		if (-size <= s && s <= size) {
			coordinates.push({
				q,
				r,
				s,
			});
		}
	}
}

type Direction = 0 | 1 | 2 | 3 | 4 | 5;
function* Neighbours({ q, r, s }: Coordinate): Generator<
	Coordinate & {
		direction: Direction;
	},
	any,
	any
> {
	yield {
		q,
		r: r - 1,
		s: s + 1,
		direction: 0,
	};
	yield {
		q: q + 1,
		r: r - 1,
		s,
		direction: 1,
	};
	yield {
		q: q + 1,
		r,
		s: s - 1,
		direction: 2,
	};
	yield {
		q,
		r: r + 1,
		s: s - 1,
		direction: 3,
	};
	yield {
		q: q - 1,
		r: r + 1,
		s,
		direction: 4,
	};
	yield {
		q: q - 1,
		r,
		s: s + 1,
		direction: 5,
	};
}
function* ValidNeighbours(
	size: number,
	coordinate: Coordinate
): Generator<
	Coordinate & {
		direction: Direction;
	},
	any,
	any
> {
	for (const { q, r, s, direction } of Neighbours(coordinate)) {
		if (q < -size || q > size) {
			continue;
		}
		if (r < -size || r > size) {
			continue;
		}
		if (s < -size || s > size) {
			continue;
		}
		yield { q, r, s, direction };
	}
}
function skip<T>(n: number, iterator: IterableIterator<T>): IteratorResult<T> {
	let cursor: IteratorResult<T> = iterator.next();
	while (n-- > 0) {
		cursor = iterator.next();
	}
	return cursor!;
}

console.time("solution");
const solutionTree: Record<CoordinateKey, number> = {};
let seed: string;
if (window.location.hash === "") {
	seed = uuid();
	history.replaceState(undefined, "", `#${seed}`);
} else {
	seed = window.location.hash.substring(1);
}
const puzzleRandom = Seedrandom(seed);
const connected = new Set<CoordinateKey>();
const working = new Map<CoordinateKey, Coordinate>();
const start = coordinates[Math.floor(puzzleRandom() * coordinates.length)]!;
connected.add(asCoordinateKey(start));
for (const { q, r, s } of ValidNeighbours(size, start)) {
	working.set(asCoordinateKey({ q, r, s }), { q, r, s });
}

while (connected.size < coordinates.length) {
	if (working.size === 0) {
		throw new Error("working set unexpectedly empty");
	}
	const workingIndex = Math.floor(puzzleRandom() * working.size);
	const { value: cellKey } = skip(workingIndex, working.keys());
	const cell = working.get(cellKey)!;
	const connectedNeighbours: (Coordinate & { direction: Direction })[] = [];
	for (const { q, r, s, direction } of ValidNeighbours(size, cell)) {
		if (connected.has(asCoordinateKey({ q, r, s }))) {
			connectedNeighbours.push({ q, r, s, direction });
		}
	}
	const { q, r, s, direction } =
		connectedNeighbours[
			Math.floor(puzzleRandom() * connectedNeighbours.length)
		]!;

	const connectedNeighbourKey = asCoordinateKey({ q, r, s });
	solutionTree[connectedNeighbourKey] ??= 0;
	solutionTree[connectedNeighbourKey] |= 0b100000 >> (direction + 3) % 6;

	solutionTree[cellKey] ??= 0;
	solutionTree[cellKey] |= 0b100000 >> direction;

	connected.add(cellKey);
	for (const { q, r, s } of ValidNeighbours(size, cell)) {
		const nextKey = asCoordinateKey({ q, r, s });
		if (connected.has(nextKey)) {
			continue;
		}
		working.set(nextKey, { q, r, s });
	}
	working.delete(cellKey);
}

const cells: Cells = {};
for (const { q, r, s } of coordinates) {
	const solution = solutionTree[asCoordinateKey({ q, r, s })]!;
	const cell = Cell(unseeded, q, r, s, normalizeConnections(solution));

	cells[`${q} ${r} ${s}`] = cell;
}
console.timeEnd("solution");
const grid = Grid(main.element, cells, (cell, event) => {
	if (event.buttons === 1) {
		cell.element.classList.remove(`rotate${cell.orientation}`);
		cell.element.classList.remove(`rotateTo${cell.orientation}`);
		cell.orientation += 60;
		cell.orientation %= 360;
		cell.element.classList.add(`rotate${cell.orientation}`);
		cell.element.classList.add(`rotateTo${cell.orientation}`);
		validate(grid, cell);
	}
});
grid
	.transformWith(main.element)
	.translate(width / 2, height / 2)
	.scale(height / (size * 3 + 2));

main.element.append(grid.element);

main.appendTo(document.body);
document.body.append(html`<a class="control" href=".">New game</a>`);
document.body.append(
	html`<p>Inspired by <a href="https://hexapipes.vercel.app/">Hexapipes</a></p>`
);
document.body.append(
	html`<p>
		Source code:
		<a href="https://github.com/Pyrolistical/hexpanse"
			>https://github.com/Pyrolistical/hexpanse</a
		>
	</p>`
);
document.body.append(
	html`<p>
		Author: <a href="https://twitter.com/pyrolistical">@pyrolistical</a>
	</p>`
);
