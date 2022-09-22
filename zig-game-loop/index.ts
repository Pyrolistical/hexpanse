import gameLoopWasm from "./index.zig";
import { GameLoop, Frame } from "../play/index";

type LineCapIndex = 0 | 1 | 2;
const LineCaps: CanvasLineCap[] = ["butt", "round", "square"];

export default async (
	ctx: CanvasRenderingContext2D,
	frame: Frame
): Promise<GameLoop> => {
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
		frame,
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
		},
	});
	const memory = instance.exports["memory"]! as WebAssembly.Memory;
	return instance.exports["gameLoop"]! as GameLoop;
};
