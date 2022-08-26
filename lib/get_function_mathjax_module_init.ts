import { minify } from "terser";
export async function get_function_mathjax_module_init(
    ...args: string[]
): Promise<string> {
    const funbody = args[args.length - 1];
    const funargs = args.slice(0, args.length - 1);
    const code = (await minify(funbody, terserOptions)).code;
    if (!code) throw Error('accident')
    /* 对于不支持严格模式的代码的处理,只能使用new Function */
    // const scriptbody = `export default function(${funargs.join(
    //     "\n,\n",
    // )
    //     }){\n${code}\n}`;
    const scriptbody = `export default new Function(${funargs
        .map((a) => JSON.stringify(a))
        .join(",")
        },${JSON.stringify(
            code//.replace('t.callee.SUPER', "console.log(t),t.callee.SUPER"),
        )
        });`;
    return scriptbody;
}
const terserOptions = {
    output: { comments: false },
    compress: { drop_console: true, drop_debugger: true },
};
