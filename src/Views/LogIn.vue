<template>
    <div class="container">
    <router-link to='/'>Go back</router-link>
    <Title class="title" color="#3F414E"/>
    <Welcome text="Welcome!"/>
    <LoginButtons/>
    <Form text="Log In"/>
    </div>
</template>

<script>
    import Title from '../components/Title'
    import Welcome from '../components/welcomeTitle.vue'
    import LoginButtons from '../components/loginButtons.vue'
    import Form from '../components/Form.vue'

    export default {
        components: {
            Title,
            LoginButtons,
            Welcome,
            Form,
        }
    }
</script>


<style scoped> 

.title {
    font-size: 18px;
}

</style>
