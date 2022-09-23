import zigGameLoopWasmUrl from "./index.zig";
import WasmGameLoop from "../wasm-game-loop";

const module = await WebAssembly.compileStreaming(fetch(zigGameLoopWasmUrl));
export default WasmGameLoop(module);
