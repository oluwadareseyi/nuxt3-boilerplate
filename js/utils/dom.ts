export const customEasing = `cubic-bezier(0.56, 0, 0.3, 1)`;

type ObjectForMap = any;
// type ObjectForMap = HTMLElement | Element | NodeList | string | null | [];

export const mapElements = (element: HTMLElement, object: { [key: string]: string | HTMLElement | NodeList }) => {
    const elements: {
        [key: string]: ObjectForMap;
    } = {};

    Object.keys(object).forEach((key) => {
        const entry = object[key];

        if (entry instanceof HTMLElement || entry instanceof NodeList || Array.isArray(entry)) {
            elements[key] = entry;
        } else {
            elements[key] = element.querySelectorAll(entry);

            if (elements[key].length === 0) {
                elements[key] = null;
            } else if (elements[key].length === 1) {
                elements[key] = element.querySelector(entry);
            }
        }
    });

    return elements;
};

const map = (array: [], iteratee: Function) => {
    let index = -1;
    const length = array == null ? 0 : array.length;
    const result = new Array(length);

    while (++index < length) {
        result[index] = iteratee(array[index], index, array);
    }
    return result;
};

export const getOffset = (element: HTMLElement, scroll = 0) => {
    const box = element.getBoundingClientRect();

    return {
        bottom: box.bottom,
        height: box.height,
        left: box.left,
        right: box.right,
        top: box.top + scroll,
        width: box.width,
        y: box.y,
    };
};

export function mapEach(element: HTMLElement | [], callback: Function) {
    if (element instanceof window.HTMLElement) {
        return [callback(element)];
    }

    return map(element, callback);
}

// Linear interpolation
export const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

export const hideScroll = (scrollTop = null) => {
    const body = document.body;
    body.classList.add("no-scroll");

    // if (scrollTop) {
    //   body.style = `--top: -${scrollTop}px`;
    // }
};

export const showScroll = (scrollTop = null) => {
    const body = document.body;
    body.classList.remove("no-scroll");
    // body.style = `--top: 0`;

    // scrollTop && window.scrollTo(0, scrollTop);
};
