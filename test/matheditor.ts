import {
    defineComponent,
    onMounted,
    PropType,
    ref,
    watch,
} from "@vue/runtime-core";
import { ElInput } from "element-plus";
import throttle from "lodash/throttle.js";
import { rendermath } from "../dist/index.js";
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
                const container = document.createElement("div");

                await rendermath(input.value, language, container);
                output.value = container.innerHTML;
            },
            500,
            {}
        );
        watch(input, (input) => {
            console.log(input);
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
