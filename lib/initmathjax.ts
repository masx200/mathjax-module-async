import { loadmathjax } from "./loadmathjax.js";
import { mathjaxurl } from "./mathjaxurl.js";
let MathJaxcache: Record<string, any> | undefined;
export async function initmathjax({ baseurl = mathjaxurl } = {}): Promise<
    Record<string, any>
> {
    if (MathJaxcache) {
        return MathJaxcache;
    }
    const MathJax = await loadmathjax(baseurl);

    MathJaxcache = MathJax;
    await MathJax.startup.promise;
    return MathJax;
}
