import { createApp, h } from "vue";
import { initmathjax } from "../dist/index.js";
import index from "./index.vue";

const app = createApp({
    render: () => {
        return h(index);
    },
});
const rootele =
    document.getElementById("root") ||
    Object.assign(document.body.appendChild(document.createElement("div")), {
        id: "root",
    });
async function start() {
    const MathJax = await initmathjax();
    console.log(MathJax);
    app.mount(rootele);
}

start();
