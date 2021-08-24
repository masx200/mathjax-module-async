import { initmathjax } from "./initmathjax.js";
import { mathrenderfuns } from "./mathrenderfuns";
export type MathjaxInputType = "latex" | "mathml" | "asciimath";
export async function rendermath(
    input: string,
    type: MathjaxInputType,
    container: HTMLElement,
    opts: Record<string, any> = {}
): Promise<void> {
    const renderfun = mathrenderfuns[type];

    if (!renderfun) {
        throw new Error("mathtype");
    }
    const MathJax = await initmathjax();
    const mathjax = MathJax;
    mathjax.startup.document.addStyleSheet();
    const options = Object.assign(MathJax.getMetricsFor(container), opts);

    const node = await Reflect.apply(Reflect.get(MathJax, renderfun), MathJax, [
        input,
        options,
    ]);

    container.appendChild(node);

    MathJax.startup.document.clear();
    MathJax.startup.document.updateDocument();
}
