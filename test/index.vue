<template>
    <div><Matheditor language="latex" :defaultinput="latexinput" /></div>
    <div><Matheditor language="mathml" :defaultinput="mathmlinput" /></div>
    <div>
        <Matheditor language="asciimath" :defaultinput="asciimathinput" />
    </div>
</template>
<script>
import { defineComponent } from "@vue/runtime-dom";
import { asciimathinput } from "./asciimathinput.js";
import { latexinput } from "./latexinput.js";
import Matheditor from "./matheditor.vue";
import { mathmlinput } from "./mathmlinput.js";
export default defineComponent({
    components: {
        Matheditor,
    },
    data: () => ({ latexinput, mathmlinput, asciimathinput }),
});
</script>
