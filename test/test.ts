//@ts-ignore
import { rendermath, initmathjax } from "../lib/index";
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
    const MathJax = await initmathjax();
    console.log(MathJax);
    // console.timeEnd('1')
    const { container1, container2, container3 } = createcontainers();
    container1.id = "asciimath";
    container2.id = "latex";
    container3.id = "mathml";
    await Promise.all([
        rendermath(MathJax, asciimathinput, "asciimath").then(
            (html) => (container1.innerHTML = html)
        ),
        rendermath(MathJax, latexinput, "latex").then(
            (html) => (container2.innerHTML = html)
        ),
        rendermath(MathJax, mathmlinput, "mathml").then(
            (html) => (container3.innerHTML = html)
        ),
    ]);
}
start();
