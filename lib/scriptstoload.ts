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
export const scriptstoload = [
    configscript,

    getrealmoduleurl("startup"),
    preloadscript,
    ...mathjaxurls,
];

function getrealmoduleurl(value: string): string {
    return mathjaxbase + "/" + value + ".min.js";
}
// console.log(scriptstoload);
