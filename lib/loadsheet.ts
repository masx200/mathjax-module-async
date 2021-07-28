import { cachepromise } from "./cachepromise";
export const loadsheet = cachepromise(async function (
    href: string,
    opts: any = {}
) {
    if (!href) {
        throw new Error("href");
    }
    return new Promise<void>((res, rej) => {
        const link = document.createElement("link");
        Object.assign(link, opts, { rel: "stylesheet" });
        link.href = href;
        link.onload = () => {
            res();
        };
        link.onerror = (e, s, l, c, r) => {
            rej("string" === typeof e ? e : r ? r : e);
        };
        document.head.appendChild(link);
    });
});
