import { Frame } from "../play/index";
import { Cell, Connection } from "./index";

const base03 = "#002b36";
const base02 = "#073642";
const base0 = "#839496";
const red = "#dc322f";
const blue = "#268bd2";
const green = "#859900";
const backgroundColor = base03;
const cellBackgroundColor = base02;
const cellForegroundColor = base0;

export const hexagonUnitHeight = Math.sqrt(3) / 2;
const hexagon = new Path2D(`
  m ${-hexagonUnitHeight} -0.5
  l  ${hexagonUnitHeight} -0.5
  l  ${hexagonUnitHeight}  0.5
  l                     0    1
  l ${-hexagonUnitHeight}  0.5
  l ${-hexagonUnitHeight} -0.5
  z
`);

export const background = (
	ctx: CanvasRenderingContext2D,
	width: number,
	height: number
) => {
	ctx.save();
	ctx.fillStyle = backgroundColor;
	ctx.fillRect(0, 0, width, height);
	ctx.restore();
};

export const cellBackground = (ctx: CanvasRenderingContext2D): boolean => {
	ctx.save();
	ctx.scale(0.855, 0.855);
	ctx.fillStyle = cellBackgroundColor;
	ctx.fill(hexagon);
	const clicked = false; //ctx.isPointInPath(hexagon, x, y);
	ctx.restore();
	return clicked;
};

const lerp = (t: number, a: number, b: number): number => {
	return (1 - t) * a + t * b;
};

import BezierEasing from "bezier-easing";
const easing = BezierEasing(0.25, 0.1, 0.25, 1);
export const cellBackgroundAndEdges = (
	frame: Frame,
	ctx: CanvasRenderingContext2D,
	{ orientation, connection, color }: Cell
): boolean => {
	const clicked = cellBackground(ctx);

	ctx.save();
	const t = easing(
		Math.min((frame.time() - orientation.startTime) / orientation.duration, 1)
	);
	const startAngle =
		orientation.animate === "clockwise"
			? orientation.value - 60
			: orientation.value + 60;
	const endAngle = orientation.value;
	ctx.rotate((lerp(t, startAngle, endAngle) * Math.PI) / 180);
	if (t < 1) {
		frame.next();
	}
	switch (color) {
		case "none":
			ctx.fillStyle = ctx.strokeStyle = cellForegroundColor;
			break;
		case "red":
			ctx.fillStyle = ctx.strokeStyle = red;
			break;
		case "green":
			ctx.fillStyle = ctx.strokeStyle = green;
			break;
		case "blue":
			ctx.fillStyle = ctx.strokeStyle = blue;
			break;
	}
	edges(ctx, connection);
	ctx.restore();

	return clicked;
};

export const gameOverCell = (
	frame: Frame,
	ctx: CanvasRenderingContext2D,
	{ orientation, connection }: Cell,
	l: number
) => {
	cellBackground(ctx);

	ctx.save();
	const t = easing(
		Math.min((frame.time() - orientation.startTime) / orientation.duration, 1)
	);
	ctx.rotate(
		(lerp(
			t,
			orientation.animate === "clockwise"
				? orientation.value - 60
				: orientation.value + 60,
			orientation.value
		) *
			Math.PI) /
			180
	);
	if (t < 1) {
		frame.next();
	}
	ctx.fillStyle = ctx.strokeStyle = `hsl(51deg 100% ${l}%)`;
	edges(ctx, connection);
	ctx.restore();
};

export const edges = (
	ctx: CanvasRenderingContext2D,
	connection: Connection
) => {
	switch (connection) {
		case 0b100000: // i
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
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
		case 0b101000: // C
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
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
		case 0b100100: // l
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(-hexagonUnitHeight, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.restore();
			break;
		case 0b111000: // E
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
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
		case 0b101100: // y
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(-hexagonUnitHeight, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((120 * Math.PI) / 180);
			ctx.moveTo(0, 0);
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
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.restore();
			break;
		case 0b101010: // tri
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(0, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
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
			ctx.moveTo(-hexagonUnitHeight, 0);
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
			ctx.moveTo(-hexagonUnitHeight, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
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
		case 0b110110: // X
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(-hexagonUnitHeight, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(-hexagonUnitHeight, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.restore();
			break;
		case 0b111110: // hat
			ctx.save();
			ctx.lineWidth = 0.25;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(-hexagonUnitHeight, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(-hexagonUnitHeight, 0);
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
			ctx.moveTo(-hexagonUnitHeight, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(-hexagonUnitHeight, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.rotate((60 * Math.PI) / 180);
			ctx.moveTo(-hexagonUnitHeight, 0);
			ctx.lineTo(hexagonUnitHeight, 0);
			ctx.stroke();
			ctx.restore();
			break;
	}
};
