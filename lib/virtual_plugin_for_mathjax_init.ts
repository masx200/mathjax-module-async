// import fetch from "node-fetch";
import type { Plugin } from "rollup";
import { argskey } from "./argskey";
import { get_function_mathjax_module_init } from "./get_function_mathjax_module_init";
import { get_script_content } from "./get_script_content";

/**
 *virtual_plugin_for_mathjax_init
 * @param {{id:string}} param0
 */
export default function virtual_plugin_for_mathjax_init({
    id,
}: {
    id: string;
}): Plugin {
    // if (typeof fetch !== "function") {
    //     Reflect.set(globalThis, "fetch", fetch);
    // }
    return {
        name: "virtual_plugin_for_mathjax_init", // this name will show up in warnings and errors
        resolveId(source) {
            if (source === id) {
                return source; // this signals that rollup should not ask other plugins or check the file system to find this id
            }
            return null; // other ids should be handled as usually
        },
        async load(id) {
            if (id === id) {
                const scriptscontent = await get_script_content();
                const scriptbody = scriptscontent.join("\n;\n");
                const result = await get_function_mathjax_module_init(
                    ...argskey,
                    scriptbody
                );
                return result;
                // return 'export default "This is virtual!"'; // the source code for "virtual-module"
            }
            return null; // other ids should be handled as usually
        },
    };
}
