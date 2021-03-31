<template>
  <div v-if="$store.state.contactsDisplay !== ''" class="contact-info-cards">
    <h1>Contacts: {{ $store.state.contactsDisplay }}</h1>
    <div v-for="contact in $store.getters.getFilteredContacts" class="contact-info-card" :key=contact.id>
      <p> {{ contact.first_name }} {{ contact.last_name }}</p>
      <p v-if="contact.phone_number">Phone number: {{ contact.phone_number}}</p>
      <p v-if="contact.street_address_2"> {{ contact.street_address }}, {{ contact.street_address_2 }}<br>
      {{ contact.city }}, {{ contact.state }} {{ contact.zipcode }}
      </p>
      <p v-else> {{ contact.street_address }}<br>
      {{ contact.city }}, {{ contact.state }} {{ contact.zipcode }}
      </p>
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
.contact-info-card {
  padding: 5px 20px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #2c3e50;
  cursor: pointer;
  &:hover {
    color: #42b983;
    font-weight: bold;
  }
}
</style>
