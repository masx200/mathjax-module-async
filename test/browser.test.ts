import { test } from "vitest";
import path from "path";
//@ts-ignore
import createBrowserless from "browserless";
import { main } from "@masx200/serve-cli";

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
        console.log(html);
        server.close();

        await browserless.close();
    },
    10 * 1000
);
