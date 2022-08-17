import Seedrandom from "seedrandom";

export type ChooseOne = {
	<T>(values: Map<T, any>): T;
	<T>(values: readonly T[]): T;
};

function skip<T>(n: number, iterator: IterableIterator<T>): IteratorResult<T> {
	let cursor: IteratorResult<T> = iterator.next();
	while (n-- > 0) {
		cursor = iterator.next();
	}
	return cursor!;
}

export default (seed?: string): ChooseOne => {
	const random = Seedrandom(seed);
	return <T>(values: Map<T, any> | readonly T[]): T => {
		if (values instanceof Map) {
			const index = Math.floor(random() * values.size);
			const { value } = skip(index, values.keys());
			return value;
		} else {
			return values[Math.floor(random() * values.length)]!;
		}
	};
};
