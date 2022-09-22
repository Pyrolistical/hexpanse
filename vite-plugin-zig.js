import { readFile, rm } from "node:fs/promises";
import { basename, dirname, join } from "node:path";
import { tmpdir } from "node:os";
import { promisify } from "node:util";
import { exec as callbackExec } from "node:child_process";
const exec = promisify(callbackExec);

const Mutex = () => {
	let semaphore;
	let unlock;
	const acquire = async () => {
		await semaphore;
		semaphore = new Promise((resolve) => {
			unlock = resolve;
		});
	};

	const release = () => {
		unlock();
		semaphore = undefined;
		unlock = undefined;
	};

	return async (closure) => {
		try {
			await acquire();
			return closure();
		} finally {
			release();
		}
	};
};

const zigMutex = Mutex();

// workaround for zig 0.9.1 https://github.com/ziglang/zig/issues/12864
let workaround12864 = async (id, closure) => {
	const directory = dirname(id);
	const zigCache = join(directory, "zig-cache");
	await rm(zigCache, {
		force: true,
		recursive: true,
	});

	return closure();
};

export default async ({
	enableWorkaround12864 = true,
	zigBin = "zig",
} = {}) => {
	if (!enableWorkaround12864) {
		workaround12864 = async (_id, closure) => closure();
	}
	const { stdout, stderr } = await exec(`${zigBin} version`);

	if (stderr.length > 0) {
		throw new Error(`zig version errored: ${stderr.toString()}`);
	}
	// console.log(`${zigBin} version ${stdout.toString()}`);
	return {
		name: "vite:zig",
		enforce: "pre",
		async transform(code, id, options) {
			if (id.endsWith(".zig")) {
				return zigMutex(() =>
					workaround12864(id, async () => {
						const fileName = basename(id, ".zig");
						const temp = tmpdir();
						const destination = join(temp, `${fileName}.wasm`);

						const buildCommand = `${zigBin} build-lib ${id} -target wasm32-freestanding -dynamic -femit-bin=${destination}`;
						const { stderr } = await exec(buildCommand);

						if (stderr.length > 0) {
							throw new Error(`zig compiler errored: ${stderr.toString()}`);
						}

						const wasm = await readFile(destination);
						const wasmBase64 = wasm.toString("base64");
						await rm(destination);

						return {
							code: `export default "data:application/wasm;base64,${wasmBase64}"`,
							map: null,
						};
					})
				);
			}
		},
	};
};
