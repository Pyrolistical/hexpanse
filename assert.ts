export function assertBoolean(
	value: unknown
): asserts value is NonNullable<boolean> {
	assertTypeOf(value, "boolean");
}

export function assertString(
	value: unknown
): asserts value is NonNullable<string> {
	assertTypeOf(value, "string");
}

export function assertNumber(
	value: unknown
): asserts value is NonNullable<number> {
	assertTypeOf(value, "number");
}

export function assertPlainObject(
	value: unknown
): asserts value is NonNullable<object> {
	assertTypeOf(value, "object");
	assertNotArray(value);
}

export function assertObject(
	value: unknown
): asserts value is NonNullable<object> {
	assertTypeOf(value, "object");
}

export function assertFunction(
	value: unknown
): asserts value is NonNullable<Function> {
	assertTypeOf(value, "function");
}

declare global {
	interface ImportMeta {
		env: {
			PROD: boolean;
		};
	}
}

export function assertArray(value: unknown): asserts value is Array<unknown> {
	assertInstanceOf(value, Array);
}
export function assertArrayOf<T>(
	value: unknown,
	expectedType: new () => T
): asserts value is Array<T> {
	if (import.meta.env.PROD) return;
	assertArray(value);
	for (const v of value) {
		assertInstanceOf(v, expectedType);
	}
}

export function assertNodeListOf<T>(
	value: unknown,
	expectedType: new () => T
): asserts value is NodeList {
	if (import.meta.env.PROD) return;
	assertInstanceOf(value, NodeList);
	for (const v of value) {
		assertInstanceOf(v, expectedType);
	}
}

export function assertOneOf<T>(
	value: any,
	allowedValues: readonly T[]
): asserts value is T {
	if (import.meta.env.PROD) return;
	if (!allowedValues.includes(value))
		console.trace({
			error: `expected value to be one of [${allowedValues}]`,
			value,
			allowedValues,
		});
}

const assertTypeOf = (value: unknown, expectedTypeOf: string) => {
	if (import.meta.env.PROD) return;
	if (typeof expectedTypeOf !== "string")
		console.trace({
			error: `expected expectedTypeOf be typeof string`,
			expectedTypeOf,
			expected: "string",
			actual: typeof expectedTypeOf,
		});

	const actual = typeof value;
	if (actual !== expectedTypeOf)
		console.trace({
			error: `expected value be typeof ${expectedTypeOf}`,
			value,
			expected: expectedTypeOf,
			actual,
		});
};

export const assertNonEmpty = (value: string | Array<unknown>) => {
	if (import.meta.env.PROD) return;
	if (value.length === 0)
		console.trace({
			error: "expected value to be non-empty",
			value,
		});
};

export const assertEmpty = (value: string | Array<unknown>) => {
	if (import.meta.env.PROD) return;
	if (value.length > 0)
		console.trace({
			error: "expected value to be empty",
			value,
		});
};

export const assertNotArray = (value: unknown) => {
	if (import.meta.env.PROD) return;
	if (value instanceof Array)
		console.trace({
			error: "expected value to be not be an array",
			value,
		});
};

// type isn't correct. there is no way to express an non-empty string
// see https://github.com/microsoft/TypeScript/issues/4196#issuecomment-1191922067
export const assertNonEmptyString: (
	value: unknown
) => asserts value is string = (value) => {
	assertString(value);
	assertNonEmpty(value);
};

export const assertEmptyObject: (value: unknown) => asserts value is {} = (
	value
) => {
	assertObject(value);
	assertEmpty(Object.keys(value));
};

export const assertEmptyArray: (value: unknown) => asserts value is [] = (
	value
) => {
	assertInstanceOf(value, Array);
	assertEmpty(value);
};

// type isn't correct. don't know of a way to express a non-empty object
// see https://github.com/microsoft/TypeScript/issues/4196#issuecomment-1191922067
export const assertNonEmptyObject: (
	value: unknown
) => asserts value is object = (value) => {
	assertObject(value);
	assertNonEmpty(Object.keys(value));
};

type withKey<K extends string | number | symbol> = {
	[k in K]: unknown;
};

export const assertProperty: <K extends string | number | symbol>(
	value: any,
	expectedProperty: K
) => asserts value is withKey<K> = (value, expectedProperty) => {
	if (import.meta.env.PROD) return;
	assertNonEmptyString(expectedProperty);
	if (!(expectedProperty in value))
		console.trace({
			error: `expected ${expectedProperty} to be a property of value`,
			value,
			expectedProperty,
		});
};

export function assertInstanceOf<T>(
	value: unknown,
	expectedClass: new () => T
): asserts value is T {
	if (import.meta.env.PROD) return;
	assertObject(value);
	if (!(value instanceof expectedClass))
		console.trace({
			error: `expected value to be an instanceof ${expectedClass.name}`,
			value,
			expected: expectedClass.name,
			actual: value?.constructor?.name,
		});
}

export const assertElementTagName = (
	value: unknown,
	expectedTagName: string
) => {
	if (import.meta.env.PROD) return;
	assertNonEmptyString(expectedTagName);
	assertInstanceOf(value, Element);
	const actual = value.tagName;
	if (actual !== expectedTagName)
		console.trace({
			error: `expected value.tagName to be ${expectedTagName}`,
			value,
			expected: expectedTagName,
			actual,
		});
};
