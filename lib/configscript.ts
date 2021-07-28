import { config } from "./config";

export const configscript = URL.createObjectURL(
    new Blob([getmathjaxafter()], { type: "application/javascript" })
);
function getmathjaxafter() {
    return `
window.MathJax=${JSON.stringify(config)}
    `;
}
