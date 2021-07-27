import { loadmathjax } from "./loadmathjax.js";
/**
 *
 * @param {string} input
 * @param {HTMLElement} container
 */
export async function rendermathml(input, container) {
    await loadmathjax();
    await MathJax.startup.promise;
    const options = MathJax.getMetricsFor(container);
    // console.log(JSON.stringify( options));
    const node = await MathJax.mathml2chtmlPromise(input, options);

    container.appendChild(node);
    //MathJax.startup.document.clear();
    //MathJax.startup.document.updateDocument();
}
