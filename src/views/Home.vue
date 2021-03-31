<template>
  <div class="side-navigation">
    <ContactTab/>
  </div>
  <div class="contact-info-wrapper">
    <ContactInfoCard/>
  </div>
</template>

<script>
import ContactTab from '@/components/ContactTab.vue'
import ContactInfoCard from '@/components/ContactInfoCard.vue'

export default {
  name: 'Home',
  components: { ContactTab, ContactInfoCard },
  data () {
    return {
      title: 'Home'
    }
  }
}
</script>

<style lang="scss" scoped>
.side-navigation {
  height: 89vh;
  width: 12%;
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
