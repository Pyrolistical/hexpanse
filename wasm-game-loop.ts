import { GameLoop, Frame, Mouse } from "./play/index";

type LineCapIndex = 0 | 1 | 2;
const LineCaps: CanvasLineCap[] = ["butt", "round", "square"];

export default (module: WebAssembly.Module) =>
	async (
		ctx: CanvasRenderingContext2D,
		frame: Frame,
		mouse: Mouse
	): Promise<GameLoop> => {
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
			mouse: {
				// multi-value
				position() {
					return mouse.position;
				},
				// split out for wasm C ABI which doesn't support multi-value
				positionX() {
					return mouse.position[0];
				},
				positionY() {
					return mouse.position[1];
				},
				timestamp() {
					return mouse.timestamp;
				},
				buttons() {
					return mouse.buttons;
				},
			},
			frame: {
				time() {
					return frame.time;
				},
				width() {
					return frame.width;
				},
				height() {
					return frame.height;
				},
				next() {
					frame.next();
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

				isPointInPath(path: number, x: number, y: number) {
					return ctx.isPointInPath(paths[path]!, x, y);
				},
			},
		});
		const memory = instance.exports["memory"]! as WebAssembly.Memory;
		return instance.exports["gameLoop"]! as GameLoop;
	};
