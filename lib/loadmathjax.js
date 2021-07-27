let loadpromise;
import { config } from "./config.js";
import { loadscript } from "./loadscript.js";
import { mathjaxurl } from "./mathjaxurl.js";
function setmathjaxconfig() {
  if (window.MathJax) {
    return;
  }
  window.MathJax = config;
}
const mathjaxid = "MathJax-script";
export async function loadmathjax() {
  // console.log("loadmathjax",loadpromise);
  if (loadpromise) {
    return loadpromise;
  } else {
    setmathjaxconfig();
    loadpromise = loadscript({ id: mathjaxid, src: mathjaxurl });

    return loadpromise;
  }
}
