 const container = Object.assign(
    document.body.appendChild(document.createElement("div")),
    { id: "container" }
);
import { rendermathml, renderasciimath, renderlatex } from "../lib/index.js";
import { latexinput } from "./latexinput.js";
import { mathmlinput } from "./mathmlinput.js";
import { asciimathinput } from "./asciimathinput.js";
async function start() {
    await Promise.all([
        renderasciimath(asciimathinput, container),
        renderlatex(latexinput, container),
        rendermathml(mathmlinput, container),
    ]);
}
start();
