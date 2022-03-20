const id_of_virtual_mathjax_init = "virtual:mathjax_init-js";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";
import rollupExternalModules from "rollup-external-modules";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-ts";
import virtual_plugin_for_mathjax_init from "./dist/virtual_plugin_for_mathjax_init.mjs";
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
    typescript({
        exclude: [id_of_virtual_mathjax_init],
        transpiler: "typescript",
        transpileOnly: true,
    }),
    resolve(),
    commonjs(),
    json(),
    babel({
        exclude: [id_of_virtual_mathjax_init],
        sourceMaps: true,
        plugins: [],
        babelHelpers: "bundled",
        presets: [["@babel/preset-env", { useBuiltIns: "entry", corejs: "2" }]],
        extensions: [".js", ".ts"],
    }),

    dropcompressplugin,
];
function external(source, importer, isResolved) {
    if (id_of_virtual_mathjax_init === source) {
        return false;
    }
    return rollupExternalModules(source);
}
export default defineConfig([
    {
        external: external,
        input: "./lib/index.ts",
        output: [
            {
                banner: "import regeneratorRuntime from 'regenerator-runtime';",
                file: "./dist/index.js",
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            ...plugins,
            virtual_plugin_for_mathjax_init({ id: id_of_virtual_mathjax_init }),
        ],
    },
    {
        external: external,
        input: "./dist/index.js",
        output: [
            {
                exports: "auto",
                file: "./dist/index.cjs",
                format: "cjs",
                sourcemap: true,
            },
        ],
        plugins,
    },
]);
