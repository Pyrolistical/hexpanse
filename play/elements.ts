import { assertInstanceOf } from "../assert";

import { SvgComponent, svg as html } from "./component";

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
	rotateClockwise(): Orientation;
	rotateCounterClockwise(): Orientation;
};

export const hexagonUnitHeight = Math.sqrt(3) / 2;
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
    m ${-hexagonUnitHeight} -0.5
    l  ${hexagonUnitHeight} -0.5
    l  ${hexagonUnitHeight}  0.5
    l 0                   1
    l ${-hexagonUnitHeight}  0.5
    l ${-hexagonUnitHeight} -0.5
    z
  "
	/>`;
	assertInstanceOf(element, SVGPathElement);

	return SvgComponent({
		element,
	});
};

const G = (): SvgComponent<SVGGElement> => {
	const element = document.createElementNS("http://www.w3.org/2000/svg", "g");
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
export type Rotation = "clockwise" | "counter-clockwise";
export const Grid = (
	root: SVGSVGElement,
	cells: Cells,
	onCellSelected: (cell: Cell, rotation: Rotation) => void
): Grid => {
	const element = document.createElementNS("http://www.w3.org/2000/svg", "g");
	for (const cell of Object.values(cells)) {
		Object.assign(cell.element, { [celly]: true, cell });
		const g = G();

		const {
			coordinate: { q, r },
		} = cell;
		// Q basis [Math.sqrt(3), 0]
		// R basis [Math.sqrt(3) / 2, 3 / 2]
		// [x, y] = Q basis * q + R basis * r
		const x = 2 * hexagonUnitHeight * q + hexagonUnitHeight * r;
		const y = (3 / 2) * r;
		g.transformWith(root).translate(x, y);
		cell.appendTo(g.element);

		g.appendTo(element);
	}

	assertInstanceOf(element, SVGGElement);
	let lastButtons: number;
	const LEFT_CLICK = 1;
	const RIGHT_CLICK = 2;
	element.addEventListener("contextmenu", (event) => event.preventDefault());
	element.addEventListener("pointerdown", (event) => {
		lastButtons = event.buttons;
	});
	element.addEventListener("pointerup", (event) => {
		if (![LEFT_CLICK, RIGHT_CLICK].includes(lastButtons)) {
			return;
		}
		const rotation =
			lastButtons === LEFT_CLICK ? "clockwise" : "counter-clockwise";
		for (const hit of event.composedPath()) {
			if (isCell(hit)) {
				return onCellSelected(hit.cell, rotation);
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
		preserveAspectRatio="xMidYMid meet"
		draggable="false"
	>
		<g transform="rotate(-60) translate(-125, 175) scale(1.3)">
			<text
				x="0"
				y="0"
				font-size="200%"
				font-weight="bolder"
				text-anchor="middle"
			>
				Hexpanse
			</text>
			<text x="0" y="30" font-size="100%" text-anchor="middle">
				Goal: Connect everything
			</text>
		</g>
	</svg>`;

	return SvgComponent({
		element,
	});
};

// degrees on a circle at 60 intervals
export const Orientations = [0, 60, 120, 180, 240, 300] as const;
export type Orientation = typeof Orientations[number];
function assertOrientation(value: number): asserts value is Orientation {
	if (!Orientations.includes(value as Orientation)) {
		throw new Error(
			`expected one of Orientation [${Orientations.join(
				", "
			)}] but got ${value}`
		);
	}
}

// 8-bit flag to indicate there is a connection in that cube coordinate direction
const Connections = [
	// r -q s -r q -s
	0b100000, // i

	0b110000, // v
	0b101000, // C
	0b100100, // l
	// 0b100010, // dupe C

	0b111000, // E
	0b101100, // y
	0b110100, // λ
	0b101010, // tri

	0b111100, // K
	0b101110, // Ψ
	0b110110, // X
	// 0b111010, // dupe Ψ

	0b111110, // hat

	0b111111, // star
] as const;
export type Connection = typeof Connections[number];

