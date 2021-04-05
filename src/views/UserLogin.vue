<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="Login">
      <input type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <input class='submit-button' type="submit" value="Login">
      <p>Need an account? <span class='register-redirect'><router-link to="/register">Register Here</router-link></span></p>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import firebase from 'firebase'
import { useStore } from 'vuex'

export default {
  setup () {
    const email = ref('')
    const password = ref('')
    const store = useStore()

    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(function () {
          store.dispatch('loginUser', email.value)
        })
        .catch(err => alert(err.message))
    }
    return {
      Login,
      email,
      password
    }
  }
}
</script>

<style lang="scss" scoped>
  .submit-button {
    &:hover {
      cursor: pointer;
    }
  }
  .register-redirect {
    &:hover {
      color: #42b983;
    }
  }
</style>
