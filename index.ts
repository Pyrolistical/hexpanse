import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/assets.css";
import "sanitize.css/typography.css";
import "./index.css";
import "./polyfill.js";

import Seedrandom from "seedrandom";

import Elements, { Grid, Cell } from "./elements";

import { svg as html, SvgComponent } from "./component";

const main = html<SVGSVGElement>`<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 1000 1000"
></svg>`;

const { Hexagon, Grid } = Elements(main);

const Orientations = [0, 60, 120, 180, 240, 300] as const;
type Orientation = typeof Orientations[number];

type Unit = 0 | 1;
type QRS = `${Unit} ${Unit} ${Unit} ${Unit} ${Unit} ${Unit}`;
const Connections: QRS[] = [
	// q -s r -q s -r
	"1 0 0 0 0 0", // i
	"1 1 0 0 0 0", // v
	"1 0 1 0 0 0", // c
	"1 0 0 1 0 0", // l
	"1 1 1 0 0 0", // e
	"1 0 1 1 0 0", // y
	"1 1 0 1 0 0", // λ
	"1 0 1 0 1 0", // tri
	"1 1 1 1 0 0", // half
	"1 0 1 1 1 0", // rake
	"1 1 0 1 1 0", // x
	"1 1 1 1 1 0", // hat
	"1 1 1 1 1 1", // star
] as const;
type Connection = typeof Connections[number];

type GameCell = Cell & {
	orientation: Orientation;
	connection: Connection;
	valid: boolean;
};

const seed = "1133";

const random = Seedrandom(seed);

const EdgeElement = (connection: Connection): SVGElement => {
	switch (connection) {
		case "1 0 0 0 0 0": // i
			return html`<g>
				<line x1="0" y1="0" x2="0.8660254037844386" y2="0" />
			</g>`;
		case "1 1 0 0 0 0": // v
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
		case "1 0 1 0 0 0": // c
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
		case "1 0 0 1 0 0": // l
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
		case "1 1 1 0 0 0": // e
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
		case "1 0 1 1 0 0": // y
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
		case "1 1 0 1 0 0": // λ
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
		case "1 0 1 0 1 0": // tri
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
		case "1 1 1 1 0 0": // half
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
		case "1 0 1 1 1 0": // rake
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
		case "1 1 0 1 1 0": // x
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
		case "1 1 1 1 1 0": // hat
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
		case "1 1 1 1 1 1": // star
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
			throw new Error(`unhandled connection ${connection}`);
	}
};
const Edge = (connection: Connection): SvgComponent<SVGGElement> => {
	const element = EdgeElement(connection);
	return SvgComponent({
		element,
	});
};

const validate = (grid: Grid<GameCell>, cell: GameCell) => {};
const grid = Grid<GameCell>(
	14,
	(q, r, s) => {
		const connection = Connections[Math.floor(random() * Connections.length)]!;
		const edge = Edge(connection);
		const element = html`<g class="cell">${Hexagon()}${edge}</g>`;
		const orientation =
			Orientations[Math.floor(random() * Orientations.length)]!;
		element.classList.add(`rotateTo${orientation}`);
		return SvgComponent<GameCell>({
			element,
			orientation,
			connection,
			valid: false,
		});
	},
	(cell, event) => {
		if (event.buttons === 1) {
			const lastClass = `rotateTo${cell.orientation}`;
			cell.element.classList.remove(lastClass);
			cell.orientation += 60;
			cell.orientation %= 360;
			cell.element.classList.add(`rotateTo${cell.orientation}`);
			validate(grid, cell);
		}
	}
);
grid.transformWith(main).translate(500, 420).scale(19);

main.append(grid.element);

document.body.append(main);
