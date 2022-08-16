import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/assets.css";
import "sanitize.css/typography.css";
import "./index.css";
import "./polyfill.js";

import Elements, { Cell } from "./elements";

import { svg as html, SvgComponent } from "./component";

const main = html<SVGSVGElement>`<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 1000 1000"
></svg>`;

const { Hexagon, Grid } = Elements(main);

const Orientations = [0, 60, 120, 180, 240, 300] as const;
type Orientation = typeof Orientations[number];
type RotatingCell = Cell & {
	orientation: Orientation;
};
const grid = Grid<RotatingCell>(
	3,
	(q, r, s) => {
		const element = html`<g
			>${Hexagon()}<text font-size=".5" fill="red">up</text></g
		>`;
		return SvgComponent<RotatingCell>({
			element,
			orientation: 0,
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
grid.transformWith(main).translate(400, 300).scale(50);

main.append(grid.element);
main.append(
	html`<circle
		cx="0"
		cy="0"
		r="5"
		fill="red"
		transform="translate(400, 300)"
	/>`
);

document.body.append(main);
