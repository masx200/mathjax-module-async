<template>
    <div>
        <h1>{{ language }}</h1>
        <hr />
        <el-input type="textarea" autosize v-model="input" @change="onchange" @input="onchange" />
        
        <hr />
        <div v-html="output" />
        <hr />
    </div>
</template>
<script src="./matheditor.ts"></script>
