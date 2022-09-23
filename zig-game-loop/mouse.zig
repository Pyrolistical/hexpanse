pub extern "mouse" fn timestamp() f64;
pub extern "mouse" fn buttons() u32;
pub extern "mouse" fn positionX() f64;
pub extern "mouse" fn positionY() f64;

pub fn primary() bool {
    return buttons() & 1 != 0;
}
pub fn secondary() bool {
    return buttons() & 2 != 0;
}
