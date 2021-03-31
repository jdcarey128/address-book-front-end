<template>
  <div v-if="$store.state.contactsDisplay !== ''" class="contact-info-cards">
    <h1>Contacts: {{ $store.state.contactsDisplay }}</h1>
    <div v-for="contact in $store.getters.getFilteredContacts" class="contact-info-card" :key=contact.id>
      <p> {{ contact.first_name }}</p>
    </div>
  </div>
  <div v-else>
    <h1>Home</h1>
    <h3>Welcome {{ user.first_name }}!</h3>
    <p>Click on a contact tab to view contacts by last name.</p>
  </div>
</template>

<script>
export default {
  name: 'ContactInfoCard',
  computed: {
    filteredContacts () {
      return this.$store.state.contactsDisplay
    },
    user () {
      return this.$store.state.user
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
