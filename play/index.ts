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
	Coordinate,
	CoordinateKey,
	asCoordinateKey,
	Cell,
	Cells,
	Rotation,
} from "./elements";

import { html } from "./component";
import { Config, validMode } from "./puzzle-generator";
import SaveWorker, { Color } from "./save/client";
import { assertInstanceOf, assertString } from "../assert";

const saveWorker = SaveWorker();

const width = 1000;
const height = width * hexagonUnitHeight;
const main = Main([width, height]);
main.element.onclick = (event) => {
	event.preventDefault();
};
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
	const rotateCell = (cell: Cell, rotation: Rotation) => {
		if (gameOver) {
			return;
		}

		const orientation =
			rotation === "clockwise"
				? cell.rotateClockwise()
				: cell.rotateCounterClockwise();
		saveWorker.updateCell(cell.coordinate, orientation);
	};
	grid = Grid(main.element, cells, (cell, rotation) => {
		deselect();
		rotateCell(cell, rotation);
	});
	grid
		.transformWith(main.element)
		.translate(width / 2, height / 2)
		.scale(height / (size * 3 + 2));

	grid.appendTo(main.element);

	const allowedKeys = [
		"ArrowLeft",
		"ArrowRight",
		"ArrowUp",
		"ArrowDown",
		"z",
		"x",
		" ",
	];
	let selected: Coordinate = {
		q: 0,
		r: 0,
		s: 0,
	};
	let evenRow = true;
	const selectedCell = (): Cell => grid.cells[asCoordinateKey(selected)]!;
	const deselect = () => {
		selectedCell().element.classList.remove("selected");
	};
	const select = () => {
		selectedCell().element.classList.add("selected");
	};

	document.body.addEventListener("keydown", (event) => {
		if (!allowedKeys.includes(event.key)) {
			return;
		}
		event.preventDefault();
		switch (event.key) {
			case "ArrowLeft":
				if (selected.q === -size || selected.s === size) {
					return;
				}
				deselect();
				selected.q -= 1;
				selected.s += 1;
				select();
				return;
			case "ArrowRight":
				if (selected.q === size || selected.s === -size) {
					return;
				}
				deselect();
				selected.q += 1;
				selected.s -= 1;
				select();
				return;
			case "ArrowUp": {
				const noLeft = selected.r === -size || selected.s === size;
				const noRight = selected.q === size || selected.r === -size;
				if (noLeft && noRight) {
					return;
				}
				if ((evenRow && !noLeft) || noRight) {
					deselect();
					selected.r -= 1;
					selected.s += 1;
					select();
					evenRow = !evenRow;
					return;
				} else {
					deselect();
					selected.q += 1;
					selected.r -= 1;
					select();
					evenRow = !evenRow;
					return;
				}
			}
			case "ArrowDown": {
				const noLeft = selected.q === -size || selected.r === size;
				const noRight = selected.r === size || selected.s === -size;
				if (noLeft && noRight) {
					return;
				}
				if ((evenRow && !noLeft) || noRight) {
					deselect();
					selected.q -= 1;
					selected.r += 1;
					select();
					evenRow = !evenRow;
					return;
				} else {
					deselect();
					selected.r += 1;
					selected.s -= 1;
					select();
					evenRow = !evenRow;
					return;
				}
			}
			case "z":
				select();
				return rotateCell(selectedCell(), "counter-clockwise");
			case "x":
			case " ":
				select();
				return rotateCell(selectedCell(), "clockwise");
		}
	});

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
	const size = Number.parseInt(searchParams.get("size") ?? "5");
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
