<template>
  <div class="contact-info-card">
    <router-link :to="{ name: 'UpdateContact', params: {id: contact.id} }">
      <div class='contact-info-item'>
        <p> {{ contact.first_name }} {{ contact.last_name }}</p>
        <p v-if="contact.phone_number">Phone number: {{ contact.phone_number}}</p>
        <p v-if="contact.street_address_2"> {{ contact.street_address }}, {{ contact.street_address_2 }}<br>
        {{ contact.city }}, {{ contact.state }} {{ contact.zipcode }}
        </p>
        <p v-else> {{ contact.street_address }}<br>
        {{ contact.city }}, {{ contact.state }} {{ contact.zipcode }}
        </p>
      </div>
    </router-link>
    <div>
      <span @click='queueDeletePopUp' class="contact-delete">
        <p>delete contact</p>
      </span>
    </div>
  </div>
  <DeletePopUp v-if="showDeletePopUp"
    :contactName="formatName(contact.first_name, contact.last_name)"
    @confirmDelete="confirmDelete(contact)"
    @cancelDelete="cancelDelete"
  />
</template>

<script>
import DeletePopUp from '@/components/DeletePopUp.vue'

export default {
  name: 'ContactInfoCard',
  components: {
    DeletePopUp
  },
  props: {
    contact: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showDeletePopUp: false
    }
  },
  methods: {
    queueDeletePopUp () {
      this.showDeletePopUp = true
    },
    confirmDelete (contact) {
      this.$store.dispatch('deleteContact', contact.id)
      this.showDeletePopUp = false
    },
    cancelDelete () {
      this.showDeletePopUp = false
    },
    formatName (firstName, lastName) {
      return `${firstName} ${lastName}`
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-info-card {
  display: flex;
  flex-direction: column;
  padding: 5px 20px;
  .contact-info-item {
    margin-top: 10px;
    background-color: white;
    border-radius: 10px;
    border: 1px solid #2c3e50;
    cursor: pointer;
    transition: all 0.25s ease;
    &:hover {
      background-color: #2c3e50;
      color: #42b983;
    }
  }
  .contact-delete {
    float: right;
    &:hover {
      cursor: pointer;
      color: red;
    }
  }
}
</style>
