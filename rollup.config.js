import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";
import rollupExternalModules from "rollup-external-modules";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-ts";
const dropcompressplugin = terser({
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
        input: "./lib/index.ts",
        output: [
            {
                banner: "import regeneratorRuntime from 'regenerator-runtime';",
                file: "./dist/index.js",
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins,
    },
    {
        external: rollupExternalModules,
        input: "./dist/index.js",
        output: [
            {
                file: "./dist/index.cjs",
                format: "cjs",
                sourcemap: true,
            },
        ],
        plugins,
    },
]);
