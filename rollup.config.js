import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";
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

export default [
    {
        input: "./lib/index.ts",
        output: [
            {
                file: "./dist/index.cjs",
                format: "cjs",
                sourcemap: true,
            },
            {
                file: "./dist/index.js",
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            typescript(),
            resolve(),
            commonjs(),
            json(),
            babel({
                sourceMaps: true,
                plugins: [],
                babelHelpers: "bundled",
                presets: [
                    [
                        "@babel/preset-env",
                        { useBuiltIns: "entry", corejs: "2" },
                    ],
                ],
                extensions: [".js", ".ts"],
            }),

            dropcompressplugin,
        ],
    },
];
