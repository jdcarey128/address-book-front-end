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
    },
    CREATE_CONTACT (state, contactDetails) {
      state.contacts.push(...contactDetails)
    },
    UPDATE_CONTACT (state, contacts) {
      state.contacts = contacts
    }
  },
  actions: {
    setContactsDisplay ({ commit }, letter) {
      commit('SET_CONTACTS_DISPLAY', letter)
    },
    createContact ({ commit }, contactDetails) {
      // make api call to create contact
      // returns all details needed
      commit('CREATE_CONTACT', [contactDetails])
    },
    updateContact ({ commit }, contactDetails) {
      // this will make an update call to backend
      // then it will make a call to retrieve all contacts
      // and use the new contact list to update state.contacts
      // TODO: for now, have as create contact
      commit('CREATE_CONTACT', [contactDetails])
    }
  },
  getters: {
    getFilteredContacts: (state) => (contactsLetter) => {
      const filteredContacts = state.contacts.filter(contact =>
        contact.last_name[0].toUpperCase() === contactsLetter
      )
      return filteredContacts.sort(function (a, b) {
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
    },
    getContactCategories (state) {
      const contacts = state.contacts.map(contact => contact.last_name[0].toUpperCase())
      const distinctContacts = [...new Set(contacts)]
      return distinctContacts.sort()
    },
    getContact: (state) => (id) => {
      return state.contacts.filter(contact => contact.id === parseInt(id))
    }
  },
  modules: {
  }
})
