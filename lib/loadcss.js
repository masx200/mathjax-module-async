export async function loadcss(opts = {}) {
    const { href } = opts;
    if (!href) {
        throw new Error("href");
    }

    if (csscache.get(href)) {
        return csscache.get(href);
    }
    const loadpro = new Promise((res, rej) => {
        const link = document.createElement("link");
        Object.assign(link, opts, { rel: "stylesheet" });

        link.onload = () => {
            res();
        };
        link.onerror = (e) => {
            rej(e.error);
        };
        document.head.appendChild(link);
    });
    csscache.set(href, loadpro);
    return loadpro;
}
const csscache = new Map();
