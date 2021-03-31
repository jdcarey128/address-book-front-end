import { createStore } from 'vuex'
import { data } from '@/assets/data.js'

export default createStore({
  state: {
    user: data.user,
    contacts: data.contacts
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
