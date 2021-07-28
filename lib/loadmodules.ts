import { fetchsource } from "./fetchsource";
import { scriptstoload } from "./scriptstoload";

export async function loadmodules() {
    const scriptscontent = await Promise.all(
        scriptstoload.map((u) => fetchsource(u))
    );
    // console.log(scriptscontent);

    const scriptbody = scriptscontent.join("\n;\n");
    // console.log(scriptbody);

    let MathJax: any;

    const global = new Proxy(
        {
            get MathJax() {
                return MathJax;
            },
            set MathJax(value) {
                MathJax = value;
            },
        },
        {
            get(t, p, r) {
                const value =
                    Reflect.get(t, p, r) || Reflect.get(window, p, window);
                if (typeof value === "function") {
                    return value.bind(window);
                } else {
                    return value;
                }
            },

            has(t, p) {
                return Reflect.has(t, p) || Reflect.has(window, p);
            },
            ownKeys(t) {
                return Reflect.ownKeys(t) || Reflect.ownKeys(window);
            },
        }
    );

    const proxymathjax = new Proxy(
        {},
        {
            get(t, p, r) {
                return Reflect.get(MathJax, p, MathJax);
            },
            set(t, p, v, r) {
                return Reflect.set(MathJax, p, v, MathJax);
            },
            has(t, p) {
                return Reflect.has(MathJax, p);
            },
            ownKeys(t) {
                return Reflect.ownKeys(MathJax);
            },
            defineProperty(t, p, a) {
                return Reflect.defineProperty(MathJax, p, a);
            },

            deleteProperty(t, p) {
                return Reflect.deleteProperty(MathJax, p);
            },
        }
    );
    const likewindow = Object.fromEntries(
        Reflect.ownKeys(window)
            .filter((k) => Object.is(window, Reflect.get(window, k)))
            .map((k) => [k, global])
    );
    // three global variables are accidentally defined
    //https://github.com/mathjax/MathJax/issues/2748
    const accidentallyvariables = {
        value: undefined,
        mathfontfamily: undefined,
        mathfontsize: undefined,
    };
    const scope = Object.assign(
        accidentallyvariables,
        { MathJax: proxymathjax },
        likewindow
    );
    const argskey = Object.keys(scope);
    const argsvalue = Object.values(scope);
    const fun = new Function(...argskey, scriptbody);
    Reflect.apply(fun, global, argsvalue);
    // console.info.call(console, global);
    return MathJax;
}
