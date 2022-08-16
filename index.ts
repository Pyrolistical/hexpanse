import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/assets.css";
import "sanitize.css/typography.css";
import "./index.css";
import "./polyfill.js";

import Seedrandom from "seedrandom";

import Elements, { Grid, Cell } from "./elements";

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
	0b111000, // e
	0b101100, // y
	0b110100, // λ
	0b101010, // tri
	0b111100, // half
	0b101110, // rake
	0b110110, // x
	0b111110, // hat
	0b111111, // star
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
			throw new Error(`unhandled connection ${connection}`);
	}
};
const Edge = (connection: Connection): SvgComponent<SVGGElement> => {
	const element = EdgeElement(connection);
	return SvgComponent({
		element,
	});
};

const size = 16;
const validate = (grid: Grid<GameCell>, cell: GameCell) => {};
const grid = Grid<GameCell>(
	size,
	(q, r, s) => {
		const connection = Connections[Math.floor(random() * Connections.length)]!;
		const edge = Edge(connection);
		const element = html`<g class="cell">${Hexagon()}${edge}</g>`;
		const orientation =
			Orientations[Math.floor(random() * Orientations.length)]!;
		element.classList.add(`rotate${orientation}`);
		return SvgComponent<GameCell>({
			element,
			orientation,
			connection,
			valid: false,
		});
	},
	(cell, event) => {
		if (event.buttons === 1) {
			cell.element.classList.remove(`rotate${cell.orientation}`);
			cell.element.classList.remove(`rotateTo${cell.orientation}`);
			cell.orientation += 60;
			cell.orientation %= 360;
			cell.element.classList.add(`rotate${cell.orientation}`);
			cell.element.classList.add(`rotateTo${cell.orientation}`);
			validate(grid, cell);
		}
	}
);
grid
	.transformWith(main)
	.translate(width / 2, height / 2)
	.scale(height / (size * 3 + 2));

main.append(grid.element);

document.body.append(main);
