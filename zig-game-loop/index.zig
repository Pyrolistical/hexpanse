const std = @import("std");
const builtin = std.builtin;
const math = std.math;
const allocator = std.heap.page_allocator;

const env = @import("env.zig");
const frame = @import("frame.zig");
const ctx = @import("canvas.zig");
const elements = @import("elements.zig");
const hexagonUnitHeight = elements.hexagonUnitHeight;
const PuzzleGenerator = @import("puzzle-generator.zig");

const Milliseconds = f32;

pub const RotationDirection = enum { clockwise, counterClockwise };

pub const Orientation = enum(i16) {
    rotate0 = 0,
    rotate60 = 60,
    rotate120 = 120,
    rotate180 = 180,
    rotate240 = 240,
    rotate300 = 300,
};

const OrientationAnimation = struct {
    value: Orientation,
    animate: RotationDirection,
    startTime: f64,
};
pub const Connection = enum(u8) {
    // r -q s -r q -s
    i = 0b100000,

    v = 0b110000,
    C = 0b101000,
    l = 0b100100,
    //C =  0b100010, // dupe

    E = 0b111000,
    y = 0b101100,
    lambda = 0b110100,
    tri = 0b101010,

    K = 0b111100,
    phi = 0b101110,
    X = 0b110110,
    // phi = 0b111010, // dupe

    hat = 0b111110,

    star = 0b111111,
};
pub const Color = enum(u8) { none, red, green, blue };
pub const Cell = struct { q: i8, r: i8, orientation: OrientationAnimation, connection: Connection, color: Color };

const State = enum { loading, playing };
var state = State.loading;
var cells: [][]Cell = undefined;
export fn gameLoop() void {
    maybeGameLoop() catch @panic("out of memory");
}

fn maybeGameLoop() !void {
    const size: u8 = 13;
    const seed: u64 = 42;
    if (state == State.loading) {
        elements.init();
        cells = try allocator.alloc([]Cell, 2 * size + 1);
        for (cells) |*row| {
            row.* = try allocator.alloc(Cell, 2 * size + 1);
        }
        try PuzzleGenerator.create(size, seed, cells);
        state = State.playing;
    }
    const width = frame.width();
    const height = frame.height();

    elements.background(width, height);

    ctx.translate(width / 2, height / 2);
    const horizontalScale =
        width / (hexagonUnitHeight * 2 * (2 * @intToFloat(f64, size) + 1));
    const verticalScale = height / (2 * (2 * @intToFloat(f64, size) * 0.75 + 1));
    const scale = math.min(horizontalScale, verticalScale);
    ctx.scale(scale, scale);

    for (cells) |row, q| {
        for (row) |cell, r| {
            if (q + r < size or q + r > 3 * size) {
                continue;
            }
            {
                // Q basis [Math.sqrt(3), 0]
                // R basis [Math.sqrt(3) / 2, 3 / 2]
                // [x, y] = Q basis * q + R basis * r
                const x =
                    2 * hexagonUnitHeight * @intToFloat(f64, @intCast(i8, q) - size) +
                    hexagonUnitHeight * @intToFloat(f64, @intCast(i8, r) - size);
                const y = (3.0 / 2.0) * @intToFloat(f64, @intCast(i8, r) - size);
                ctx.save();
                ctx.translate(x, y);
            }
            elements.cellBackgroundAndEdges(size, cell);
            ctx.restore();
        }
    }
    ctx.restore();
}

pub fn panic(message: []const u8, stack: ?*builtin.StackTrace) noreturn {
    _ = stack;
    env.throwError(message.ptr, message.len);
}
