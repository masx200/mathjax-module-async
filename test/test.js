import {
    rendermathml,
    renderasciimath,
    renderlatex,
    initmathjax,
} from "../lib/index.js";
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
        renderasciimath(asciimathinput, container),
        renderlatex(latexinput, container),
        rendermathml(mathmlinput, container),
    ]);
}
start();
