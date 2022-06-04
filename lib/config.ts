// import { mathjaxbase } from "./mathjaxurl.js";
export function get_config(mathjaxbase: string) {
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
    return config;
}
