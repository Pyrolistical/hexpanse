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

	const moveLeft = () => {
		if (selected.q === -size || selected.s === size) {
			if (selected.q === -size && selected.r === 0 && selected.s === size) {
				return;
			}
			if (selected.r > 0) {
				deselect();
				selected.r -= 1;
				selected.s += 1;
				select();
			} else {
				deselect();
				selected.q -= 1;
				selected.r += 1;
				select();
			}
			return;
		}
		deselect();
		selected.q -= 1;
		selected.s += 1;
		select();
	};
	const moveRight = () => {
		if (selected.q === size || selected.s === -size) {
			if (selected.q === size && selected.r === 0 && selected.s === -size) {
				return;
			}
			if (selected.r > 0) {
				deselect();
				selected.q += 1;
				selected.r -= 1;
				select();
			} else {
				deselect();
				selected.r += 1;
				selected.s -= 1;
				select();
			}
			return;
		}
		deselect();
		selected.q += 1;
		selected.s -= 1;
		select();
	};
	const moveUp = () => {
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
		} else {
			deselect();
			selected.q += 1;
			selected.r -= 1;
			select();
			evenRow = !evenRow;
		}
	};

	const moveDown = () => {
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
		} else {
			deselect();
			selected.r += 1;
			selected.s -= 1;
			select();
			evenRow = !evenRow;
		}
	};
	const rotateCounterClockwise = () => {
		select();
		rotateCell(selectedCell(), "counter-clockwise");
	};
	const rotateClockwise = () => {
		select();
		rotateCell(selectedCell(), "clockwise");
	};
	document.body.addEventListener("keydown", (event) => {
		if (!allowedKeys.includes(event.key)) {
			return;
		}
		event.preventDefault();
		switch (event.key) {
			case "ArrowLeft":
				return moveLeft();
			case "ArrowRight":
				return moveRight();
			case "ArrowUp":
				return moveUp();
			case "ArrowDown":
				return moveDown();
			case "z":
				return rotateCounterClockwise();
			case "x":
			case " ":
				return rotateClockwise();
		}
	});

	let gamepadPoll: number | undefined;
	const processed: Record<string, DOMHighResTimeStamp> = {};
	window.addEventListener("gamepadconnected", () => {
		if (gamepadPoll) {
			return;
		}
		gamepadPoll = window.setInterval(() => {
			const gamepads: Gamepad[] = navigator
				.getGamepads()
				.filter((gamepad): gamepad is Gamepad => Boolean(gamepad));
			if (gamepads.length === 0) {
				clearInterval(gamepadPoll);
				return;
			}
			for (const gamepad of gamepads) {
				if (processed[gamepad.id] === gamepad.timestamp) {
					continue;
				}
				if (
					gamepad.buttons[0]!.pressed ||
					gamepad.buttons[4]!.pressed ||
					gamepad.buttons[6]!.pressed
				) {
					rotateCounterClockwise();
				} else if (
					gamepad.buttons[1]!.pressed ||
					gamepad.buttons[5]!.pressed ||
					gamepad.buttons[7]!.pressed
				) {
					rotateClockwise();
				} else if (gamepad.buttons[9]!.pressed) {
					startNewGame();
				} else if (gamepad.buttons[12]!.pressed) {
					moveUp();
				} else if (gamepad.buttons[13]!.pressed) {
					moveDown();
				} else if (gamepad.buttons[14]!.pressed) {
					moveLeft();
				} else if (gamepad.buttons[15]!.pressed) {
					moveRight();
				}
				processed[gamepad.id] = gamepad.timestamp;
			}
		}, 10);
	});

	document.body.append(html`<main>${main}</main>`);
	const renderTime = html`<p>Rendered ${Math.ceil(Date.now() - start)}ms</p>`;

	const newGameButton = html`<button>New game</button>`;
	const startNewGame = () => {
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
	newGameButton.onclick = (event) => {
		event.preventDefault();
		startNewGame();
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
