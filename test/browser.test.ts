import { test } from "vitest";
import path from "path";
//@ts-ignore
import browserlessFactory from "browserless";
import { main } from "@masx200/serve-cli";
import exitHook from "exit-hook";
test("browser", async () => {
    const server = main({ port: 4000, path: path.resolve(__dirname, "dist") });
    const { createContext } = browserlessFactory({});

    // Now every time you call `createContext`
    // it will be create a browser context.
    const browserless = await createContext();

    const html = await browserless.html("http://localhost:4000");
    console.log(html);
    server.close();

    exitHook(browserlessFactory.close());
});
