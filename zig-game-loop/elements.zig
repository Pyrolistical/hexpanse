const math = @import("std").math;

const ctx = @import("canvas.zig");
const LineCap = ctx.LineCap;
const Path2D = @import("path2d.zig");

const index = @import("index.zig");
const Cell = index.Cell;
const Connection = index.Connection;
const RotationDirection = index.RotationDirection;

var hexagon: u32 = 0;
pub const hexagonUnitHeight: f64 = math.sqrt(3.0) / 2.0;

const base03 = 0x002b36;
const base02 = 0x073642;
const base0 = 0x839496;
const red = 0xdc322f;
const blue = 0x268bd2;
const green = 0x859900;
const backgroundColor = base03;
const cellBackgroundColor = base02;
const cellForegroundColor = base0;

pub fn init() void {
    hexagon = createHexagon();
}

fn createHexagon() u32 {
    const path = Path2D.new();
    // workaround for https://github.com/ziglang/zig/issues/12880
    // Path2D.moveTo(path, 0, -1);
    // Path2D.lineTo(path, hexagonUnitHeight, -0.5);
    // Path2D.lineTo(path, hexagonUnitHeight, 0.5);
    // Path2D.lineTo(path, 0, 1);
    // Path2D.lineTo(path, -hexagonUnitHeight, 0.5);
    // Path2D.lineTo(path, -hexagonUnitHeight, -0.5);
    Path2D.m(path, 0, -1);
    Path2D.l(path, hexagonUnitHeight, -0.5);
    Path2D.l(path, hexagonUnitHeight, 0.5);
    Path2D.l(path, 0, 1);
    Path2D.l(path, -hexagonUnitHeight, 0.5);
    Path2D.l(path, -hexagonUnitHeight, -0.5);
    Path2D.closePath(path);
    return path;
}

pub fn background(width: f64, height: f64) void {
    ctx.save();
    defer ctx.restore();
    ctx.fillStyle(backgroundColor);
    ctx.fillRect(0, 0, width, height);
}

fn cellBackground() void { //size: u8, q: u8, r: u8) void {
    ctx.save();
    defer ctx.restore();
    ctx.scale(0.855, 0.855);
    ctx.fillStyle(cellBackgroundColor);
    ctx.fillPath(hexagon);
    // const interactionKey = (2 * size + 1) * q + r;
    // ctx.interactible(interactionKey, hexagon);
    // return ctx.interacted(interactionKey);
}

fn lerp(t: f64, a: f64, b: f64) f64 {
    return (1 - t) * a + t * b;
}

pub fn cellBackgroundAndEdges(size: i8, cell: Cell) void {
    _ = size;
    // const q = cell.q;
    // const r = cell.r;
    const orientation = cell.orientation;
    const connection = cell.connection;
    const color = cell.color;
    cellBackground(); //size, q, r);

    ctx.save();
    defer ctx.restore();
    const t = 1; //easing(math.min((time - orientation.startTime) / 250, 1));
    const startAngle = @intToFloat(f64, if (orientation.animate == RotationDirection.clockwise)
        @enumToInt(orientation.value) - 60
    else
        @enumToInt(orientation.value) + 60);
    const endAngle = @intToFloat(f64, @enumToInt(orientation.value));
    ctx.rotate(lerp(t, startAngle, endAngle) *
        math.pi /
        180);
    // if (t < 1) {
    //     ctx.draw();
    // }
    const rgb: u32 = switch (color) {
        .none => cellForegroundColor,
        .red => red,
        .green => green,
        .blue => blue,
    };
    ctx.fillStyle(rgb);
    ctx.strokeStyle(rgb);
    edges(connection);
}

