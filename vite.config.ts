import vue from "@vitejs/plugin-vue";
import path from "path";
// import ElementPlus from "unplugin-element-plus/vite";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
// import VitePluginElementPlus from "vite-plugin-element-plus";
import { minifyHtml } from "vite-plugin-html";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
//@ts-ignore
import virtual_plugin_for_mathjax_init from "./dist/virtual_plugin_for_mathjax_init.mjs";
const id_of_virtual_mathjax_init = "virtual:mathjax_init-js";
import { VitePWA } from "vite-plugin-pwa";
export default defineConfig(({ mode, command }) => {
    console.log(mode, command);
    // //@ts-ignore
    // const virtual_plugin_for_mathjax_init = ( //@ts-ignore
    //     await import("./dist/virtual_plugin_for_mathjax_init.mjs")
    // ).default;
    return {
        esbuild: {
            drop: "production" === mode ? ["console", "debugger"] : undefined,
        },
        build: {
            minify: "terser",
            target: "es2015",
            terserOptions: {
                output: { comments: false },
                compress:
                    "production" === mode
                        ? { drop_console: true, drop_debugger: true }
                        : undefined,
            },
        },
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
            VitePWA({
                registerType: "autoUpdate",
                workbox: { globPatterns: ["*/*"] },
            }),
            checker({
                vueTsc: true,
                typescript: { root: path.resolve(__dirname) },
            }),
            //@ts-ignore
            virtual_plugin_for_mathjax_init({ id: id_of_virtual_mathjax_init }),
            // checker({ vueTsc: true }),

            // ElementPlus({
            //     // options
            // }),
            minifyHtml({ removeAttributeQuotes: false }),
            vue(),
            // VitePluginElementPlus({}),
        ],
        root: path.resolve(__dirname, "test"),
    };
});
