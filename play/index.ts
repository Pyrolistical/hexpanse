import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/assets.css";
import "sanitize.css/typography.css";
import "./index.css";
import "../polyfill.js";

import { v4 as uuid } from "uuid";
import Random from "./random";

import {
	hexagonUnitHeight,
	Main,
	Grid,
	asCoordinateKey,
	Cell,
	Cells,
} from "./elements";

import { html } from "./component";
import PuzzleGenerator from "./puzzle-generator";

const width = 1000;
const height = width * hexagonUnitHeight;
const main = Main([width, height]);

const unseeded = Random();

const size = 20;

const validate = (grid: Grid, cell: Cell) => {};

let seed: string;
if (window.location.hash === "") {
	seed = uuid();
	history.replaceState(undefined, "", `#${seed}`);
} else {
	seed = window.location.hash.substring(1);
}

const puzzleRandom = Random(seed);
const cells: Cells = {};
for (const { coordinate, connection } of PuzzleGenerator(size, puzzleRandom)) {
	const cell = Cell(unseeded, coordinate, connection);

	cells[asCoordinateKey(coordinate)] = cell;
}

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

grid.appendTo(main.element);

document.body.append(
	html`<main>${main}</main>`,
	html`<a class="control" href=".">New game</a>`,
	html`<p>
		Inspired by <a href="https://hexapipes.vercel.app/">Hexapipes</a>
	</p>`,
	html`<p>
		Source code:
		<a href="https://github.com/Pyrolistical/hexpanse"
			>https://github.com/Pyrolistical/hexpanse</a
		>
	</p>`,
	html`<p>
		Author: <a href="https://twitter.com/pyrolistical">@pyrolistical</a>
	</p>`
);
