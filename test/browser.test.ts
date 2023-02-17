import { test } from "vitest";
import path from "path";
//@ts-ignore
import createBrowserless from "browserless";
import { main } from "@masx200/serve-cli";
import { parseHTML } from "linkedom";
import assert from "assert";
import { latexoutput } from "./latex-output";
import { mathmloutput } from "./mathml-output";
import { asciimathoutput } from "./asciimath-output";
function JSDOM(html: any) {
    return parseHTML(html);
}
test(
    "browser",
    async () => {
        const server = await main({
            port: 4000,
            path: path.resolve(__dirname, "dist"),
        });
        const browserless = createBrowserless({});
        const ctx = await browserless.createContext();
        const html = await ctx.html("http://localhost:4000");
        // console.log(html);
        server.close();

        await browserless.close();
        const { document } = JSDOM(html);
        // console.log(document);

        Array.from(document.querySelectorAll("#latex"))
            .map((a) => a.innerHTML)
            .forEach((t) => assert.equal(t, latexoutput));
        Array.from(document.querySelectorAll("#asciimath"))
            .map((a) => a.innerHTML)
            .forEach((t) => assert.equal(t, asciimathoutput));
        Array.from(document.querySelectorAll("#mathml"))
            .map((a) => a.innerHTML)
            .forEach((t) => assert.equal(t, mathmloutput));
    },
    15 * 1000
);
