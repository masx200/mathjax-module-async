import { mathjaxbase } from "./mathjaxurl.js";
const config = {
    startup: { typeset: false },
    loader: {
        load: [
            // "input/asciimath",
            // "output/chtml",
            // "input/tex-full",
            // "input/mml",
        ],
        paths: {
            mathjax: mathjaxbase,
        },
    },
};
export { config };
