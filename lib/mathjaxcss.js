import { getmathjaxcss } from "./getmathjaxcss.js";

export const mathjaxcss = URL.createObjectURL(
    new Blob([getmathjaxcss()], { type: "text/css" })
);
// console.log(mathjaxcss)
