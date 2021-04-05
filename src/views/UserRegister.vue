<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="Register">
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
      <input type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <input class='submit-button' type="submit" value="Register">
      <p>Have an account? <span class='login-redirect'><router-link to="/login">Login Here</router-link></span></p>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const firstName = ref('')
    const lastName = ref('')
    const email = ref('')
    const password = ref('')
    const store = useStore()

    const Register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(function () {
          const userDetails = {
            email: email.value,
            first_name: firstName.value,
            last_name: lastName.value
          }
          store.dispatch('createUser', userDetails)
        })
        .catch(err => alert(err.message))
    }

    return {
      Register,
      firstName,
      lastName,
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
.login-redirect {
  &:hover {
    color: #42b983;
  }
}
</style>
