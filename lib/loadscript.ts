import { cachepromise } from "./cachepromise";
export const loadscript = cachepromise(async function (
    src: string,
    opts: any = {}
) {
    if (!src) {
        throw new Error("src");
    }
    return new Promise<void>((res, rej) => {
        const script = document.createElement("script");
        Object.assign(script, opts, { async: true });
        script.src = src;
        script.onload = () => {
            res();
        };
        script.onerror = (e, s, l, c, r) => {
            rej("string" === typeof e ? e : r ? r : e);
        };
        document.head.appendChild(script);
    });
});
