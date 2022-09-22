pub extern "ctx" fn save() void;
pub extern "ctx" fn restore() void;

pub extern "ctx" fn translate(x: f64, y: f64) void;
pub extern "ctx" fn scale(x: f64, y: f64) void;
pub extern "ctx" fn rotate(angle: f64) void;

pub extern "ctx" fn beginPath() void;
pub extern "ctx" fn moveTo(x: f64, y: f64) void;
pub extern "ctx" fn lineTo(x: f64, y: f64) void;

pub extern "ctx" fn fillStyle(rgb: u32) void;
pub extern "ctx" fn fillRect(x: f64, y: f64, width: f64, height: f64) void;
pub extern "ctx" fn fill() void;
pub extern "ctx" fn fillPath(path: u32) void;

pub extern "ctx" fn lineWidth(width: f64) void;
pub const LineCap = enum(i32) {
    butt = 0,
    round = 1,
    square = 2,
};
pub extern "ctx" fn lineCap(style: LineCap) void;
pub extern "ctx" fn strokeStyle(rgb: u32) void;
pub extern "ctx" fn stroke() void;
pub extern "ctx" fn strokePath(path: u32) void;

pub extern "ctx" fn interactible(key: u32, path: u32) void;
pub extern "ctx" fn interacted(key: u32) bool;
