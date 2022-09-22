pub extern "Path2D" fn new() u32;

// workaround for https://github.com/ziglang/zig/issues/12880
// pub extern "Path2D" fn moveTo(path: u32, x: f64, y: f64) void;
// pub extern "Path2D" fn lineTo(path: u32, x: f64, y: f64) void;
pub extern "Path2D" fn m(path: u32, x: f64, y: f64) void;
pub extern "Path2D" fn l(path: u32, x: f64, y: f64) void;

pub extern "Path2D" fn closePath(path: u32) void;
