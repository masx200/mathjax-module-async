import { preloaded } from "./preloaded";

export const preloadscript = URL.createObjectURL(
    new Blob([getmathjaxafter()], { type: "application/javascript" })
);
function getmathjaxafter() {
    return `
MathJax.loader.preLoad(${preloaded.map((a) => JSON.stringify(a)).join(",")})
    `;
}
// console.log(getmathjaxafter());
