const std = @import("std");
const Xoshiro256 = std.rand.Xoshiro256;
const ArrayList = std.ArrayList;
const allocator = std.heap.page_allocator;

const env = @import("env.zig");
const index = @import("index.zig");
const Cell = index.Cell;
const Connection = index.Connection;
const Color = index.Color;
const RotationDirection = index.RotationDirection;
const Orientation = index.Orientation;

const Direction = enum(u8) { plusQ = 0, minusS = 1, plusR = 2, minusQ = 3, plusS = 4, minusR = 5 };
const Neighbour = struct { q: u8, r: u8, direction: Direction };

fn Neighbours(size: u8, q: u8, r: u8) []Neighbour {
    var neighbours: [6]Neighbour = undefined;
    var next: usize = 0;
    const sq = @bitCast(i8, q);
    const sr = @bitCast(i8, r);
    if (validCoordinate(size, sq, sr - 1)) {
        neighbours[next] = .{ .q = q, .r = r - 1, .direction = Direction.plusQ };
        next += 1;
    }
    if (validCoordinate(size, sq + 1, sr - 1)) {
        neighbours[next] = .{ .q = q + 1, .r = r - 1, .direction = Direction.minusS };
        next += 1;
    }
    if (validCoordinate(size, sq + 1, sr)) {
        neighbours[next] = .{ .q = q + 1, .r = r, .direction = Direction.plusR };
        next += 1;
    }
    if (validCoordinate(size, sq, sr + 1)) {
        neighbours[next] = .{ .q = q, .r = r + 1, .direction = Direction.minusQ };
        next += 1;
    }
    if (validCoordinate(size, sq - 1, sr + 1)) {
        neighbours[next] = .{ .q = q - 1, .r = r + 1, .direction = Direction.plusS };
        next += 1;
    }
    if (validCoordinate(size, sq - 1, sr)) {
        neighbours[next] = .{ .q = q - 1, .r = r, .direction = Direction.minusR };
        next += 1;
    }
    return neighbours[0..next];
}

// https://stackblitz.com/edit/vitejs-vite-r2hswv?file=index.html
fn validCoordinate(size: u8, q: i8, r: i8) bool {
    return q >= 0 and
        q <= 2 * size and
        r >= 0 and
        r <= 2 * size and
        q + r >= size and
        q + r <= 3 * size;
}

const DenormalConnection = u8;
const Segment = struct {
    q: u8,
    r: u8,
    forwards: DenormalConnection,
    backwards: DenormalConnection,
};

fn findIndex(path: []Segment, q: u8, r: u8) usize {
    if (path.len == 0) {
        unreachable;
    }
    for (path) |segment, i| {
        if (segment.q == q and segment.r == r) {
            return i;
        }
    }
    unreachable;
}

fn toForwards(direction: Direction) DenormalConnection {
    const connection: DenormalConnection = 0b100000;
    return connection >> @truncate(u3, @enumToInt(direction));
}
fn toBackwards(direction: Direction) DenormalConnection {
    const connection: DenormalConnection = 0b100000;
    return connection >> @truncate(u3, (@enumToInt(direction) + 3) % 6);
}

fn loopErasedRandomWalk(size: u8, rng: *Xoshiro256, q: u8, r: u8, remaining: [][]bool) ![]Segment {
    var working: [][]bool = try allocator.alloc([]bool, 2 * size + 1);
    defer allocator.free(working);
    for (working) |*row| {
        row.* = try allocator.alloc(bool, 2 * size + 1);
    }
    defer for (working) |*row| {
        allocator.free(row.*);
    };
    var path = ArrayList(Segment).init(allocator);
    defer path.deinit();
    try path.append(.{
        .q = q,
        .r = r,
        .forwards = 0,
        .backwards = 0,
    });
    working[q][r] = true;
    while (true) {
        const last = path.items[path.items.len - 1];
        const neighbours = Neighbours(size, last.q, last.r);
        const neighbour = neighbours[rng.random().uintLessThan(usize, neighbours.len)];
        const neighbourQ = neighbour.q;
        const neighbourR = neighbour.r;
        const direction = neighbour.direction;
        const looped = working[neighbourQ][neighbourR];
        if (looped) {
            const loopIndex = findIndex(path.items, neighbourQ, neighbourR) + 1;
            for (path.items[loopIndex..]) |segment| {
                working[segment.q][segment.r] = false;
            }
            path.shrinkAndFree(loopIndex);

            continue;
        } else {
            const forwards = toForwards(direction);
            const backwards = toBackwards(direction);
            path.items[path.items.len - 1].forwards = forwards;
            try path.append(.{
                .q = neighbourQ,
                .r = neighbourR,
                .forwards = 0,
                .backwards = backwards,
            });
            const end = !remaining[neighbourQ][neighbourR];
            if (end) {
                return path.toOwnedSlice();
            }
            working[neighbourQ][neighbourR] = true;
        }
    }
}

