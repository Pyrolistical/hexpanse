import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/assets.css";
import "sanitize.css/typography.css";
import "./index.css";
import "../polyfill.js";

import { debounce } from "lodash-es";
import { assertInstanceOf } from "../assert";

const container = document.querySelector("main")!;

const canvas = container.querySelector("canvas")!;
assertInstanceOf(canvas, HTMLCanvasElement);

canvas.oncontextmenu = (event) => {
	event.preventDefault();
};

const ctx = canvas.getContext("2d")!;

const resizeObserver = new ResizeObserver(
	debounce(
		([
			{
				contentRect: { width: cssWidth, height: cssHeight },
			},
		]) => {
			const canvasWidth = Math.floor(window.devicePixelRatio * cssWidth);
			const canvasHeight = Math.floor(window.devicePixelRatio * cssHeight);
			if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
				canvas.style.width = `${cssWidth}px`;
				canvas.style.height = `${cssHeight}px`;
				canvas.width = canvasWidth;
				canvas.height = canvasHeight;
				draw();
			}
		},
		250
	)
);
resizeObserver.observe(container);

const pointerToCanvasSpace = ({ clientX, clientY }: PointerEvent): Position => {
	const { width: canvasWidth, height: canvasHeight } = canvas;
	const {
		top,
		left,
		width: boundWidth,
		height: boundHeight,
	} = canvas.getBoundingClientRect();
	const scaleX = canvasWidth / boundWidth;
	const scaleY = canvasHeight / boundHeight;

	const elementX = (clientX - left) * scaleX;
	const elementY = (clientY - top) * scaleY;

	const matrix = ctx.getTransform().invertSelf();
	const canvasX = elementX * matrix.a + elementY * matrix.c + matrix.e;
	const canvasY = elementX * matrix.b + elementY * matrix.d + matrix.f;

	return [canvasX, canvasY];
};

canvas.onpointerdown = (event) => {
	events.push({
		type: "pointerdown",
		position: pointerToCanvasSpace(event),
		buttons: event.buttons,
	});
	draw();
};

type Dimension = [number, number];
type Memory = Record<string, any>;
type Position = [number, number];
type Event = PointerDown;
type PointerDown = {
	type: "pointerdown";
	position: Position;
	buttons: PointerEvent["buttons"];
};

import PuzzleGenerator from "./puzzle-generator";

export type Coordinate = {
	q: number;
	r: number;
	s: number;
};
export type CoordinateKey =
	`${Coordinate["q"]} ${Coordinate["r"]} ${Coordinate["s"]}`;
export const asCoordinateKey = ({ q, r, s }: Coordinate): CoordinateKey =>
	`${q} ${r} ${s}`;

type Milliseconds = number;
type Cell = {
	coordinate: Coordinate;
	orientation: {
		value: Orientation;
		animate: "clockwise" | "counter-clockwise";
		startTime: DOMHighResTimeStamp;
		duration: Milliseconds;
	};
	connection: Connection;
};

export const Orientations = [0, 60, 120, 180, 240, 300] as const;
export type Orientation = typeof Orientations[number];

// 8-bit flag to indicate there is a connection in that cube coordinate direction
const Connections = [
	// r -q s -r q -s
	0b100000, // i

	0b110000, // v
	0b101000, // C
	0b100100, // l
	// 0b100010, // dupe C

	0b111000, // E
	0b101100, // y
	0b110100, // λ
	0b101010, // tri

	0b111100, // K
	0b101110, // Ψ
	0b110110, // X
	// 0b111010, // dupe Ψ

	0b111110, // hat

	0b111111, // star
] as const;
export type Connection = typeof Connections[number];
type Cells = Record<CoordinateKey, Cell>;

const lerp = (t: number, a: number, b: number): number => {
	return (1 - t) * a + t * b;
};

