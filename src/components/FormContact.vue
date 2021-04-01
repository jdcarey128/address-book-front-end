<template>
  <h1>{{ pageTitle }}</h1>
  <form class="contact-form" @submit.prevent="createUpdateContact">

    <div class="contact-form-group">
      <label for="firstName">First Name: </label>
      <input v-model="firstName" id="firstName" type="text" placeholder="First Name">
      <br>
      <p v-if="!firstNameIsValid" class="form-error-message">First name is required</p>
      <br v-else>
      <label for="lastName">Last Name: </label>
      <input v-model="lastName" id="lastName" type="text" placeholder="Last Name">
      <br>
      <p v-if="!lastNameIsValid" class="form-error-message">Last name is required</p>
      <br v-else>
      <label for="groupType">Contact Group: </label>
      <select id="groupType" v-model="groupType" >
        <option :value="option.value" v-for="(option, index) in contactGroups" :key="index">
          {{ option.name }}
        </option>
      </select>
    </div>
    <br>

    <div class="contact-form-group">
      <label for="phoneNumber">Phone Number: </label>
      <input v-model="phoneNumber" id="phoneNumber" type="tel" placeholder='Phone Number'>
    </div>
    <br>

    <div class="contact-form-group">
      <label for="streetAddress">Street Address: </label>
      <input v-model="streetAddress" id="streetAddress" type="text" placeholder='1624 W. Hope St.'>
      <br>
      <p v-if="!streetAddressIsValid" class="form-error-message">Street Address is required</p>
      <br v-else>
      <label for="streetAddress">Street Address 2: </label>
      <input v-model="streetAddress2" id="streetAddress2" type="text" placeholder='unit 4A'>
      <br>
      <br>
      <label for="city">City: </label>
      <input v-model="city" id="city" type="text" placeholder='City'>
      <br>
      <p v-if="!cityIsValid" class="form-error-message">City is required</p>
      <br v-else>
      <label for="state">State: </label>
      <input v-model="state" id="state" type="text" placeholder='State'>
      <br>
      <p v-if="!stateIsValid" class="form-error-message">State is required</p>
      <br v-else>
      <label for="zipcdoe">Zipcode: </label>
      <input v-model="zipcode" id="zipcode" type="text" placeholder='Zipcode'>
      <br>
      <p v-if="!zipcodeIsValid" class="form-error-message">Zipcode is required</p>
      <br v-else>
    </div>
    <div>
      <button class="create-contact-form-button" :disabled="!formIsValid">{{ pageTitle }}</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'FormContact',
  props: {
    pageTitle: {
      type: String,
      required: true
    },
    contact: {
      type: Object,
      required: true
    },
    method: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      firstName: this.contact.first_name,
      lastName: this.contact.last_name,
      groupType: this.contact.group || 'friend',
      phoneNumber: this.contact.phone_number,
      streetAddress: this.contact.street_address,
      streetAddress2: this.contact.street_address_2,
      city: this.contact.city,
      state: this.contact.state,
      zipcode: this.contact.zipcode,
      contactGroups: [
        { value: 'friend', name: 'Friend' },
        { value: 'family', name: 'Family' },
        { value: 'emergency', name: 'Emergency' },
        { value: 'coworker', name: 'Coworker' },
        { value: 'classmate', name: 'Classmate' },
        { value: 'other', name: 'Other' }
      ]
    }
  },
  computed: {
    firstNameIsValid () {
      return !!this.firstName
    },
    lastNameIsValid () {
      return !!this.lastName
    },
    streetAddressIsValid () {
      return !!this.streetAddress
    },
    cityIsValid () {
      return !!this.city
    },
    stateIsValid () {
      return !!this.state
    },
    zipcodeIsValid () {
      return !!this.zipcode
    },
    formIsValid () {
      return this.firstNameIsValid && this.lastNameIsValid && this.streetAddressIsValid && this.cityIsValid && this.stateIsValid && this.zipcodeIsValid
    }
  },
  methods: {
    createUpdateContact () {
      const contactDetails = {
        first_name: this.firstName,
        last_name: this.lastName,
        group: this.groupType,
        street_address: this.streetAddress,
        street_address_2: this.streetAddress2,
        phone_number: this.phoneNumber,
        city: this.city,
        state: this.state,
        zipcode: this.zipcode
      }
      if (this.method === 'update') {
        this.$store.dispatch('updateContact', contactDetails)
      }
      if (this.method === 'create') {
        this.$store.dispatch('createContact', contactDetails)
      }
      this.$store.dispatch('setContactsDisplay', this.lastName[0].toUpperCase())
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style lang="scss" scoped>
  .contact-form {
    padding: 10px;
    .contact-form-group {
      display: block;
      margin: auto;
      padding: 20px;
      width: 50%;
      background-color: white;
      text-align: center;
      border-radius: 5px;
      border: 1px solid #2c3e50;
    }
    .create-contact-form-button {
      margin-top: 10px;
      margin-bottom: 50px;
      border-radius: 5px;
      border: 1px solid #2c3e50;
      transition: all 0.25s ease;
      &:hover:enabled {
        cursor: pointer;
        background-color: #42b983;
        color: white;
      }
    }
  }
  .form-error-message {
    color: red;
    font-size: 12px;
  }
</style>