fn normalizeConnection(connection: DenormalConnection) Connection {
    if (connection == 0b111111) {
        return Connection.star; // star
    }
    var current = connection;
    while ((current & 0b100000) == 0 or (current & 0b000001) != 0) {
        const first = current & 0b100000;
        current <<= 1;
        current &= 0b111111;
        if (first != 0) {
            current |= 0b000001;
        }
    }
    const truncated = (current & 0b011110) >> 1;
    switch (truncated) {
        0b0000 => return Connection.i,

        0b1000 => return Connection.v,
        0b0100 => return Connection.C,
        0b0010 => return Connection.l,
        0b0001 => return Connection.C,

        0b1100 => return Connection.E,
        0b0110 => return Connection.y,
        0b0011 => return Connection.lambda,
        0b1001 => return Connection.y,
        0b1010 => return Connection.lambda,
        0b0101 => return Connection.tri,

        0b1110 => return Connection.K,
        0b0111 => return Connection.phi,
        0b1011 => return Connection.X,
        0b1101 => return Connection.phi,

        0b1111 => return Connection.hat,
        else => unreachable,
    }
}

// https://en.wikipedia.org/wiki/Loop-erased_random_walk
pub fn create(size: u8, seed: u64, cells: [][]Cell) !void {
    var rng = Xoshiro256.init(seed);
    var solution: [][]DenormalConnection = try allocator.alloc([]DenormalConnection, 2 * size + 1);
    defer allocator.free(solution);
    for (solution) |*row| {
        row.* = try allocator.alloc(DenormalConnection, 2 * size + 1);
        for (row.*) |*cell| {
            cell.* = 0;
        }
    }
    defer for (solution) |*row| {
        allocator.free(row.*);
    };

    var remaining: [][]bool = try allocator.alloc([]bool, 2 * size + 1);
    defer allocator.free(remaining);
    for (remaining) |*row| {
        row.* = try allocator.alloc(bool, 2 * size + 1);
    }
    defer for (remaining) |*row| {
        allocator.free(row.*);
    };
    var remainingCount: u16 = 0;
    for (remaining) |*row, q| {
        for (row.*) |*cell, r| {
            if (q + r < size or q + r > 3 * size) {
                continue;
            }
            cell.* = true;
            remainingCount += 1;
        }
    }

    // start
    var startIndex = rng.random().uintLessThan(u16, remainingCount);
    q: for (remaining) |*row, q| {
        for (row.*) |*cell, r| {
            if (q + r < size or q + r > 3 * size) {
                continue;
            }
            if (!cell.*) {
                continue;
            }
            if (startIndex == 0) {
                cell.* = false;
                remainingCount -= 1;
                break :q;
            }
            startIndex -= 1;
        }
    }

    remaining: while (remainingCount > 0) {
        var currentIndex = rng.random().uintLessThan(u16, remainingCount);
        for (remaining) |*row, q| {
            for (row.*) |*cell, r| {
                if (q + r < size or q + r > 3 * size) {
                    continue;
                }
                if (!cell.*) {
                    continue;
                }
                if (currentIndex == 0) {
                    cell.* = false;
                    remainingCount -= 1;

                    const path = try loopErasedRandomWalk(size, &rng, @intCast(u8, q), @intCast(u8, r), remaining);
                    defer allocator.free(path);
                    for (path) |segment| {
                        const forwards = segment.forwards;
                        const backwards = segment.backwards;
                        if (remaining[segment.q][segment.r]) {
                            remaining[segment.q][segment.r] = false;
                            remainingCount -= 1;
                        }
                        solution[segment.q][segment.r] |= forwards | backwards;
                    }
                    continue :remaining;
                }
                currentIndex -= 1;
            }
        }
    }

    for (cells) |*row, q| {
        for (row.*) |*cell, r| {
            if (q + r < size or q + r > 3 * size) {
                continue;
            }
            const orientation = rng.random().enumValue(Orientation);
            const connection = normalizeConnection(solution[q][r]);
            cell.* = .{ .q = @intCast(i8, q), .r = @intCast(i8, r), .orientation = .{ .value = orientation, .animate = RotationDirection.clockwise, .startTime = 0 }, .connection = connection, .color = Color.none };
        }
    }
}
