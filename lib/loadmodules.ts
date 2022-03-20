//@ts-ignore
import init_mathjax_fun from "virtual:mathjax_init-js";
import { accidentallyvariables } from "./accidentallyvariables";
import { equalglobals } from "./equalglobals";
import { likewindow } from "./likewindow";
export async function loadmodules(): Promise<Record<string, any>> {
    // const scriptscontent = await get_script_content();
    // const scriptbody = scriptscontent.join("\n;\n");
    // three global variables are accidentally defined
    //https://github.com/mathjax/MathJax/issues/2748

    // const scope = Object.assign(
    //     accidentallyvariables,
    //     { MathJax: proxymathjax },
    //     likewindow
    // );
    // const argskey = Object.keys(scope);

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
            const value =
                Reflect.get(fake, p, fake) || Reflect.get(window, p, window);
            if (typeof value === "function") {
                return value.bind(window);
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
    const likewindow = Object.fromEntries(
        equalglobals
            // Reflect.ownKeys(window)
            //     .filter((k) => Object.is(window, Reflect.get(window, k)))
            .map((k) => [k, global])
    );

    const scope = Object.assign(
        accidentallyvariables,

        likewindow,
        { MathJax: proxymathjax }
    );
    const argsvalue = Object.values(scope);
    // const fun = await createfunction(...argskey, scriptbody);
    // const fun = new Function(...argskey, scriptbody);
    const fun = init_mathjax_fun;
    Reflect.apply(fun, global, argsvalue);
    // console.info.call(console, global);
    return MathJax;
}
