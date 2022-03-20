import { fetchsource } from "./fetchsource";
import { scriptstoload } from "./scriptstoload";

export async function get_script_content() {
    return await Promise.all(
        scriptstoload.map((u) =>
            u.type === "url" ? fetchsource(u.content) : u.content
        )
    );
}
