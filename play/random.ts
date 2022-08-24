import Seedrandom from "seedrandom";

type ChooseOne = {
	<T>(values: Map<T, any>): T;
	<T>(values: Set<T>): T;
	<T>(values: readonly T[]): T;
	<T>(values: IterableIterator<T>): T;
};

type RemoveOne = {
	<T>(values: Map<any, T>): T;
	<T>(values: Set<T>): T;
	<T>(values: T[]): T;
};

/**
 * Iterates values once in a random order.
 */
type RandomIterator = {
	<T>(values: Map<T, any>): Generator<T>;
	<T>(values: Set<T>): T;
	<T>(values: readonly T[]): Generator<T>;
	<T>(values: IterableIterator<T>): Generator<T>;
};

function* skip<T>(n: number, iterator: IterableIterator<T>): Generator<T> {
	let i = 0;
	for (const value of iterator) {
		if (i++ < n) {
			continue;
		}
		yield value;
	}
}

export default (
	seed?: string
): {
	chooseOne: ChooseOne;
	removeOne: RemoveOne;
	randomIterator: RandomIterator;
} => {
	const random = Seedrandom(seed);
	const self = {
		chooseOne<T>(
			values: Map<T, any> | Set<T> | readonly T[] | IterableIterator<T>
		): T {
			if (values instanceof Map || values instanceof Set) {
				const index = Math.floor(random() * values.size);
				const { value } = skip(index, values.keys()).next();
				return value;
			} else {
				const array = values instanceof Array ? values : [...values];
				return array[Math.floor(random() * array.length)]!;
			}
		},
		removeOne<T>(values: Map<any, T> | Set<T> | T[]): T {
			if (values instanceof Map) {
				const key = self.chooseOne(values);
				const value = values.get(key);
				values.delete(key);
				return value!;
			} else if (values instanceof Set) {
				const key = self.chooseOne(values);
				values.delete(key);
				return key!;
			} else {
				const index = Math.floor(random() * values.length);
				const value = values[index];
				values.splice(index, 1);
				return value!;
			}
		},
		*randomIterator<T>(
			values: Map<T, any> | Set<T> | readonly T[] | IterableIterator<T>
		): Generator<T> {
			if (values instanceof Map || values instanceof Set) {
				const start = Math.floor(random() * values.size);
				yield* skip(start, values.keys());
			} else {
				const array = values instanceof Array ? values : [...values];
				const start = Math.floor(random() * array.length);
				for (let i = 0; i < array.length; i++) {
					yield array[(start + i) % array.length]!;
				}
			}
		},
	};
	return self;
};
