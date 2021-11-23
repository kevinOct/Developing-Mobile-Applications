<template>
    <div class="container">
    <div>
      <img class="image" src="../assets/stockimage1.png" alt="">
    </div>
    <Title color="#3F414E"/>
    <Header title="Meet people next to you"/>
    
    <Button text="SIGN UP" color="#8E97FD"/>
    <LinkToLogInPage/>
    </div>
</template>

<script>
import Title from '../components/Title'
import Header from '../components/header.vue'
import Button from '../components/Button.vue'
import LinkToLogInPage from '../components/Signuppage.vue'

export default {
  name: 'App',
  components: {
    Title,
    Header,
    Button,
    LinkToLogInPage,
  }

}
</script>