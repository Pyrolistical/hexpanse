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
import SaveWorker, { Color } from "./save/client";
import { assertInstanceOf, assertString } from "../assert";

const saveWorker = SaveWorker();

const width = 1000;
const height = width * hexagonUnitHeight;
const main = Main([width, height]);
let grid: Grid;

const cells: Cells = {};
let start = Date.now();
saveWorker.onRestored = ({ size, mode }, state) => {
	let branches = 0;
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
		if ([0b111000, 0b101100, 0b110100, 0b101010].includes(connection)) {
			branches += 1;
		}
		if ([0b111100, 0b101110, 0b110110].includes(connection)) {
			branches += 2;
		}
		if ([0b111110].includes(connection)) {
			branches += 3;
		}
		if ([0b111111].includes(connection)) {
			branches += 4;
		}
	}
	const puzzleTime = html`<p>Generated ${Math.ceil(Date.now() - start)}ms</p>`;
	start = Date.now();
	grid = Grid(main.element, cells, (cell) => {
		if (gameOver) {
			return;
		}

		const orientation = cell.rotateClockwise();
		saveWorker.updateCell(cell.coordinate, orientation);
	});
	grid
		.transformWith(main.element)
		.translate(width / 2, height / 2)
		.scale(height / (size * 3 + 2));

	grid.appendTo(main.element);

	document.body.append(html`<main>${main}</main>`);
	const renderTime = html`<p>Rendered ${Math.ceil(Date.now() - start)}ms</p>`;

	const newGameButton = html`<button>New game</button>`;
	newGameButton.onclick = (event) => {
		event.preventDefault();
		const form = document.getElementById("new-game-form");
		assertInstanceOf(form, HTMLFormElement);
		const { size, mode } = Object.fromEntries(new FormData(form).entries());
		assertString(size);
		assertString(mode);
		const url = `./?${new URLSearchParams({
			size,
			mode,
		}).toString()}`;
		console.log(url);
		window.location.href = url;
	};
	document.body.append(
		html`<h2>Game settings</h2>`,
		html`<form id="new-game-form">
			<fieldset>
				<legend>Size</legend>
				<label>
					<input type="radio" name="size" value="5" checked />
					Small
				</label>
				<label>
					<input type="radio" name="size" value="10" />
					Medium
				</label>
				<label>
					<input type="radio" name="size" value="15" />
					Large
				</label>
				<label>
					<input type="radio" name="size" value="20" />
					Extra large
				</label>
			</fieldset>
			<fieldset>
				<legend>Style</legend>
				<label>
					<input type="radio" name="mode" value="wilsons" checked />
					Wilson’s
				</label>
				<label>
					<input type="radio" name="mode" value="prims" />
					Prim’s
				</label>
			</fieldset>
			${newGameButton}
		</form>`,
		html`<h2>About</h2>`,
		puzzleTime,
		renderTime,
		html`<p>${branches} branches</p>`,
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

	const configuredSizeInput = document.querySelector(
		`#new-game-form input[name="size"][value="${size}"]`
	);
	assertInstanceOf(configuredSizeInput, HTMLInputElement);
	configuredSizeInput.checked = true;

	const configuredModeInput = document.querySelector(
		`#new-game-form input[name="mode"][value="${mode}"]`
	);
	assertInstanceOf(configuredModeInput, HTMLInputElement);
	configuredModeInput.checked = true;
};

saveWorker.onColoring = (coloring: Record<Color, Set<CoordinateKey>>) => {
	for (const [color, coordinateKeys] of Object.entries(coloring)) {
		for (const coordinateKey of coordinateKeys) {
			grid.cells[coordinateKey]!.element.dataset["color"] = color;
		}
	}
};

let gameOver = false;
saveWorker.onGameOver = () => {
	gameOver = true;
	main.element.classList.add("game-over");
};

const loadConfig = (): Config => {
	if (window.location.hash === "") {
		history.replaceState(undefined, "", `#`);
	}
	const searchParams = new URLSearchParams(window.location.search);
	const seed = searchParams.get("seed") ?? uuid();
	const size = Number.parseInt(searchParams.get("size") ?? "20");
	const mode = searchParams.get("mode");
	const config = {
		seed,
		size,
		mode: validMode(mode) ? mode : "wilsons",
	};
	history.replaceState(
		undefined,
		"",
		`?${new URLSearchParams({
			...config,
			size: String(size),
		}).toString()}`
	);
	return config;
};
const config = loadConfig();
saveWorker.restore(config);
