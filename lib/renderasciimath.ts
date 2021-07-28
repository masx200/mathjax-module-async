import { initmathjax } from "./initmathjax.js";
/**
 *
 * @param {string} input
 * @param {HTMLElement} container
 * @returns {Promise<void>}
 */
export async function renderasciimath(
    input: string,
    container: HTMLElement
): Promise<void> {
    const MathJax = await initmathjax();
    const options = MathJax.getMetricsFor(container);
    // console.log(JSON.stringify( options));
    const node = await MathJax.asciimath2chtmlPromise(input, options);

    container.appendChild(node);
    MathJax.startup.document.clear();
    MathJax.startup.document.updateDocument();
}
