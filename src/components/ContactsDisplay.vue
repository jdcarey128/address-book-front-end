<template>
  <div v-if="$store.state.contactsDisplay !== ''" class="contact-info-cards-wrapper">
    <h1>Contacts: {{ $store.state.contactsDisplay }}</h1>
    <div v-if="$store.state.contactsDisplay === 'All'">
      <ContactInfoCard
        v-for="contact in allContacts"
        :key="contact.id"
        :contact="contact"
      />
    </div>
    <div>
      <ContactInfoCard
        v-for="contact in $store.getters.getFilteredContacts($store.state.contactsDisplay)"
        :key="contact.id"
        :contact="contact"
      />
    </div>
  </div>
  <div v-else>
    <h1>Home</h1>
    <h3>Welcome {{ user.first_name }}!</h3>
    <p>Click on a contact tab to view contacts by last name.</p>
  </div>
</template>

<script>
import ContactInfoCard from '@/components/ContactInfoCard.vue'

export default {
  name: 'ContactsDisplay',
  components: { ContactInfoCard },
  computed: {
    user () {
      return this.$store.state.user
    },
    allContacts () {
      return this.$store.getters.getAllContacts
    },
    filteredContacts () {
      return this.$store.state.contactsDisplay
    }
  }
}
</script>
