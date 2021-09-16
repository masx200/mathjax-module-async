import { defaultoptions } from "./defaultoptions";
import { initmathjax } from "./initmathjax.js";
import { mathrenderfuns } from "./mathrenderfuns";
export type MathjaxInputType = "latex" | "mathml" | "asciimath";
export async function rendermath(
    input: string,
    type: MathjaxInputType,
    container: HTMLElement = document.createElement("div"),
    opts:Partial< Record<string, any> &typeof defaultoptions> = {}
): Promise<string> {
    const renderfun = mathrenderfuns[type];

    if (!renderfun) {
        throw new Error("mathtype" + ` "latex" | "mathml" | "asciimath"`);
    }
    const MathJax = await initmathjax();
    const mathjax = MathJax;
    mathjax.startup.document.addStyleSheet();
    const options = Object.assign(
        MathJax.getMetricsFor(container),
        defaultoptions,
        opts
    );

    const node = await Reflect.apply(Reflect.get(MathJax, renderfun), MathJax, [
        input.trim(),
        options,
    ]);

    container.appendChild(node);

    MathJax.startup.document.clear();
    MathJax.startup.document.updateDocument();

    return container.innerHTML;
}
