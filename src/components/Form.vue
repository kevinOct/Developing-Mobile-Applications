<template>
    <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <input type="text" name="text" v-model="email" placeholder="Email address" />
    </div>
    <div class="form-control">
      <input
        type="password"
        name="day"
        v-model="password"
        placeholder="Password"
      />
    </div>

    <input type="submit" v-bind:value="text" class="btn btn-block" />
  </form>
</template>

<script>
    export default {
        name: 'Form',

        props: {
          text: String,
        },

        data() {
            return {
                email: '',
                password: '',
            }
        }
    }


</script>

<style scoped>
.add-form {
    display: flex;
    width: 350px;
    align-items: center;
    flex-direction: column;
    margin-bottom: 40px;
}
.form-control {
  margin: 20px, 0;
  width: 100%;
}

.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 63px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 16px;
  color: #A1A4B2;
  background: #F2F3F7;
  border-radius: 15px;
  border: none;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}

</style>