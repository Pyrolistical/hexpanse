import { assertInstanceOf } from "../assert";

import { SvgComponent, svg as html } from "./component";

type Axis = number;

export type Q = Axis;
export type R = Axis;
export type S = Axis;
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
	q: Q;
	r: R;
	s: S;
};

type CellRef<E extends Cell> = {
	[celly]: boolean;
	cell: E;
};

export type Cells<T extends Cell> = Record<CoordinateKey, T>;
export type Grid<T extends Cell> = SvgComponent<SVGGElement> & {
	cells: Cells<T>;
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
	const Grid = <T extends Cell>(
		cells: Cells<T>,
		onCellSelected: (cell: T, event: PointerEvent) => void
	): Grid<T> => {
		const positionedCells = Object.values(cells).map((cell) => {
			Object.assign(cell.element, { [celly]: true, cell });
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
				if (isCell<T>(hit)) {
					return onCellSelected(hit.cell, event);
				}
			}
		});
		assertInstanceOf(element, SVGGElement);

		return SvgComponent<Grid<T>>({
			element,
			cells,
		});
	};

	return {
		Hexagon,
		Grid,
	};
};
