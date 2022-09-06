function h(type: any, props: any, ...children: any[]) {
    return { type, props, children };
}
import htm from "htm";

const html = htm.bind(h);
export { html };
