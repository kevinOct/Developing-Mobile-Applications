<template>
    <h2 :style="{color:color}" >Lorem Ipsum</h2>
</template>

<script>   
    export default {
        name: 'Title',
        props: {
            color: String
        }
    }

</script>

<style scoped>
    h2 {
        font-size: 27px;
        font-weight: 700;
        padding-bottom: -5px;
        letter-spacing: 0.24em;
        /*border: 1px solid steelblue;*/
    }
</style>