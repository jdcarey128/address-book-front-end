<template>
  <div class="popup">
    <div class="popup-inner">
      <p><strong>Are you sure you want to delete {{contactName}} as a contact?</strong></p>
      <button @click="cancelDelete" class="cancel-delete">No</button>
      <button @click="confirmDelete" class="confirm-delete">Yes</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeletePopUp',
  emits: ['confirmDelete', 'cancelDelete'],
  props: {
    contactName: {
      type: String,
      required: true
    }
  },
  methods: {
    confirmDelete () {
      this.$emit('confirmDelete')
    },
    cancelDelete () {
      this.$emit('cancelDelete')
    }
  }
}
</script>

<style lang="scss" scoped>
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;

    .popup-inner {
      background: #FFF;
      border: 1px solid #2c3e50;
      padding: 30px;
      border-radius: 5px;
      button {
        padding: 5px;
        margin: 10px;
        &:hover {
          cursor: pointer;
          background-color: #2c3e50;
          color: #42b983;
        }
      }
    }
  }
</style>
