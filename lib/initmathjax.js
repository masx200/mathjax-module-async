import { loadmathjax } from "./loadmathjax.js";

export async function initmathjax() {
    await loadmathjax();
    await MathJax.startup.promise;
}
