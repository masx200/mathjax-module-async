import { equalglobals } from "./equalglobals";

export const likewindow = Object.fromEntries(
    equalglobals
        // Reflect.ownKeys(window)
        //     .filter((k) => Object.is(window, Reflect.get(window, k)))
        .map((k) => [k, global])
);
