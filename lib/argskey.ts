import { accidentallyvariables } from "./accidentallyvariables";
import { equalglobals } from "./equalglobals";

export const argskey = [
    Object.keys(accidentallyvariables),
    equalglobals,
    "MathJax",
].flat();
