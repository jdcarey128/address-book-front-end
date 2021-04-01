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
    getFilteredContacts: (state) => (contactsLetter) => {
      const filteredContacts = state.contacts.filter(contact =>
        contact.last_name[0].toUpperCase() === contactsLetter
      )
      return filteredContacts
    },
    getAllContacts (state) {
      return state.contacts.sort(function (a, b) {
        var nameA = a.last_name.toUpperCase()
        var nameB = b.last_name.toUpperCase()
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }
        return 0
      })
    }
  },
  modules: {
  }
})
