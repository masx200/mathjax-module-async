import { initmathjax } from "./initmathjax.js";
/**
 *
 * @param {string} input
 * @param {HTMLElement} container
 */
export async function renderasciimath(input, container) {
    await initmathjax();
    const options = MathJax.getMetricsFor(container);
    // console.log(JSON.stringify( options));
    const node = await MathJax.asciimath2chtmlPromise(input, options);

    container.appendChild(node);
    //  MathJax.startup.document.clear();
    //MathJax.startup.document.updateDocument();
}
