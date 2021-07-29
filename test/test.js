import { rendermath, initmathjax } from "../dist/index.js";
import { latexinput } from "./latexinput.js";
import { mathmlinput } from "./mathmlinput.js";
import { asciimathinput } from "./asciimathinput.js";
const container = Object.assign(
    document.body.appendChild(document.createElement("div")),
    { id: "container" }
);

async function start() {
    // console.time('1')
    const MathJax = await initmathjax();
    console.log(MathJax);
    // console.timeEnd('1')
    await Promise.all([
        rendermath(asciimathinput, "asciimath", container),
        rendermath(latexinput, "latex", container),
        rendermath(mathmlinput, "mathml", container),
    ]);
}
start();
