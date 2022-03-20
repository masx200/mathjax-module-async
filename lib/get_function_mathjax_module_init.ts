export async function get_function_mathjax_module_init(
    ...args: string[]
): Promise<string> {
    const funbody = args[args.length - 1];
    const funargs = args.slice(0, args.length - 1);

    const scriptbody = `export default function(${funargs.join(
        "\n,\n"
    )}){\n${funbody}\n}`;
    return scriptbody;
}
