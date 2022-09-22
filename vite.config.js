import { resolve } from "node:path";
import Zig from "./vite-plugin-zig";

export default {
	base: "/hexpanse/",
	esbuild: {
		keepNames: true, // required for core-js,
	},
	build: {
		// https://github.com/vitejs/vite/blob/1e078ad1902ae980741d6920fc3a72d182fcf179/packages/vite/src/node/constants.ts#L16
		target: ["edge88", "firefox78", "chrome87", "safari13"],

		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				play: resolve(__dirname, "play/index.html"),
			},
		},
	},
	plugins: [
		Zig({
			enableWorkaround12864: false,
			zigBin: "~/dev/tools/zig-0.10.0-dev.4060+61aaef0b0/zig",
		}),
	],
};
