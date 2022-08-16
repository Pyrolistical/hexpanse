import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/assets.css";
import "sanitize.css/typography.css";
import "./index.css";
import "./polyfill.js";

import Seedrandom from "seedrandom";

import Elements, { Cell } from "./elements";

import { svg as html, SvgComponent } from "./component";

const main = html<SVGSVGElement>`<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 1000 1000"
></svg>`;

const { Hexagon, Grid } = Elements(main);

const Orientations = [0, 60, 120, 180, 240, 300] as const;
type Orientation = typeof Orientations[number];

const Topologies = [
	"edge",
	"edge edge",
	"edge gap edge",
	"edge gap gap edge",
	"edge edge edge",
	"edge gap edge edge",
	"edge edge gap edge",
	"edge gap edge gap edge",
	"edge edge edge edge",
	"edge gap edge edge edge",
	"edge edge gap edge edge",
	"edge edge edge edge edge",
	"edge edge edge edge edge edge",
] as const;
type Topology = typeof Topologies[number];

type RotatingCell = Cell & {
	orientation: Orientation;
	topology: Topology;
};

const seed = "1133";

const random = Seedrandom(seed);

const EdgeElement = (topology: Topology): SVGElement => {
	switch (topology) {
		case "edge":
			return html`<g>
				<line x1="0" y1="0" x2="0.8660254037844386" y2="0" />
			</g>`;
		case "edge edge":
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
		case "edge gap edge":
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
		case "edge gap gap edge":
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
		case "edge edge edge":
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
		case "edge gap edge edge":
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
		case "edge edge gap edge":
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
		case "edge gap edge gap edge":
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
		case "edge edge edge edge":
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
		case "edge gap edge edge edge":
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
		case "edge edge gap edge edge":
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
		case "edge edge edge edge edge":
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
		case "edge edge edge edge edge edge":
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
			throw new Error(`unhandled topology ${topology}`);
	}
};
const Edge = (topology: Topology): SvgComponent<SVGGElement> => {
	const element = EdgeElement(topology);
	return SvgComponent({
		element,
	});
};

const grid = Grid<RotatingCell>(
	5,
	(q, r, s) => {
		const topology = Topologies[Math.floor(random() * Topologies.length)]!;
		const edge = Edge(topology);
		const element = html`<g class="cell">${Hexagon()}${edge}</g>`;
		const orientation =
			Orientations[Math.floor(random() * Orientations.length)]!;
		element.classList.add(`rotateTo${orientation}`);
		return SvgComponent<RotatingCell>({
			element,
			orientation,
			topology,
		});
	},
	(cell, event) => {
		if (event.buttons === 1) {
			const lastClass = `rotateTo${cell.orientation}`;
			cell.element.classList.remove(lastClass);
			cell.orientation += 60;
			cell.orientation %= 360;
			cell.element.classList.add(`rotateTo${cell.orientation}`);
		}
	}
);
grid.transformWith(main).translate(400, 350).scale(40);

main.append(grid.element);

document.body.append(main);
