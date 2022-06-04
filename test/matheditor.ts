import {
    defineComponent,
    onMounted,
    PropType,
    ref,
    watch,
} from "@vue/runtime-core";
import { ElInput } from "element-plus";
import throttle from "lodash/throttle.js";
//@ts-ignore
import { rendermath, initmathjax } from "../lib/index";
export default defineComponent({
    components: { ElInput },
    setup(props) {
        const input = ref(props.defaultinput);
        const output = ref("");
        const onchange = throttle(
            async function onchange() {
                const language = props.language as
                    | "latex"
                    | "mathml"
                    | "asciimath";

                const mathhtml = await rendermath(
                    await initmathjax(),
                    input.value.trim(),
                    language
                );
                output.value = mathhtml;
            },
            500,
            {}
        );
        watch(input, (input, oldin) => {
            console.log(input);
            if (input.trim() === oldin.trim()) {
                return;
            }
            onchange();
        });
        onMounted(() => {
            onchange();
        });
        return { input, output };
    },
    props: {
        language: {
            required: true,
            type: String as PropType<"latex" | "mathml" | "asciimath">,
        },
        defaultinput: {
            required: true,
            type: String,
        },
    },
});
