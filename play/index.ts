import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/assets.css";
import "sanitize.css/typography.css";
import "./index.css";
import "../polyfill.js";

import { v4 as uuid } from "uuid";

import {
	hexagonUnitHeight,
	Main,
	Grid,
	CoordinateKey,
	Cell,
	Cells,
} from "./elements";

import { html } from "./component";
import { Config, validMode } from "./puzzle-generator";
import SaveWorker from "./save/client";

const saveWorker = SaveWorker();

const width = 1000;
const height = width * hexagonUnitHeight;
const main = Main([width, height]);

const validate = (grid: Grid, cell: Cell) => {};

const loadConfig = (): Config => {
	if (window.location.hash === "") {
		history.replaceState(undefined, "", `#`);
	}
	const searchParams = new URLSearchParams(window.location.hash.substring(1));
	const seed = searchParams.get("seed") ?? uuid();
	const size = Number.parseInt(searchParams.get("size") ?? "20");
	const mode = searchParams.get("mode");
	const config = {
		seed,
		size,
		mode: validMode(mode) ? mode : "normal",
	};
	history.replaceState(
		undefined,
		"",
		`#${new URLSearchParams({
			...config,
			size: String(size),
		}).toString()}`
	);
	return config;
};
const config = loadConfig();

const cells: Cells = {};
let start = Date.now();
saveWorker.onRestored = ({ size }, state) => {
	for (const [
		coordinateKey,
		{ coordinate, orientation, connection },
	] of Object.entries(state)) {
		cells[coordinateKey as CoordinateKey] = Cell(
			main.element,
			coordinate,
			orientation,
			connection
		);
	}
	const puzzleTime = html`<p>Generated ${Math.ceil(Date.now() - start)}ms</p>`;
	start = Date.now();
	const grid = Grid(main.element, cells, (cell, event) => {
		if (event.buttons === 1) {
			cell.element.classList.remove(`rotate${cell.orientation}`);
			cell.element.classList.remove(`rotateTo${cell.orientation}`);
			cell.orientation += 60;
			cell.orientation %= 360;
			cell.element.classList.add(`rotate${cell.orientation}`);
			cell.element.classList.add(`rotateTo${cell.orientation}`);
			saveWorker.updateCell(cell.coordinate, cell.orientation);
		}
	});
	grid
		.transformWith(main.element)
		.translate(width / 2, height / 2)
		.scale(height / (config.size * 3 + 2));

	grid.appendTo(main.element);

	document.body.append(html`<main>${main}</main>`);
	const renderTime = html`<p>Rendered ${Math.ceil(Date.now() - start)}ms</p>`;
	document.body.append(
		html`<a class="control" href=".">New game</a>`,
		puzzleTime,
		renderTime,
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
};
saveWorker.restore(config);
