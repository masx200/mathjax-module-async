import { defineComponent } from "@vue/runtime-dom";
//@ts-ignore
import { asciimathinput } from "./asciimathinput.js";
//@ts-ignore
import { latexinput } from "./latexinput.js";
import Matheditor from "./matheditor.vue";
//@ts-ignore
import { mathmlinput } from "./mathmlinput.js";
//@ts-ignore
export default defineComponent({
    components: {
        //@ts-ignore
        Matheditor,
    },
    data: () => ({ latexinput, mathmlinput, asciimathinput }),
});
