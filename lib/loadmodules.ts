import { fetchsource } from "./fetchsource";
import { scriptstoload } from "./scriptstoload";

export async function loadmodules(): Promise<Record<string, any>> {
    const scriptscontent = await Promise.all(
        scriptstoload.map((u) => fetchsource(u))
    );
    // console.log(scriptscontent);

    const scriptbody = scriptscontent.join("\n;\n");
    // console.log(scriptbody);

    let MathJax: Record<string, any> = {};
    const fake = {
        get MathJax() {
            return MathJax;
        },
        set MathJax(value) {
            MathJax = value;
        },
    };
    const global = new Proxy(window, {
        get(t, p, r) {
            const value = Reflect.get(fake, p, fake) || Reflect.get(t, p, r);
            if (typeof value === "function") {
                return value.bind(undefined);
            } else {
                return value;
            }
        },

        has(t, p) {
            return Reflect.has(t, p) || Reflect.has(fake, p);
        },
        set(t, p, v, r) {
            return Reflect.set(fake, p, v, fake);
        },
        ownKeys(t) {
            return Array.from(
                new Set([...Reflect.ownKeys(t), ...Reflect.ownKeys(fake)])
            );
        },
        defineProperty(t, p, a) {
            return Reflect.defineProperty(fake, p, a);
        },

        deleteProperty(t, p) {
            return Reflect.deleteProperty(fake, p);
        },
    });

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
    const equalglobals = [
        "self",
        "frames",
        "parent",
        "content",
        "window",
        "top",
        "globalThis",
    ];
    const likewindow = Object.fromEntries(
        equalglobals
            // Reflect.ownKeys(window)
            //     .filter((k) => Object.is(window, Reflect.get(window, k)))
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
