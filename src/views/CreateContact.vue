<template>
  <div class='create-contact-form-wrapper'>
    <FormContact
      pageTitle="Create Contact"
      contact={}
      method='create'
    />
  </div>
</template>

<script>
import FormContact from '@/components/FormContact'

export default {
  components: { FormContact }
}
</script>
