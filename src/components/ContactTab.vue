<template>
  <div class=contacts>
    <div class="contact-tab-title">
      Contacts
    </div>
    <div v-for="(contact, index) in alphabet" class="contact-tab-list" :key="index">
      <div class="contact">
        {{ contact }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactTab',
  data () {
    return {
      alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    }
  }
}
</script>

<style lang="scss" scoped>
.contacts {
  color: #2c3e50;
  font-size: 20px;
  .contact-tab-title {
    padding: 20px;
    text-align: center;
    font-weight: bold;
    text-decoration: underline;
  }
  .contact-tab-list {
    background-color: white;
    border-radius: 5px;
    padding: 10px 0px;
    border: 1px solid #DFE3E8;
    box-sizing: border-box;
    transition: all 0.25s ease;
    &:hover {
      color: #42b983;
      cursor: pointer;
      transform: scale(1.1, 1.1);
      font-weight: bold;
    }
  }
}
</style>
