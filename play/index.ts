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

const ctx = canvas.getContext("2d")!;

canvas.oncontextmenu = (event) => {
	event.preventDefault();
};

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
				requestDraw();
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
	const position = pointerToCanvasSpace(event);
	events.push({
		type: "pointerdown",
		position,
		buttons: event.buttons,
	});
	requestDraw();
};

type Position = [number, number];
type LineCapStyle = "round";
export type Context2D = {
	save(): void;
	restore(): void;
	set lineWidth(width: number);
	set lineCap(style: LineCapStyle);
	beginPath(): void;
	moveTo(x: number, y: number): void;
	lineTo(x: number, y: number): void;
	fill(path?: Path2D): void;
	fillRect(x: number, y: number, width: number, height: number): void;
	set fillStyle(style: string);
	stroke(path?: Path2D): void;
	set strokeStyle(style: string);
	translate(x: number, y: number): void;
	scale(x: number, y: number): void;
	rotate(angle: number): void;

	interactible(key: number, path: Path2D): void;
	interacted(key: number): boolean;

	draw(): void;
};

type Event = PointerDown;
export type PointerDown = {
	type: "pointerdown";
	position: Position;
	buttons: PointerEvent["buttons"];
};

type LineCapIndex = 0 | 1 | 2;
const LineCaps: CanvasLineCap[] = ["butt", "round", "square"];
import gameLoopWasm from "../game-loop/index.zig";
const module = await WebAssembly.compileStreaming(fetch(gameLoopWasm));
let nextPathId = 0;
const paths: Record<number, Path2D> = {};
const instance = await WebAssembly.instantiate(module, {
	env: {
		throwError(pointer: number, length: number) {
			const byteArray = new Uint8Array(memory.buffer);
			const message = new TextDecoder().decode(
				byteArray.slice(pointer, pointer + length)
			);
			throw new Error(message);
		},
		consoleLog(pointer: number, length: number) {
			const byteArray = new Uint8Array(memory.buffer);
			const message = new TextDecoder().decode(
				byteArray.slice(pointer, pointer + length)
			);
			console.log(message);
		},
	},
	Path2D: {
		new: () => {
			const path = ++nextPathId;
			paths[path] = new Path2D();
			return path;
		},
		moveTo(path: number, x: number, y: number) {
			paths[path]!.moveTo(x, y);
		},
		lineTo(path: number, x: number, y: number) {
			paths[path]!.lineTo(x, y);
		},
		// workaround for https://github.com/ziglang/zig/issues/12880
		m(path: number, x: number, y: number) {
			paths[path]!.moveTo(x, y);
		},
		l(path: number, x: number, y: number) {
			paths[path]!.lineTo(x, y);
		},
		closePath(path: number) {
			paths[path]!.closePath();
		},
	},
	ctx: {
		save: ctx.save.bind(ctx),
		restore: ctx.restore.bind(ctx),

		translate(x: number, y: number) {
			ctx.translate(x, y);
		},
		scale(x: number, y: number) {
			ctx.scale(x, y);
		},
		rotate(angle: number) {
			ctx.rotate(angle);
		},

		beginPath() {
			ctx.beginPath();
		},
		moveTo(x: number, y: number) {
			ctx.moveTo(x, y);
		},
		lineTo(x: number, y: number) {
			ctx.lineTo(x, y);
		},

		fillStyle(rgb: number) {
			ctx.fillStyle = `#${rgb.toString(16).padStart(6, "0")}`;
		},
		fillRect(x: number, y: number, width: number, height: number) {
			ctx.fillRect(x, y, width, height);
		},
		fill() {
			ctx.fill();
		},
		fillPath(path: number) {
			ctx.fill(paths[path]!);
		},

		lineWidth(width: number) {
			ctx.lineWidth = width;
		},
		lineCap(index: LineCapIndex) {
			ctx.lineCap = LineCaps[index]!;
		},
		strokeStyle(rgb: number) {
			ctx.strokeStyle = `#${rgb.toString(16).padStart(6, "0")}`;
		},
		stroke() {
			ctx.stroke();
		},
		strokePath(path: number) {
			ctx.stroke(paths[path]!);
		},

		interactible(key: number, path: number) {},

		interacted(key: number) {
			return false;
		},
	},
});
type GameLoop = (time: number, width: number, height: number) => GameLoopResult;
const memory = instance.exports["memory"]! as WebAssembly.Memory;
const gameLoop = instance.exports["gameLoop"]! as GameLoop;
let raf: number | undefined;
const events: Event[] = [];

type Idle = 0;
type Draw = 1;
type GameLoopResult = Idle | Draw;
const requestDraw = () => {
	if (raf) {
		return;
	}
	raf = requestAnimationFrame((time) => {
		raf = undefined;
		const { width, height } = canvas;
		const result = gameLoop(time, width, height);
		if (result === 1) {
			requestDraw();
		}

		events.length = 0;
	});
};
