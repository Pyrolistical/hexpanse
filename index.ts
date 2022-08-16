import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/assets.css";
import "sanitize.css/typography.css";
import "./index.css";
import "./polyfill.js";

import Seedrandom from "seedrandom";

import Elements, {
	Coordinate,
	CoordinateKey,
	asCoordinateKey,
	Grid,
	Cell,
	Cells,
} from "./elements";

import { svg as html, SvgComponent } from "./component";

const width = 1000;
const height = width * 0.8660254037844386;
const main = html<SVGSVGElement>`<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 ${width} ${height}"
></svg>`;

const { Hexagon, Grid } = Elements(main);

const Orientations = [0, 60, 120, 180, 240, 300] as const;
type Orientation = typeof Orientations[number];

const Connections = [
	// q -s r -q s -r
	0b100000, // i

	0b110000, // v
	0b101000, // c
	0b100100, // l
	// 0b100010, // dupe c

	0b111000, // e
	0b101100, // y
	0b110100, // λ
	0b101010, // tri

	0b111100, // half
	0b101110, // rake
	0b110110, // x
	// 0b111010, // dupe rake

	0b111110, // hat

	0b111111, // star
] as const;

const normalizeConnections = (connection: number): Connection => {
	if (connection === 0) {
		throw new Error("connection cannot be empty");
	}
	if (connection === 0b111111) {
		return 0b111111;
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
type Connection = typeof Connections[number];

type GameCell = Cell & {
	orientation: Orientation;
	connection: Connection;
	valid: boolean;
};

const seed = "1133";

const unseeded = Seedrandom();

const EdgeElement = (connection: Connection): SVGElement => {
	switch (connection) {
		case 0b100000: // i
			return html`<g>
				<line x1="0" y1="0" x2="0.8660254037844386" y2="0" />
			</g>`;
		case 0b110000: // v
			return html`<g>
				<line x1="0" y1="0" x2="0.8660254037844386" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(60)"
				/>
			</g>`;
		case 0b101000: // c
			return html`<g>
				<line x1="0" y1="0" x2="0.8660254037844386" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(120)"
				/>
			</g>`;
		case 0b100100: // l
			return html`<g>
				<line x1="0" y1="0" x2="0.8660254037844386" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(180)"
				/>
			</g>`;
		case 0b111000: // e
			return html`<g>
				<line x1="0" y1="0" x2="0.8660254037844386" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(60)"
				/>
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(120)"
				/>
			</g>`;
		case 0b101100: // y
			return html`<g>
				<line x1="0" y1="0" x2="0.8660254037844386" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(120)"
				/>
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(180)"
				/>
			</g>`;
		case 0b110100: // λ
			return html`<g>
				<line x1="0" y1="0" x2="0.8660254037844386" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(60)"
				/>
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(180)"
				/>
			</g>`;
		case 0b101010: // tri
			return html`<g>
				<line x1="0" y1="0" x2="0.8660254037844386" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(120)"
				/>
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(240)"
				/>
			</g>`;
		case 0b111100: // half
			return html`<g>
				<line x1="0" y1="0" x2="0.8660254037844386" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(60)"
				/>
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(120)"
				/>
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(180)"
				/>
			</g>`;
		case 0b101110: // rake
			return html`<g>
				<line x1="0" y1="0" x2="0.8660254037844386" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(120)"
				/>
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(180)"
				/>
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(240)"
				/>
			</g>`;
		case 0b110110: // x
			return html`<g>
				<line x1="0" y1="0" x2="0.8660254037844386" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(60)"
				/>
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(180)"
				/>
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(240)"
				/>
			</g>`;
		case 0b111110: // hat
			return html`<g>
				<line x1="0" y1="0" x2="0.8660254037844386" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(60)"
				/>
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(120)"
				/>
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(180)"
				/>
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(240)"
				/>
			</g>`;
		case 0b111111: // star
			return html`<g>
				<line x1="0" y1="0" x2="0.8660254037844386" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(60)"
				/>
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(120)"
				/>
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(180)"
				/>
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(240)"
				/>
				<line
					x1="0"
					y1="0"
					x2="0.8660254037844386"
					y2="0"
					transform="rotate(300)"
				/>
			</g>`;
		default:
			throw new Error(`unhandled connection ${connection.toString(2)}`);
	}
};
const Edge = (connection: Connection): SvgComponent<SVGGElement> => {
	const element = EdgeElement(connection);
	return SvgComponent({
		element,
	});
};

const size = 5;

const validate = (grid: Grid<GameCell>, cell: GameCell) => {};

const GameCell = (
	q: number,
	r: number,
	s: number,
	connection: Connection
): GameCell => {
	const edge = Edge(connection);
	const element = html`<g class="cell">${Hexagon()}${edge}</g>`;
	const orientation =
		Orientations[Math.floor(unseeded() * Orientations.length)]!;
	element.classList.add(`rotate${orientation}`);
	return SvgComponent<GameCell>({
		element,
		orientation,
		connection,
		valid: false,
		q,
		r,
		s,
	});
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

const solutionTree: Record<CoordinateKey, number> = {};
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

const cells: Cells<GameCell> = {};
for (const { q, r, s } of coordinates) {
	const solution = solutionTree[asCoordinateKey({ q, r, s })]!;
	const cell = GameCell(q, r, s, normalizeConnections(solution));

	cells[`${q} ${r} ${s}`] = cell;
}
const grid = Grid<GameCell>(cells, (cell, event) => {
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
	.transformWith(main)
	.translate(width / 2, height / 2)
	.scale(height / (size * 3 + 2));

main.append(grid.element);

document.body.append(main);
