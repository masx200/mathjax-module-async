import importScripts from "./importscripts";
// import "regenerator-runtime/runtime";
if ("undefined" === typeof regeneratorRuntime) {
    importScripts(
        "https://cdn.jsdelivr.net/npm/regenerator-runtime@0.13.9/runtime.min.js"
    );
}
