import { assertInstanceOf } from "./assert";

export type Component<E extends Element> = {
	element: E;
	dispose(): void;
	appendTo(element: Element): void;
};

type ElementOf<C extends Component<Element>> = C extends Component<infer E>
	? E
	: never;

export const Component = <C extends Component<Element>>(
	instance: Partial<C> & {
		element: ElementOf<C>;
	}
): C => {
	Object.assign(instance, {
		appendTo(element: Element) {
			assertInstanceOf(instance.element, Element);
			element.append(instance.element);
		},
		dispose() {
			if (instance.dispose) {
				instance.dispose();
			} else {
				assertInstanceOf(instance.element, Element);
				instance.element.remove();
			}
		},
	});

	return instance as unknown as C;
};

type Transform = {
	clear(): Transform;
	translate(x: number, y: number): Transform;
	scale(amount: number): Transform;
	scale(x: number, y: number): Transform;
	rotate(angle: number): Transform;
	rotate(angle: number, x: number, y: number): Transform;
};

const Transform = (
	root: SVGSVGElement,
	element: SVGGraphicsElement
): Transform => {
	const self = {
		clear(): Transform {
			element.transform.baseVal.clear();
			return self;
		},
		translate(x: number, y: number): Transform {
			const transform = root.createSVGTransform();
			transform.setTranslate(x, y);
			element.transform.baseVal.appendItem(transform);
			return self;
		},
		scale(x: number, y: number = x): Transform {
			const transform = root.createSVGTransform();
			transform.setScale(x, y);
			element.transform.baseVal.appendItem(transform);
			return self;
		},
		rotate(angle: number, x: number = 0, y: number = 0): Transform {
			console.log(angle);
			const transform = root.createSVGTransform();
			transform.setRotate(angle, x, y);
			element.transform.baseVal.appendItem(transform);
			return self;
		},
	};
	return self;
};

export type SvgComponent<E extends SVGElement> = Component<E> & {
	appendDefTo(defs: SVGDefsElement): void;
	transformWith(root: SVGSVGElement): Transform;
};

type SvgElementOf<C extends SvgComponent<SVGElement>> = C extends SvgComponent<
	infer E
>
	? E
	: never;
export const SvgComponent = <C extends SvgComponent<any>>(
	instance: Partial<C> & {
		element: SvgElementOf<C>;
	}
): C => {
	Component(instance as Component<Element>);

	Object.assign(instance, {
		appendDefTo(defs: SVGDefsElement) {
			assertInstanceOf(instance.element, SVGElement);
			defs.append(instance.element);
		},
		transformWith(root: SVGSVGElement) {
			assertInstanceOf(instance.element, SVGGraphicsElement);
			return Transform(root, instance.element);
		},
	});

	return instance as unknown as C;
};

export const html = (
	texts: TemplateStringsArray,
	...expressions: any[]
): HTMLElement => {
	const htmlText = [];
	const placeholders: Record<string, Element> = {};
	for (let i = 0; i < texts.length - 1; i++) {
		htmlText.push(texts[i]);
		const expression = expressions[i];
		if (expression.element instanceof Element) {
			const placeholderId = `__placeholder__${i}`;
			placeholders[placeholderId] = expression.element;
			htmlText.push(
				`<placeholder-element id="${placeholderId}"></placeholder-element>`
			);
		} else if (expression instanceof Element) {
			const placeholderId = `__placeholder__${i}`;
			placeholders[placeholderId] = expression;
			htmlText.push(
				`<placeholder-element id="${placeholderId}"></placeholder-element>`
			);
		} else if (expression instanceof Array) {
			for (const [index, element] of expression.entries()) {
				const placeholderId = `__placeholder__${i}_${index}`;
				if (element.element instanceof Element) {
					placeholders[placeholderId] = element.element;
				} else if (element instanceof Element) {
					placeholders[placeholderId] = element;
				} else {
					throw new Error(`expected element but got ${element}`);
				}
				htmlText.push(
					`<placeholder-element id="${placeholderId}"></placeholder-element>`
				);
			}
		} else {
			htmlText.push(expression);
		}
	}
	htmlText.push(texts.at(-1));

	const template = document.createElement("template");
	template.insertAdjacentHTML("beforeend", htmlText.join(""));
	const first = template.firstElementChild;
	assertInstanceOf(first, HTMLElement);
	for (const [placeholderId, element] of Object.entries(placeholders)) {
		const placeholder: HTMLElement | null = first.querySelector(
			`placeholder-element#${placeholderId}`
		);
		assertInstanceOf(placeholder, HTMLElement);
		const parent: ParentNode | null = placeholder.parentNode;
		assertInstanceOf(parent, HTMLElement);
		parent.replaceChild(element, placeholder);
	}
	return first;
};

export const svg = <E = SVGElement>(
	texts: TemplateStringsArray,
	...expressions: any[]
): E => {
	const svgText = [];
	const placeholders: Record<string, Element> = {};
	for (let i = 0; i < texts.length - 1; i++) {
		svgText.push(texts[i]);
		const expression = expressions[i];
		if (expression.element instanceof Element) {
			const placeholderId = `__placeholder__${i}`;
			placeholders[placeholderId] = expression.element;
			svgText.push(`<g id="${placeholderId}"></g>`);
		} else if (expression instanceof Element) {
			const placeholderId = `__placeholder__${i}`;
			placeholders[placeholderId] = expression;
			svgText.push(`<g id="${placeholderId}"></g>`);
		} else if (expression instanceof Array) {
			for (const [index, element] of expression.entries()) {
				const placeholderId = `__placeholder__${i}_${index}`;
				if (element.element instanceof Element) {
					placeholders[placeholderId] = element.element;
				} else if (element instanceof Element) {
					placeholders[placeholderId] = element;
				} else {
					throw new Error(`expected element but got ${element}`);
				}
				svgText.push(`<g id="${placeholderId}"></g>`);
			}
		} else {
			svgText.push(expression);
		}
	}
	svgText.push(texts.at(-1));

	const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
	g.insertAdjacentHTML("beforeend", svgText.join(""));
	const first = g.firstElementChild;
	assertInstanceOf(first, SVGElement);
	for (const [placeholderId, element] of Object.entries(placeholders)) {
		const placeholder: SVGGElement | null = first.querySelector(
			`g#${placeholderId}`
		);
		assertInstanceOf(placeholder, SVGGElement);
		const parent: ParentNode | null = placeholder.parentNode;
		assertInstanceOf(parent, SVGElement);
		parent.replaceChild(element, placeholder);
	}
	return first as unknown as E;
};
