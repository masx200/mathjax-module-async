<template>
    <div><Matheditor language="latex" :defaultinput="latexinput" /></div>
    <div><Matheditor language="mathml" :defaultinput="mathmlinput" /></div>
    <div>
        <Matheditor language="asciimath" :defaultinput="asciimathinput" />
    </div>
</template>
<script lang="ts" src="./app.ts"></script>
