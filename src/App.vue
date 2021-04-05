<template>
  <div class="navigation">
    <div class='navigation_logo'>
      <img :src="appImage" alt="Your Dope Address Book" class='navigation_logo'>
    </div>
    <div class='navigation_user'>
      <router-link v-if="store.state.user" to="/">Home | </router-link>
      <!-- <router-link to="/profile">Profile</router-link> | -->
      <span @click='Logout'>Logout</span>
    </div>
  </div>
  <router-view/>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import firebase from 'firebase'
import image from '@/assets/book.png'

export default {
  setup () {
    const router = useRouter()
    const route = useRoute()
    const store = useStore()
    const appImage = image

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.replace('/login')
        } else if (route.path === '/login' || route.path === '/register') {
          router.replace('/')
        }
      })
    })

    const Logout = () => {
      firebase
        .auth()
        .signOut()
      store.dispatch('logoutUser')
    }

    return {
      Logout,
      store,
      appImage
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #F3F5FA;
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2c3e50;
  color: #42b983;
  padding: 20px;
  .navigation_logo {
    width: 70px;
  }
  .navigation_user {
    font-weight: bold;
    span {
      cursor: pointer;
      font-weight: bold;
      color: #42b983;
      &:hover {
        color: white;
      }
    }
    a {
      font-weight: bold;
      color: #42b983;
      text-decoration: none;
      &:hover {
        color: white;
      }
    }
  }
}

</style>
