import { defaultoptions } from "./defaultoptions";
// import { initmathjax } from "./initmathjax.js";
import { mathrenderfuns } from "./mathrenderfuns";
export type MathjaxInputType = "latex" | "mathml" | "asciimath";
export async function rendermath(
    MathJax: Record<string, any>,
    input: string,
    type: MathjaxInputType,
    opts: Partial<Record<string, any> & typeof defaultoptions> = {}
): Promise<string> {
    const container: HTMLElement = document.createElement("div");

    const renderfun = mathrenderfuns[type];

    if (!renderfun) {
        throw new Error("mathtype" + ` "latex" | "mathml" | "asciimath"`);
    }
    // const MathJax = await initmathjax();
    const mathjax = MathJax;
    mathjax.startup.document.addStyleSheet();
    const options = Object.assign({}, defaultoptions, opts);

    const node: HTMLElement = await Reflect.apply(
        Reflect.get(MathJax, renderfun),
        MathJax,
        [input.trim(), options]
    );

    container.appendChild(node);

    MathJax.startup.document.clear();
    MathJax.startup.document.updateDocument();

    return container.innerHTML;
}
