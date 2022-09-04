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

				// ctx transform is reset when canvas width/height is changed
				ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
				draw();
			}
		},
		250
	)
);
resizeObserver.observe(container);

const pointerToCanvasSpace = ({ clientX, clientY }: PointerEvent) => {
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

type Dimension = [number, number];
type Memory = Record<string, any>;

import PuzzleGenerator from "./puzzle-generator";

type Coordinate = {
	q: number;
	r: number;
	s: number;
};
type CoordinateKey = `${Coordinate["q"]} ${Coordinate["r"]} ${Coordinate["s"]}`;
const asCoordinateKey = ({ q, r, s }: Coordinate): CoordinateKey =>
	`${q} ${r} ${s}`;

type Cell = {
	coordinate: Coordinate;
	orientation: Orientation;
	connection: Connection;
};

const Orientations = [0, 60, 120, 180, 240, 300] as const;
type Orientation = typeof Orientations[number];

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
type Connection = typeof Connections[number];
type Cells = Record<CoordinateKey, Cell>;

const GameLoop =
	(memory: Memory) =>
	([width, height]: Dimension) => {
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

		ctx.fillStyle = background;
		ctx.fillRect(0, 0, width, height);

		const size = 5;
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
					orientation,
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
				for (const {
					coordinate: { q, r },
					orientation,
					connection,
				} of Object.values(cells)) {
					// Q basis [Math.sqrt(3), 0]
					// R basis [Math.sqrt(3) / 2, 3 / 2]
					// [x, y] = Q basis * q + R basis * r
					const x = 2 * hexagonUnitHeight * q + hexagonUnitHeight * r;
					const y = (3 / 2) * r;
					ctx.save();
					ctx.translate(x, y);

					ctx.save();
					ctx.scale(0.855, 0.855);
					ctx.fill(hexagon);
					ctx.restore();

					ctx.save();
					ctx.fillStyle = cellForeground;
					ctx.strokeStyle = cellForeground;
					ctx.rotate((orientation * Math.PI) / 180);
					switch (connection) {
						case 0b100000: /* i */ {
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
						}
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
					ctx.restore();
				}
				ctx.restore();
				break;
			}
		}
	};

const gameLoop = GameLoop({});
let raf: number | undefined;
const draw = () => {
	if (raf) {
		return;
	}
	raf = requestAnimationFrame(() => {
		const { width, height } = canvas;
		gameLoop([
			width / window.devicePixelRatio,
			height / window.devicePixelRatio,
		]);
		raf = undefined;
	});
};
