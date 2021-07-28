// import { config } from "./config.js";
//import { loadsheet } from "./loadsheet.js";
//import { mathjaxcss } from "./mathjaxcss.js";
// function setmathjaxconfig() {
//     if (window.MathJax) {
//         return;
//     }
//     window.MathJax = config;
// }
import { cachepromise } from "./cachepromise";
import { loadmodules } from "./loadmodules";
export const loadmathjax = cachepromise(async function () {
    //  await loadsheet(mathjaxcss);
    return loadmodules();
});
