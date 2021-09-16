import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import VitePluginElementPlus from "vite-plugin-element-plus";
import { minifyHtml } from "vite-plugin-html";

export default defineConfig({
    build: {
        target: "es2015",
        terserOptions: {
            compress: { drop_console: true, drop_debugger: true },
        },
    },
    plugins: [
        minifyHtml({ removeAttributeQuotes: false }),
        vue(),
        VitePluginElementPlus({}),
    ],
    root: path.resolve(__dirname, "test"),
});
