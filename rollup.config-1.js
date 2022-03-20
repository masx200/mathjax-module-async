import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";
import rollupExternalModules from "rollup-external-modules";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-ts";
// import virtual_plugin_for_mathjax_init from "./dist/virtual_plugin_for_mathjax_init.js";
const dropcompressplugin = terser({
    ecma: 2015,
    //    sourcemap: true,
    toplevel: true,
    output: { beautify: true, ecma: 5, comments: !1, ascii_only: !0 },
    compress: {
        toplevel: true,
        unused: true,
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log"],
    },
    mangle: { properties: false },
});
const plugins = [
    typescript(),
    resolve(),
    commonjs(),
    json(),
    babel({
        sourceMaps: true,
        plugins: [],
        babelHelpers: "bundled",
        presets: [["@babel/preset-env", { useBuiltIns: "entry", corejs: "2" }]],
        extensions: [".js", ".ts"],
    }),

    dropcompressplugin,
];

export default defineConfig([
    {
        external: rollupExternalModules,
        input: "./lib/virtual_plugin_for_mathjax_init.ts",
        output: [
            {
                banner: [
                    "import regeneratorRuntime from 'regenerator-runtime';",
                    `import fetch from "node-fetch";`,
                ].join("\n"),
                file: "./dist/virtual_plugin_for_mathjax_init.mjs",
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            ...plugins,
            // virtual_plugin_for_mathjax_init({ id: "virtual:mathjax_init.js" }),
        ],
    },
    {
        external: rollupExternalModules,
        input: "./dist/virtual_plugin_for_mathjax_init.mjs",
        output: [
            {
                exports: "auto",
                file: "./dist/virtual_plugin_for_mathjax_init.cjs",
                format: "cjs",
                sourcemap: true,
            },
        ],
        plugins,
    },
]);
