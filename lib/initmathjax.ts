import { loadmathjax } from "./loadmathjax.js";
import { mathjaxbase } from "./mathjaxurl.js";
let MathJaxcache: Record<string, any> | undefined;
export async function initmathjax({ baseurl = mathjaxbase } = {}): Promise<
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
