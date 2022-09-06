<template>
    <div>
        <Matheditor language="latex" :defaultinput="latexinput" id="latex" />
    </div>
    <div>
        <Matheditor language="mathml" :defaultinput="mathmlinput" id="mathml" />
    </div>
    <div>
        <Matheditor
            language="asciimath"
            :defaultinput="asciimathinput"
            id="asciimath"
        />
    </div>
</template>
<script lang="ts" src="./app.ts"></script>
