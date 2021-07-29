import { loadmathjax } from "./loadmathjax.js";
let MathJaxcache: Record<string, any> | undefined;
export async function initmathjax() {
    if (MathJaxcache) {
        return MathJaxcache;
    }
    const MathJax = await loadmathjax();
    await MathJax.startup.promise;
    MathJaxcache = MathJax;
    return MathJax;
}