const EdgeElement = (
	main: SVGSVGElement,
	connection: Connection
): SVGElement => {
	switch (connection) {
		case 0b100000: /* i */ {
			const end = Hexagon();
			end.transformWith(main).scale(0.25);
			end.element.classList.add("end");
			return html`<g>
				<line x1="0" y1="0" x2="${hexagonUnitHeight}" y2="0" />
				${end}
			</g>`;
		}
		case 0b110000: // v
			return html`<g>
				<line x1="0" y1="0" x2="${hexagonUnitHeight}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
					y2="0"
					transform="rotate(60)"
				/>
			</g>`;
		case 0b101000: // C
			return html`<g>
				<line x1="0" y1="0" x2="${hexagonUnitHeight}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
					y2="0"
					transform="rotate(120)"
				/>
			</g>`;
		case 0b100100: // l
			return html`<g>
				<line x1="0" y1="0" x2="${hexagonUnitHeight}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
					y2="0"
					transform="rotate(180)"
				/>
			</g>`;
		case 0b111000: // E
			return html`<g>
				<line x1="0" y1="0" x2="${hexagonUnitHeight}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
					y2="0"
					transform="rotate(60)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
					y2="0"
					transform="rotate(120)"
				/>
			</g>`;
		case 0b101100: // y
			return html`<g>
				<line x1="0" y1="0" x2="${hexagonUnitHeight}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
					y2="0"
					transform="rotate(120)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
					y2="0"
					transform="rotate(180)"
				/>
			</g>`;
		case 0b110100: // λ
			return html`<g>
				<line x1="0" y1="0" x2="${hexagonUnitHeight}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
					y2="0"
					transform="rotate(60)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
					y2="0"
					transform="rotate(180)"
				/>
			</g>`;
		case 0b101010: // tri
			return html`<g>
				<line x1="0" y1="0" x2="${hexagonUnitHeight}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
					y2="0"
					transform="rotate(120)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
					y2="0"
					transform="rotate(240)"
				/>
			</g>`;
		case 0b111100: // K
			return html`<g>
				<line x1="0" y1="0" x2="${hexagonUnitHeight}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
					y2="0"
					transform="rotate(60)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
					y2="0"
					transform="rotate(120)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
					y2="0"
					transform="rotate(180)"
				/>
			</g>`;
		case 0b101110: // Ψ
			return html`<g>
				<line x1="0" y1="0" x2="${hexagonUnitHeight}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
					y2="0"
					transform="rotate(120)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
					y2="0"
					transform="rotate(180)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
					y2="0"
					transform="rotate(240)"
				/>
			</g>`;
		case 0b110110: // X
			return html`<g>
				<line x1="0" y1="0" x2="${hexagonUnitHeight}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
					y2="0"
					transform="rotate(60)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
					y2="0"
					transform="rotate(180)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
					y2="0"
					transform="rotate(240)"
				/>
			</g>`;
		case 0b111110: // hat
			return html`<g>
				<line x1="0" y1="0" x2="${hexagonUnitHeight}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
					y2="0"
					transform="rotate(60)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
					y2="0"
					transform="rotate(120)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
					y2="0"
					transform="rotate(180)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
					y2="0"
					transform="rotate(240)"
				/>
			</g>`;
		case 0b111111: // star
			return html`<g>
				<line x1="0" y1="0" x2="${hexagonUnitHeight}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
					y2="0"
					transform="rotate(60)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
					y2="0"
					transform="rotate(120)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
					y2="0"
					transform="rotate(180)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
					y2="0"
					transform="rotate(240)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${hexagonUnitHeight}"
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
export const Edge = (
	main: SVGSVGElement,
	connection: Connection
): SvgComponent<SVGGElement> => {
	const element = EdgeElement(main, connection);

	return SvgComponent({
		element,
	});
};

const cellCache: Record<number, SVGGElement> = {};

export const Cell = (
	main: SVGSVGElement,
	coordinate: Coordinate,
	orientation: Orientation,
	connection: Connection
): Cell => {
	if (!cellCache[connection]) {
		const edge = Edge(main, connection);
		cellCache[connection] = html`<g class="cell">${Hexagon()}${edge}</g>`;
	}
	const element = cellCache[connection]!.cloneNode(true);
	assertInstanceOf(element, SVGGElement);
	element.classList.add(`rotate${orientation}`);

	return SvgComponent<Cell>({
		element,
		orientation,
		connection,
		valid: false,
		coordinate,
		rotateClockwise() {
			element.classList.remove(`rotate${orientation}`);
			element.classList.remove(`rotateClockwise${orientation}`);
			element.classList.remove(`rotateCounterClockwise${orientation}`);
			let newOrientation: number = orientation;
			newOrientation += 60;
			newOrientation %= 360;
			assertOrientation(newOrientation);
			orientation = newOrientation;

			element.classList.add(`rotate${orientation}`);
			element.classList.add(`rotateClockwise${orientation}`);
			return orientation;
		},
		rotateCounterClockwise() {
			element.classList.remove(`rotate${orientation}`);
			element.classList.remove(`rotateClockwise${orientation}`);
			element.classList.remove(`rotateCounterClockwise${orientation}`);
			let newOrientation: number = orientation;
			if (newOrientation === 0) {
				newOrientation = 300;
			} else {
				newOrientation -= 60;
				newOrientation %= 360;
			}
			assertOrientation(newOrientation);
			orientation = newOrientation;

			element.classList.add(`rotate${orientation}`);
			element.classList.add(`rotateCounterClockwise${orientation}`);
			return orientation;
		},
	});
};
