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
	const [x, y] = position;
	for (const snapshot of Object.values(previousInteractibles)) {
		ctx.save();
		ctx.setTransform(snapshot.transform);
		snapshot.interacted = ctx.isPointInPath(snapshot.path, x, y);
		ctx.restore();
	}
	requestDraw();
};

type Position = [number, number];
type Dimension = [number, number];
type Memory = Record<string, any>;
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

	interactible(key: string, path: Path2D): void;
	interacted(key: string): boolean;

	draw(): void;
};
type DrawCommand =
	| Fill
	| FillRect
	| FillStyle
	| Stroke
	| StrokeStyle
	| Save
	| Restore
	| Translate
	| Scale
	| Rotate
	| LineWidth
	| LineCap
	| BeginPath
	| MoveTo
	| LineTo
	| Interactible;

type Fill = {
	type: "fill";
	path: Path2D | undefined;
};
type FillRect = {
	type: "fill rect";
	x: number;
	y: number;
	width: number;
	height: number;
};
type FillStyle = {
	type: "fill style";
	style: string;
};
type Stroke = {
	type: "stroke";
	path: Path2D | undefined;
};
type StrokeStyle = {
	type: "stroke style";
	style: string;
};
type Save = {
	type: "save";
};
type Restore = {
	type: "restore";
};
type Translate = {
	type: "translate";
	x: number;
	y: number;
};
type Scale = {
	type: "scale";
	x: number;
	y: number;
};
type Rotate = {
	type: "rotate";
	angle: number;
};
type LineWidth = {
	type: "line width";
	width: number;
};
type LineCap = {
	type: "line cap";
	style: LineCapStyle;
};
type BeginPath = {
	type: "begin path";
};
type MoveTo = {
	type: "move to";
	x: number;
	y: number;
};
type LineTo = {
	type: "line to";
	x: number;
	y: number;
};
type Interactible = {
	type: "interactible";
	key: string;
	path: Path2D;
};

export type GameLoop = (
	memory: Memory
) => (
	ctx: Context2D,
	time: DOMHighResTimeStamp,
	[width, height]: Dimension,
	events: Event[]
) => void;

type Event = PointerDown;
export type PointerDown = {
	type: "pointerdown";
	position: Position;
	buttons: PointerEvent["buttons"];
};

let renderQueue: DrawCommand[] = [];
const context2D: Context2D = {
	save() {
		renderQueue.push({
			type: "save",
		});
	},
	restore() {
		renderQueue.push({
			type: "restore",
		});
	},
	set lineWidth(width: number) {
		renderQueue.push({
			type: "line width",
			width,
		});
	},
	set lineCap(style: "round") {
		renderQueue.push({
			type: "line cap",
			style,
		});
	},
	beginPath() {
		renderQueue.push({
			type: "begin path",
		});
	},
	moveTo(x: number, y: number) {
		renderQueue.push({
			type: "move to",
			x,
			y,
		});
	},
	lineTo(x: number, y: number) {
		renderQueue.push({
			type: "line to",
			x,
			y,
		});
	},
	fill(path?: Path2D) {
		renderQueue.push({
			type: "fill",
			path,
		});
	},
	fillRect(x: number, y: number, width: number, height: number) {
		renderQueue.push({
			type: "fill rect",
			x,
			y,
			width,
			height,
		});
	},
	set fillStyle(style: string) {
		renderQueue.push({
			type: "fill style",
			style,
		});
	},
	stroke(path?: Path2D) {
		renderQueue.push({
			type: "stroke",
			path,
		});
	},
	set strokeStyle(style: string) {
		renderQueue.push({
			type: "stroke style",
			style,
		});
	},
	translate(x: number, y: number) {
		renderQueue.push({
			type: "translate",
			x,
			y,
		});
	},
	scale(x: number, y: number) {
		renderQueue.push({
			type: "scale",
			x,
			y,
		});
	},
	rotate(angle: number) {
		renderQueue.push({
			type: "rotate",
			angle,
		});
	},

	interactible(key: string, path: Path2D) {
		renderQueue.push({
			type: "interactible",
			key,
			path,
		});
	},
	interacted(key: string) {
		return previousInteractibles[key]?.interacted ?? false;
	},

	draw() {
		requestDraw();
	},
};
import GameLoop from "./game-loop";
const gameLoop = GameLoop({});
let raf: number | undefined;
const events: Event[] = [];
type InteractibleSnapshot = {
	transform: DOMMatrix;
	path: Path2D;
	interacted: boolean;
};
let previousInteractibles: Record<string, InteractibleSnapshot> = {};
let currentInteractibles: Record<string, InteractibleSnapshot> = {};

const requestDraw = () => {
	if (raf) {
		return;
	}
	raf = requestAnimationFrame((time) => {
		raf = undefined;
		const { width, height } = canvas;
		gameLoop(context2D, time, [width, height], events);
		for (const drawCommand of renderQueue) {
			switch (drawCommand.type) {
				case "save":
					ctx.save();
					break;
				case "restore":
					ctx.restore();
					break;
				case "line width":
					ctx.lineWidth = drawCommand.width;
					break;
				case "line cap":
					ctx.lineCap = drawCommand.style;
					break;
				case "begin path":
					ctx.beginPath();
					break;
				case "move to":
					ctx.moveTo(drawCommand.x, drawCommand.y);
					break;
				case "line to":
					ctx.lineTo(drawCommand.x, drawCommand.y);
					break;
				case "fill":
					if (drawCommand.path) {
						ctx.fill(drawCommand.path);
					} else {
						ctx.fill();
					}
					break;
				case "fill rect":
					ctx.fillRect(
						drawCommand.x,
						drawCommand.y,
						drawCommand.width,
						drawCommand.height
					);
					break;
				case "fill style":
					ctx.fillStyle = drawCommand.style;
					break;
				case "stroke":
					if (drawCommand.path) {
						ctx.stroke(drawCommand.path);
					} else {
						ctx.stroke();
					}
					break;
				case "stroke style":
					ctx.strokeStyle = drawCommand.style;
					break;
				case "translate":
					ctx.translate(drawCommand.x, drawCommand.y);
					break;
				case "scale":
					ctx.scale(drawCommand.x, drawCommand.y);
					break;
				case "rotate":
					ctx.rotate(drawCommand.angle);
					break;

				case "interactible":
					currentInteractibles[drawCommand.key] = {
						transform: ctx.getTransform(),
						path: drawCommand.path,
						interacted: false,
					};
			}
		}
		previousInteractibles = currentInteractibles;
		currentInteractibles = {};

		renderQueue.length = 0;
		events.length = 0;
	});
};
