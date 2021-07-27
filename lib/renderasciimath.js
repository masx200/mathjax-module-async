import { loadmathjax } from "./loadmathjax.js";
/**
 *
 * @param {string} input
 * @param {HTMLElement} container
 */
export async function renderasciimath(input, container) {
    // console.time('1')
    await loadmathjax();
    // console.timeEnd('1')
    // console.time('2')
    await MathJax.startup.promise;
    // console.timeEnd('2')
    const options = MathJax.getMetricsFor(container);
    // console.log(JSON.stringify( options));
    const node = await MathJax.asciimath2chtmlPromise(input, options);

    container.appendChild(node);
    //  MathJax.startup.document.clear();
    //MathJax.startup.document.updateDocument();
}
