import { cachepromise } from "./cachepromise";

export const fetchsource = cachepromise(async function (
    url: string,
    opts: any = {}
) {
    return fetch(url, opts)
        .then((r) =>
            r.ok ? r : Promise.reject(new Error("fetch failed:" + url))
        )
        .then((r) => r.text());
});
