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
				frame.width = canvasWidth;
				frame.height = canvasHeight;
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
	mouse.buttons = event.buttons;
	mouse.primary.pressed = Boolean(event.buttons & 1);
	mouse.secondary.pressed = Boolean(event.buttons & 2);
	mouse.position = position;
	mouse.timestamp = Infinity;
	requestDraw();
};
canvas.onpointerup = (event) => {
	const position = pointerToCanvasSpace(event);
	mouse.buttons = event.buttons;
	mouse.primary.pressed = Boolean(event.buttons & 1);
	mouse.secondary.pressed = Boolean(event.buttons & 2);
	mouse.position = position;
	mouse.timestamp = Infinity;
	requestDraw();
};

type Position = [number, number];

export type GameLoop = () => void;

const frame = {
	time: 0,
	width: 0,
	height: 0,
	next() {},
};
export type Frame = {
	time: DOMHighResTimeStamp;
	width: number;
	height: number;
	next(): void;
};

type Button = {
	pressed: boolean;
};
export type Mouse = {
	buttons: number;
	primary: Button;
	secondary: Button;
	position: Position;
	timestamp: number;
};
const mouse: Mouse = {
	buttons: 0,
	primary: {
		pressed: false,
	},
	secondary: {
		pressed: false,
	},
	position: [0, 0],
	timestamp: 0,
};

import GameLoop from "../zig-game-loop/index";
// import GameLoop from "../ts-game-loop/index";
const gameLoop = await GameLoop(ctx, frame, mouse);

let raf: number | undefined;

const requestDraw = () => {
	if (raf) {
		return;
	}
	raf = requestAnimationFrame((time) => {
		if (mouse.timestamp === Infinity) {
			mouse.timestamp = time;
		}
		frame.time = time;
		raf = undefined;

		gameLoop();
	});
};
frame.next = requestDraw;
