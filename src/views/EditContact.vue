<template>
  <h1>Edit Contact</h1>
  {{ contact }}
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      contact: this.$store.getters.getContact(this.id)
    }
  }
}
</script>
