import { assertInstanceOf } from "../assert";

import { SvgComponent, svg as html } from "./component";
import { ChooseOne } from "./random";

// cube coordinates https://www.redblobgames.com/grids/hexagons/#coordinates
type Axis = number;
type Q = Axis;
type R = Axis;
type S = Axis;
export type Coordinate = {
	q: Q;
	r: R;
	s: S;
};
export type CoordinateKey = `${Q} ${R} ${S}`;
export const asCoordinateKey = ({ q, r, s }: Coordinate): CoordinateKey =>
	`${q} ${r} ${s}`;
const celly = Symbol("celly");
export type Cell = SvgComponent<SVGElement> & {
	coordinate: Coordinate;
	orientation: Orientation;
	connection: Connection;
	valid: boolean;
};

// const corners = [
// 	[Math.sqrt(3) / 2, -0.5],
// 	[Math.sqrt(3) / 2, 0.5],
// 	[0, 1],
// 	[-Math.sqrt(3) / 2, 0.5],
// 	[-Math.sqrt(3) / 2, -0.5],
// 	[0, -1],
// ];
const Hexagon = (): SvgComponent<SVGPathElement> => {
	const element = html`<path
		d="
    m -0.8660254037844386 -0.5
    l  0.8660254037844386 -0.5
    l  0.8660254037844386  0.5
    l  0                   1
    l -0.8660254037844386  0.5
    l -0.8660254037844386 -0.5
    z
  "
	/>`;
	assertInstanceOf(element, SVGPathElement);

	return SvgComponent({
		element,
	});
};

const G = (): SvgComponent<SVGGElement> => {
	const element = html`<g></g>`;
	assertInstanceOf(element, SVGGElement);

	return SvgComponent({
		element,
	});
};

type CellRef = {
	[celly]: boolean;
	cell: Cell;
};
const isCell = (value: any): value is CellRef => value[celly];

export type Cells = Record<CoordinateKey, Cell>;
export type Grid = SvgComponent<SVGGElement> & {
	cells: Cells;
};
export const Grid = (
	root: SVGSVGElement,
	cells: Cells,
	onCellSelected: (cell: Cell, event: PointerEvent) => void
): Grid => {
	const positionedCells = Object.values(cells).map((cell) => {
		Object.assign(cell.element, { [celly]: true, cell });
		const g = G();

		const {
			coordinate: { q, r },
		} = cell;
		// Q basis [Math.sqrt(3), 0]
		// R basis [Math.sqrt(3) / 2, 3 / 2]
		// [x, y] = Q basis * q + R basis * r
		const x = Math.sqrt(3) * q + (Math.sqrt(3) / 2) * r;
		const y = (3 / 2) * r;
		g.transformWith(root).translate(x, y);
		cell.appendTo(g.element);
		return g;
	});
	const element = html`<g>${positionedCells}</g>`;
	assertInstanceOf(element, SVGGElement);
	element.addEventListener("pointerdown", (event) => {
		for (const hit of event.composedPath()) {
			if (isCell(hit)) {
				return onCellSelected(hit.cell, event);
			}
		}
	});

	return SvgComponent<Grid>({
		element,
		cells,
	});
};

type Dimension = [number, number];
export const Main = ([
	width,
	height,
]: Dimension): SvgComponent<SVGSVGElement> => {
	const element = html<SVGSVGElement>`<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 ${width} ${height}"
	></svg>`;

	return SvgComponent({
		element,
	});
};

// degrees on a circle at 60 intervals
export const Orientations = [0, 60, 120, 180, 240, 300] as const;
export type Orientation = typeof Orientations[number];

// 8-bit flag to indicate there is a connection in that cube coordinate direction
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
export type Connection = typeof Connections[number];

const EdgeElement = (connection: Connection): SVGElement => {
	switch (connection) {
		case 0b100000: // i
			return html`<g>
				<circle r=".25" />
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
			throw new Error(
				`unhandled connection ${(connection as unknown as number).toString(2)}`
			);
	}
};
export const Edge = (connection: Connection): SvgComponent<SVGGElement> => {
	const element = EdgeElement(connection);

	return SvgComponent({
		element,
	});
};

export const Cell = (
	chooseOne: ChooseOne,
	coordinate: Coordinate,
	connection: Connection
): Cell => {
	const edge = Edge(connection);
	const element = html`<g class="cell">${Hexagon()}${edge}</g>`;
	const orientation = chooseOne(Orientations);
	element.classList.add(`rotate${orientation}`);

	return SvgComponent<Cell>({
		element,
		orientation,
		connection,
		valid: false,
		coordinate,
	});
};
