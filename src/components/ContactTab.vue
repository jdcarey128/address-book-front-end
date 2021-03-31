<template>
  <div class=contacts>
    <div class="contact-tab-title">
      Contacts
    </div>
    <div v-for="(contact, index) in contactCategories" class="contact-tab-list" :key="index">
      <div class="contact" @click="$store.dispatch('setContactsDisplay', contact)">
        {{ contact }}
      </div>
      <div class="contact-count">
        xxx contacts
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactTab',
  computed: {
    contactCategories () {
      const contacts = this.$store.state.contacts.map(contact => contact.last_name[0].toUpperCase())
      const distinctContacts = [...new Set(contacts)]
      return distinctContacts.sort()
    }
  }
}
</script>

<style lang="scss" scoped>
.contacts {
  color: #2c3e50;
  font-size: 20px;
  min-height: 100vh;
  .contact-tab-title {
    padding: 20px;
    text-align: center;
    font-weight: bold;
    text-decoration: underline;
    &:hover {
      color: #42b983;
      cursor: pointer;
    }
  }
  .contact-tab-list {
    background-color: white;
    border-radius: 5px;
    padding: 10px 0px;
    border: 1px solid #2c3e50;
    box-sizing: border-box;
    transition: all 0.25s ease;
    &:hover {
      color: #42b983;
      cursor: pointer;
      transform: scale(1.1, 1.1);
      font-weight: bold;
    }
  }
  .contact-count {
    font-size: 15px;
  }
}
</style>
