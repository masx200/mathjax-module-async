import { cachepromise } from "./cachepromise";
export const loadscript = cachepromise(async function (
    src: string,
    opts: any = {}
) {
    if (!src) {
        throw new Error("src");
    }

    return new Promise<void>((res, rej) => {
        function clearsideeffect() {
            try {
                window.removeEventListener("error", errorlistner);
            } catch (error) {}

            script.remove();
            script.onload = script.onerror = null;
        }
        const errorlistner = (e: ErrorEvent) => {
            rej(e.error);
            clearsideeffect();
        };
        const script = document.createElement("script");
        Object.assign(script, opts, { async: true });
        script.src = src;
        script.onload = () => {
            res();
            clearsideeffect();
        };
        script.onerror = (e, s, l, c, r) => {
            rej("string" === typeof e ? e : r ? r : e);
            clearsideeffect();
        };
        window.addEventListener("error", errorlistner, { once: true });

        document.head.appendChild(script);
    });
});
