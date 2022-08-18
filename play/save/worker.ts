import stringify from "fast-json-stable-stringify";
import { createInstance, INDEXEDDB } from "localforage";
const store = createInstance({
	driver: INDEXEDDB,
	name: "hexpanse",
	version: 1.0,
	storeName: "gameState",
});

import PuzzleGenerator, { Config } from "../puzzle-generator";
import { asCoordinateKey } from "../elements";

import { Message, Reply, State } from "./client";

const reply = (reply: Reply) => {
	postMessage(reply);
};
let config: Config;
let key: string;
let state: State;
onmessage = async ({ data }: MessageEvent<Message>) => {
	switch (data.type) {
		case "restore": {
			config = data.config;
			key = stringify(config);
			const storedState = await store.getItem<State>(key);
			if (storedState) {
				state = storedState;
			} else {
				state = {};
				for (const { coordinate, orientation, connection } of PuzzleGenerator(
					config
				)) {
					state[asCoordinateKey(coordinate)] = {
						coordinate,
						orientation,
						connection,
					};
				}
				await store.setItem<State>(key, state);
			}
			return reply({
				type: "restored",
				config,
				state,
			});
		}
		case "update cell": {
			const { coordinate, orientation } = data;
			const cell = state[asCoordinateKey(coordinate)];
			if (cell) {
				cell.orientation = orientation;
				await store.setItem<State>(key, state);
			}
			return;
		}
	}
};
