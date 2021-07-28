import { loadmathjax } from "./loadmathjax.js";

export async function initmathjax() {
    const MathJax = await loadmathjax();
    await MathJax.startup.promise;
    return MathJax;
}
