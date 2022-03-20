const id_of_virtual_mathjax_init = "virtual:mathjax_init-js";
import vue from "@vitejs/plugin-vue";
import path from "path";
import ElementPlus from "unplugin-element-plus/vite";
import { defineConfig } from "vite";
// import VitePluginElementPlus from "vite-plugin-element-plus";
import { minifyHtml } from "vite-plugin-html";
//@ts-ignore
import virtual_plugin_for_mathjax_init from "./dist/virtual_plugin_for_mathjax_init.cjs";
export default defineConfig({
    esbuild: { drop: ["console", "debugger"] },
    build: {
        minify: "esbuild",
        target: "es2015",
        terserOptions: {
            compress: { drop_console: true, drop_debugger: true },
        },
    },
    plugins: [
        //@ts-ignore
        virtual_plugin_for_mathjax_init({ id: id_of_virtual_mathjax_init }),
        ElementPlus({
            // options
        }),
        minifyHtml({ removeAttributeQuotes: false }),
        vue(),
        // VitePluginElementPlus({}),
    ],
    root: path.resolve(__dirname, "test"),
});
