<template>
  <h1>Hello, {{ user.first_name }}</h1>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
