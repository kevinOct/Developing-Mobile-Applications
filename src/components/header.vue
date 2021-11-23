<template>
    <header>
        <h3 class="header">{{title}} <br> Have enriching conversations</h3>
    </header>
</template>

<script>

export default {
    name: 'Header',
    components: {
    },
    props: {
        title: String,
    }
}

</script>

<style scoped>

header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px, 20px, 50px, 20px;
    padding-bottom: 10px;
    padding-top: 0px;
    font-size: 14px;
    color: #7B7F9E;
    /*border: 1px solid steelblue;*/
}
    
</style>