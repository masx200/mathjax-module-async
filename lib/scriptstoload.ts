import { preloadscript } from "./preloadscript";
import { configscript } from "./configscript";
import { mathjaxbase } from "./mathjaxurl";

// export const mathjaxurl = mathjaxbase + "/" + `tex-mml-chtml.min.js`;
//2281.69kb
const mathjaxmodules = [
    "core",
    "input/asciimath",
    "output/chtml",
    "input/tex-full",
    "input/mml",
    "output/chtml/fonts/tex",
];
const mathjaxurls = mathjaxmodules.map(getrealmoduleurl);
const urls_of_mathjax: {
    type: "url";
    content: string;
}[] = mathjaxurls.map((a) => ({ type: "url", content: a }));
export const scriptstoload: {
    type: "string" | "url";
    content: string;
}[] = [
    configscript,

    { type: "url", content: getrealmoduleurl("startup") },
    preloadscript,
    ...urls_of_mathjax,
];

function getrealmoduleurl(value: string): string {
    return mathjaxbase + "/" + value + ".js";
}
// console.log(scriptstoload);