fn edges(connection: Connection) void {
    switch (connection) {
        .i => {
            {
                ctx.save();
                defer ctx.restore();
                ctx.lineWidth(0.25);
                ctx.lineCap(LineCap.round);
                ctx.beginPath();
                ctx.moveTo(0.0, 0.0);
                ctx.lineTo(hexagonUnitHeight, 0);
                ctx.stroke();
            }

            ctx.save();
            defer ctx.restore();
            ctx.scale(0.25, 0.25);
            ctx.fillPath(hexagon);
        },
        .v => {
            ctx.save();
            defer ctx.restore();
            ctx.lineWidth(0.25);
            ctx.lineCap(LineCap.round);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
            ctx.beginPath();
            ctx.rotate((60.0 * math.pi) / 180.0);
            ctx.moveTo(0, 0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
        },
        .C => {
            ctx.save();
            defer ctx.restore();
            ctx.lineWidth(0.25);
            ctx.lineCap(LineCap.round);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
            ctx.beginPath();
            ctx.rotate((120.0 * math.pi) / 180.0);
            ctx.moveTo(0, 0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
        },
        .l => {
            ctx.save();
            defer ctx.restore();
            ctx.lineWidth(0.25);
            ctx.lineCap(LineCap.round);
            ctx.beginPath();
            ctx.moveTo(-hexagonUnitHeight, 0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
        },
        .E => {
            ctx.save();
            defer ctx.restore();
            ctx.lineWidth(0.25);
            ctx.lineCap(LineCap.round);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
            ctx.beginPath();
            ctx.rotate((60.0 * math.pi) / 180.0);
            ctx.moveTo(0, 0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
            ctx.beginPath();
            ctx.rotate((60.0 * math.pi) / 180.0);
            ctx.moveTo(0, 0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
        },
        .y => {
            ctx.save();
            defer ctx.restore();
            ctx.lineWidth(0.25);
            ctx.lineCap(LineCap.round);
            ctx.beginPath();
            ctx.moveTo(-hexagonUnitHeight, 0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
            ctx.beginPath();
            ctx.rotate((120.0 * math.pi) / 180.0);
            ctx.moveTo(0, 0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
        },
        .lambda => {
            ctx.save();
            defer ctx.restore();
            ctx.lineWidth(0.25);
            ctx.lineCap(LineCap.round);
            ctx.beginPath();
            ctx.moveTo(-hexagonUnitHeight, 0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
            ctx.beginPath();
            ctx.rotate((60.0 * math.pi) / 180.0);
            ctx.moveTo(0, 0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
        },
        .tri => {
            ctx.save();
            defer ctx.restore();
            ctx.lineWidth(0.25);
            ctx.lineCap(LineCap.round);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
            ctx.beginPath();
            ctx.rotate((120.0 * math.pi) / 180.0);
            ctx.moveTo(0, 0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
            ctx.beginPath();
            ctx.rotate((120.0 * math.pi) / 180.0);
            ctx.moveTo(0, 0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
        },
        .K => {
            ctx.save();
            defer ctx.restore();
            ctx.lineWidth(0.25);
            ctx.lineCap(LineCap.round);
            ctx.beginPath();
            ctx.moveTo(-hexagonUnitHeight, 0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
            ctx.beginPath();
            ctx.rotate((60.0 * math.pi) / 180.0);
            ctx.moveTo(0, 0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
            ctx.beginPath();
            ctx.rotate((60.0 * math.pi) / 180.0);
            ctx.moveTo(0, 0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
        },
        .phi => {
            ctx.save();
            defer ctx.restore();
            ctx.lineWidth(0.25);
            ctx.lineCap(LineCap.round);
            ctx.beginPath();
            ctx.moveTo(-hexagonUnitHeight, 0.0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
            ctx.beginPath();
            ctx.rotate((120.0 * math.pi) / 180.0);
            ctx.moveTo(0, 0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
            ctx.beginPath();
            ctx.rotate((120.0 * math.pi) / 180.0);
            ctx.moveTo(0, 0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
        },
        .X => {
            ctx.save();
            defer ctx.restore();
            ctx.lineWidth(0.25);
            ctx.lineCap(LineCap.round);
            ctx.beginPath();
            ctx.moveTo(-hexagonUnitHeight, 0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
            ctx.beginPath();
            ctx.rotate((60.0 * math.pi) / 180.0);
            ctx.moveTo(-hexagonUnitHeight, 0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
        },
        .hat => {
            ctx.save();
            defer ctx.restore();
            ctx.lineWidth(0.25);
            ctx.lineCap(LineCap.round);
            ctx.beginPath();
            ctx.moveTo(-hexagonUnitHeight, 0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
            ctx.beginPath();
            ctx.rotate((60.0 * math.pi) / 180.0);
            ctx.moveTo(-hexagonUnitHeight, 0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
            ctx.beginPath();
            ctx.rotate((60.0 * math.pi) / 180.0);
            ctx.moveTo(0, 0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
        },
        .star => {
            ctx.save();
            defer ctx.restore();
            ctx.lineWidth(0.25);
            ctx.lineCap(LineCap.round);
            ctx.beginPath();
            ctx.moveTo(-hexagonUnitHeight, 0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
            ctx.beginPath();
            ctx.rotate((60.0 * math.pi) / 180.0);
            ctx.moveTo(-hexagonUnitHeight, 0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
            ctx.beginPath();
            ctx.rotate((60.0 * math.pi) / 180.0);
            ctx.moveTo(-hexagonUnitHeight, 0);
            ctx.lineTo(hexagonUnitHeight, 0);
            ctx.stroke();
        },
    }
}
