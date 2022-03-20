import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// import VitePluginElementPlus from "vite-plugin-element-plus";
import { minifyHtml } from "vite-plugin-html";
import ElementPlus from "unplugin-element-plus/vite";
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
        ElementPlus({
            // options
        }),
        minifyHtml({ removeAttributeQuotes: false }),
        vue(),
        // VitePluginElementPlus({}),
    ],
    root: path.resolve(__dirname, "test"),
});
