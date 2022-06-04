import { get_config } from "./config";

// export const configscript = URL.createObjectURL(
//     new Blob([getmathjaxafter()], { type: "application/javascript" })
// );
export const configscript: { type: "string"; content: string } = {
    type: "string",
    content: getmathjaxafter(),
};
function getmathjaxafter() {
    return `
window.MathJax=${get_config.toString()}(baseurl);
    `;
}
