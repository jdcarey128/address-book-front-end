<template>
  <div class="contact-info-wrapper">
    <ContactInfoCard/>
  </div>
</template>

<script>
import ContactInfoCard from '@/components/ContactInfoCard.vue'

export default {
  name: 'Home',
  components: { ContactInfoCard },
  data () {
    return {
      title: 'Home'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
