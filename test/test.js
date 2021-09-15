import { rendermath, initmathjax } from "../dist/index.js";
import { latexinput } from "./latexinput.js";
import { mathmlinput } from "./mathmlinput.js";
import { asciimathinput } from "./asciimathinput.js";

function createcontainers() {
    const container =
        document.getElementById("container") ||
        Object.assign(
            document.body.appendChild(document.createElement("div")),
            {
                id: "container",
            }
        );
    Object.assign(container.appendChild(document.createElement("h1")), {
        textContent: "asciimath",
    });
    container.appendChild(document.createElement("hr"));
    const container1 = container.appendChild(document.createElement("div"));
    container.appendChild(document.createElement("hr"));
    Object.assign(container.appendChild(document.createElement("h1")), {
        textContent: "latex",
    });
    container.appendChild(document.createElement("hr"));
    const container2 = container.appendChild(document.createElement("div"));
    container.appendChild(document.createElement("hr"));
    Object.assign(container.appendChild(document.createElement("h1")), {
        textContent: "mathml",
    });
    container.appendChild(document.createElement("hr"));
    const container3 = container.appendChild(document.createElement("div"));
    return { container1, container2, container3 };
}

async function start() {
const { container1, container2, container3 } = createcontainers();

    // console.time('1')
    const MathJax = await initmathjax();
    console.log(MathJax);
    // console.timeEnd('1')
const { container1, container2, container3 } = createcontainers();

    await Promise.all([
        rendermath(asciimathinput, "asciimath", container1),
        rendermath(latexinput, "latex", container2),
        rendermath(mathmlinput, "mathml", container3),
    ]);
}
start();
