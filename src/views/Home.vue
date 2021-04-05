<template>
  <router-link :to="{ name: 'CreateContact' }">
    <button class="button-create-contact">Create Contact</button>
  </router-link>
  <div class="home-content-wrapper">
    <div class="home-side-navigation">
      <ContactTab/>
    </div>
    <div class="home-contact-info-wrapper">
      <ContactsDisplay/>
    </div>
  </div>
</template>

<script>
import ContactTab from '@/components/ContactTab.vue'
import ContactsDisplay from '@/components/ContactsDisplay.vue'

export default {
  name: 'Home',
  components: { ContactTab, ContactsDisplay }
}
</script>

<style lang="scss" scoped>
.home-content-wrapper {
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-gap: 20px;
  .home-side-navigation {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: #dee4eb;
    border-right: 1px solid #2c3e50;
  }
}
.button-create-contact {
  float:right;
  padding: 5px;
  margin: 5px;
  color: #2c3e50;
  background-color: #42b983;
  border: 1px solid #dee4eb;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    color: white;
    border: 1px solid #2c3e50;
  }
}
</style>
