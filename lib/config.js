import { version } from "./version.js";
const config = {
    startup: { typeset: false },
    loader: {
        load: [
            "input/asciimath",
            "output/chtml",
            "input/tex-full",
            "input/mml",
        ],
        paths: {
            mathjax: `https://cdn.jsdelivr.net/npm/mathjax@${version}/es5`,
        },
    },
};
export { config };
