const std = @import("std");
const allocator = std.heap.page_allocator;

pub extern "env" fn throwError(pointer: [*]const u8, length: u32) noreturn;

extern "env" fn consoleLog(pointer: [*]const u8, length: u32) void;

pub fn debug(comptime fmt: []const u8, args: anytype) void {
    const msg = std.fmt.allocPrint(allocator, fmt, args) catch return;
    defer allocator.free(msg);
    consoleLog(msg.ptr, msg.len);
}
