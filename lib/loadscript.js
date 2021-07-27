const scriptcache = new Map();
export async function loadscript(opts = {}) {
    // console.log(opts,scriptcache);
    const { src } = opts;
    if (!src) {
        throw new Error("src");
    }
    if (scriptcache.get(src)) {
        return scriptcache.get(src);
    }
    const loadpro = new Promise((res, rej) => {
        const script = document.createElement("script");
        Object.assign(script, opts, { async: true });

        script.onload = () => {
            res();
        };
        script.onerror = (e) => {
            rej(e.error);
        };
        document.head.appendChild(script);
    });
    scriptcache.set(src, loadpro);
    return loadpro;
}
