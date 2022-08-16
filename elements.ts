import { assertInstanceOf } from "./assert";

import { SvgComponent, svg as html } from "./component";

type Axis = number;

type Q = Axis;
type R = Axis;
type S = Axis;
type Coordinate = `${Q} ${R} ${S}`;
const celly = Symbol("celly");
export type Cell = SvgComponent<SVGElement> & {
	q: Q;
	r: R;
	s: S;
};

type CellRef<E extends Cell> = {
	[celly]: boolean;
	cell: E;
};

type Cells = Record<Coordinate, Cell>;
type Grid = SvgComponent<SVGGElement> & {
	cells: Cells;
};

export default (root: SVGSVGElement) => {
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
		}) as SvgComponent<SVGPathElement>;
	};

	const isCell = <E extends Cell>(value: any): value is CellRef<E> =>
		value[celly];

	const G = (): SvgComponent<SVGGElement> => {
		const element = html`<g></g>`;
		assertInstanceOf(element, SVGGElement);
		return SvgComponent({
			element,
		}) as SvgComponent<SVGGElement>;
	};
	const Grid = <E extends Cell>(
		size: number,
		createCell: (q: number, r: number, s: number) => E,
		onCellSelected: (cell: E, event: PointerEvent) => void
	): Grid => {
		const Cell = (q: number, r: number, s: number): Cell => {
			const cell = createCell(q, r, s);
			Object.assign(cell.element, { [celly]: true, cell });
			Object.assign(cell, { q, r, s });
			return cell;
		};

		const cells: Cells = {};
		for (let q = -size; q <= size; q++) {
			for (let r = -size; r <= size; r++) {
				const s = -q - r;
				if (-size <= s && s <= size) {
					const cell = Cell(q, r, s);
					cells[`${q} ${r} ${s}`] = cell;
				}
			}
		}
		const positionedCells = Object.values(cells).map((cell) => {
			const g = G();
			// Q basis [Math.sqrt(3), 0]
			// R basis [Math.sqrt(3) / 2, 3 / 2]
			// [x, y] = Q basis * q + R basis * r
			const x = Math.sqrt(3) * cell.q + (Math.sqrt(3) / 2) * cell.r;
			const y = (3 / 2) * cell.r;
			g.transformWith(root).translate(x, y);
			cell.appendTo(g.element);
			return g;
		});
		const element = html`<g>${positionedCells}</g>`;
		element.addEventListener("pointerdown", (event) => {
			for (const hit of event.composedPath()) {
				if (isCell<E>(hit)) {
					return onCellSelected(hit.cell, event);
				}
			}
		});
		assertInstanceOf(element, SVGGElement);

		return SvgComponent<Grid>({
			element,
			cells,
		});
	};

	return {
		Hexagon,
		Grid,
	};
};
