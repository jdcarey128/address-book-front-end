<template>
  <div class=contacts>
    <div class="contact-tab-title" @click="$store.dispatch('setContactsDisplay', 'All')">
      Contacts
    </div>
    <div v-for="(contact, index) in contactCategories" class="contact-tab-list" :key="index">
      <div class="contact" @click="$store.dispatch('setContactsDisplay', contact)">
        {{ contact }}
      </div>
      <div class="contact-count">
        contact count: {{ $store.getters.getFilteredContacts(contact).length }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactTab',
  computed: {
    contactCategories () {
      return this.$store.getters.getContactCategories
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
    cursor: pointer;
    &:hover {
      color: #42b983;
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
      background-color: #2c3e50;
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
