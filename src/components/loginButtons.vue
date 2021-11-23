<template>
    <Button :showIcon="true" icon="logo-facebook" icon_color="white" text="CONTINUE WITH FACEBOOK"/>
    <Button :showIcon="true" icon="logo-google" text="CONTINUE WITH GOOGLE" color= "white" font_color= "black"/>
    <p>OR LOG IN WITH EMAIL</p>
</template>

<script>
import Button from './Button.vue'

export default {
    name: 'loginButtons',
    components: {
        Button,
    }
}
</script>

<style scoped>
p {
    font-size: 14px;
}
</style>
