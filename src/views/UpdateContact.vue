<template>
  <div class='edit-contact-form-wrapper'>
    <FormContact
      pageTitle="Update Contact"
      :contact="contact"
      method='update'
      :id="id"
    />
  </div>
</template>

<script>
import FormContact from '@/components/FormContact.vue'
export default {
  name: 'UpdateContact',
  components: { FormContact },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      contact: this.$store.getters.getContact(this.id)[0]
    }
  }
}
</script>
