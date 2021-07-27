let loadpromise;
import { config } from "./config.js";
import { loadcss } from "./loadcss.js";
import { loadscript } from "./loadscript.js";
import { mathjaxcss } from "./mathjaxcss.js";
import { mathjaxurl } from "./mathjaxurl.js";
function setmathjaxconfig() {
    if (window.MathJax) {
        return;
    }
    window.MathJax = config;
}

export async function loadmathjax() {
    // console.log("loadmathjax",loadpromise);
    if (loadpromise) {
        return loadpromise;
    } else {
        loadpromise = loadscriptandcss();

        return loadpromise;
    }
}
async function loadscriptandcss() {
    setmathjaxconfig();
    await loadcss({ href: mathjaxcss });
    return loadscript({ src: mathjaxurl });
}
