import { createObjectURLjavascript } from "./createObjectURLjavascript";
import { preloaded } from "./preloaded";

export const preloadscript = createObjectURLjavascript(getmathjaxafter());
function getmathjaxafter() {
    return `
MathJax.loader.preLoad(${preloaded.map((a) => JSON.stringify(a)).join(",")})
    `;
}
// console.log(getmathjaxafter());
