import { createStore } from 'vuex'
import { data } from '@/assets/data.js'

export default createStore({
  state: {
    user: data.user,
    contacts: data.contacts,
    contactsDisplay: ''
  },
  mutations: {
    SET_CONTACTS_DISPLAY (state, letter) {
      state.contactsDisplay = letter
    }
  },
  actions: {
    setContactsDisplay ({ commit }, letter) {
      commit('SET_CONTACTS_DISPLAY', letter)
    }
  },
  getters: {
    getFilteredContacts (state) {
      const contactsLetter = state.contactsDisplay
      const filteredContacts = state.contacts.filter(contact =>
        contact.last_name[0].toUpperCase() === contactsLetter
      )
      return filteredContacts
    },
    getAllContacts (state) {
      return state.contacts
    }
  },
  modules: {
  }
})
