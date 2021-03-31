<template>
  <div class="navigation">
    <div class='navigation_logo'>#Logo_here</div>
    <div class='navigation_user'>
      <router-link to="/">Home</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="#">Log Out</router-link>
    </div>
  </div>
  <div class="side-navigation">
    <ContactTab/>
  </div>
  <router-view/>
</template>

<script>
import ContactTab from '@/components/ContactTab.vue'

export default {
  name: 'App',
  components: { ContactTab }
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
    font-size: 24px;
    font-weight: bold;
  }

  .navigation_user {
    font-weight: bold;
    a {
      font-weight: bold;
      color: #42b983;
      text-decoration: none;
    }
  }
}

.side-navigation {
  height: 89vh;
  width: 10%;
  position: fixed;
  padding: 10px;
  margin-bottom: 0px;
  z-index: 0;
  left: 0;
  background-color: #dee4eb;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
