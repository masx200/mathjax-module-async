import { createObjectURLjavascript } from "./createObjectURLjavascript";
import { guid } from "./guid";
import { loadscript } from "./loadscript";

export async function createfunction(...args: string[]): Promise<Function> {
    const funbody = args[args.length - 1];
    const funargs = args.slice(0, args.length - 1);
    const callbackname = "function-" + guid();
    const scriptbody = `window['${callbackname}']=function(${funargs
        // .map((n) => JSON.stringify(n))
        .join("\n,\n")}){\n${funbody}\n}`;
    const scripturl = createObjectURLjavascript(scriptbody);
    try {
        await loadscript(scripturl);

        return Reflect.get(window, callbackname) as Function;
    } catch (error) {
        throw error;
    } finally {
        URL.revokeObjectURL(scripturl);
        Reflect.set(window, callbackname, undefined);
    }
}
