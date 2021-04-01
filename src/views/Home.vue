<template>
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
</style>