const drawCell = (
	time: DOMHighResTimeStamp,
	{ orientation, connection }: Cell,
	pointerDown: PointerDown | undefined
): boolean => {
	ctx.save();
	ctx.scale(0.855, 0.855);
	let clicked = false;
	if (pointerDown) {
		const {
			position: [x, y],
		} = pointerDown;
		clicked = ctx.isPointInPath(hexagon, x, y);
	}
	ctx.fill(hexagon);
	ctx.restore();

	ctx.save();
	if (orientation.animate === "clockwise") {
		const t = Math.min(
			(time - orientation.startTime) / orientation.duration,
			1
		);
		ctx.rotate(
			(lerp(t, orientation.value - 60, orientation.value) * Math.PI) / 180
		);
		if (t < 1) {
			draw();
		}
	} else {
	}
	ctx.fillStyle = cellForeground;
	ctx.strokeStyle = cellForeground;
	switch (connection) {
		case 0b100000 /* i */:
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.moveTo(hexagonUnitHeight, 0);
			ctx.lineTo(0, 0);
			ctx.stroke();
			ctx.restore();

			ctx.save();
			ctx.scale(0.25, 0.25);
			ctx.fill(hexagon);
			ctx.restore();
			break;
		case 0b110000: // v
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(hexagonUnitHeight, 0);
			ctx.lineTo(0, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.restore();
			break;
		case 0b101000: // C
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(hexagonUnitHeight, 0);
			ctx.lineTo(0, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((120 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.restore();
			break;
		case 0b100100: // l
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(hexagonUnitHeight, 0);
			ctx.lineTo(-hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.restore();
			break;
		case 0b111000: // E
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(hexagonUnitHeight, 0);
			ctx.lineTo(0, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.restore();
			break;
		case 0b101100: // y
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(hexagonUnitHeight, 0);
			ctx.lineTo(0, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(-hexagonUnitHeight, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.restore();
			break;
		case 0b110100: // λ
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(-hexagonUnitHeight, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(hexagonUnitHeight, 0);
			ctx.lineTo(0, 0);
			ctx.stroke();
			ctx.restore();
			break;
		case 0b101010: // tri
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(hexagonUnitHeight, 0);
			ctx.lineTo(0, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((120 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((120 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.restore();
			break;
		case 0b111100: // K
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(hexagonUnitHeight, 0);
			ctx.lineTo(0, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.restore();
			break;
		case 0b101110: // Ψ
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(hexagonUnitHeight, 0);
			ctx.lineTo(0, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((120 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.restore();
			break;
		case 0b110110: // X
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(hexagonUnitHeight, 0);
			ctx.lineTo(0, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((120 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.restore();
			break;
		case 0b111110: // hat
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(hexagonUnitHeight, 0);
			ctx.lineTo(0, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.restore();
			break;
		case 0b111111: // star
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(hexagonUnitHeight, 0);
			ctx.lineTo(0, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.restore();
			break;
	}
	ctx.restore();

	return clicked;
};
const base03 = "#002b36";
const base02 = "#073642";
const base01 = "#586e75";
const base00 = "#657b83";
const base0 = "#839496";
const base1 = "#93a1a1";
const base2 = "#eee8d5";
const base3 = "#fdf6e3";
const yellow = "#b58900";
const orange = "#cb4b16";
const red = "#dc322f";
const magenta = "#d33682";
const violet = "#6c71c4";
const blue = "#268bd2";
const cyan = "#2aa198";
const green = "#859900";
const background = base03;
const cellBackground = base02;
const cellForeground = base0;
const hexagonUnitHeight = Math.sqrt(3) / 2;
const hexagon = new Path2D(`m ${-hexagonUnitHeight} -0.5
l  ${hexagonUnitHeight} -0.5
l  ${hexagonUnitHeight}  0.5
l 0                   1
l ${-hexagonUnitHeight}  0.5
l ${-hexagonUnitHeight} -0.5
z`);
const GameLoop =
	(memory: Memory) =>
	(time: DOMHighResTimeStamp, [width, height]: Dimension, events: Event[]) => {
		ctx.fillStyle = background;
		ctx.fillRect(0, 0, width, height);

		const size = 1;
		if (!memory["state"]) {
			const cells: Cells = {};
			const config = {
				size,
				seed: "9f96afb4-47ea-4ef8-8a18-7b8fa218573f",
				mode: "prims",
			} as const;
			for (const { coordinate, orientation, connection } of PuzzleGenerator(
				config
			)) {
				cells[asCoordinateKey(coordinate)] = {
					coordinate,
					orientation: {
						value: orientation,
						animate: "clockwise",
						startTime: 0,
						duration: 250,
					},
					connection,
				};
			}
			memory["cells"] = cells;
			memory["state"] = "playing";
		}

		switch (memory["state"]) {
			case "playing": {
				ctx.save();
				ctx.translate(width / 2, height / 2);
				const scale = height / (2 * (2 * size * 0.75 + 1));
				ctx.scale(scale, scale);
				const cells: Cells = memory["cells"];
				ctx.fillStyle = cellBackground;
				const pointerDown = events.find(({ type }) => type === "pointerdown");
				for (const cell of Object.values(cells)) {
					const {
						coordinate: { q, r },
					} = cell;
					// Q basis [Math.sqrt(3), 0]
					// R basis [Math.sqrt(3) / 2, 3 / 2]
					// [x, y] = Q basis * q + R basis * r
					const x = 2 * hexagonUnitHeight * q + hexagonUnitHeight * r;
					const y = (3 / 2) * r;
					ctx.save();
					ctx.translate(x, y);
					if (drawCell(time, cell, pointerDown)) {
						cell.orientation.value += 60;
						cell.orientation.value %= 360;
						cell.orientation.animate = "clockwise";
						cell.orientation.startTime = time;
						draw();
					}
					ctx.restore();
				}
				ctx.restore();
				break;
			}
		}
	};

const gameLoop = GameLoop({});
let raf: number | undefined;
const events: Event[] = [];
const draw = () => {
	if (raf) {
		return;
	}
	raf = requestAnimationFrame((time) => {
		raf = undefined;
		const { width, height } = canvas;
		gameLoop(time, [width, height], events);
		events.length = 0;
	});
};
