import { createStore } from 'vuex'
import { data } from '@/assets/data.js'
import axios from 'axios'

export default createStore({
  state: {
    user: '',
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
    },
    UPDATE_CONTACTS (state, updatedContacts) {
      state.contacts = [...updatedContacts]
    },
    CREATE_USER (state, userDetails) {
      state.user = userDetails
    },
    SET_USER_CONTACTS (state, userContacts) {
      state.contacts = userContacts
    }
  },
  actions: {
    setContactsDisplay ({ commit }, letter) {
      commit('SET_CONTACTS_DISPLAY', letter)
    },
    createContact ({ commit }, contactDetails) {
      axios.post('http://127.0.0.1:5000/users/4/contacts', {
        ...contactDetails
      }).then(function (response) {
        commit('CREATE_CONTACT', [response.data])
      })
    },
    updateContact ({ commit }, contactDetails) {
      axios.patch(`http://127.0.0.1:5000/users/4/contacts/${contactDetails.id}`, {
        ...contactDetails
      }).then(function (response) {
        axios.get('http://127.0.0.1:5000/users/4/contacts').then(function (response) {
          commit('UPDATE_CONTACTS', response.data.contacts)
        })
      })
    },
    createUser ({ commit, dispatch }, userDetails) {
      axios.post('http://127.0.0.1:5000/users', {
        first_name: userDetails.first_name,
        last_name: userDetails.last_name,
        email: userDetails.email
      }).then(function (response) {
        commit('CREATE_USER', response.data)
        const userId = response.data.id
        dispatch('setUserContacts', userId)
      })
    },
    setUserContacts ({ commit }, userId) {
      axios.get(`http://127.0.0.1:5000/users/${userId}/contacts`).then(function (response) {
        commit('SET_USER_CONTACTS', response.data)
      })
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
      if (state.contacts.length > 0) {
        const contacts = state.contacts.map(contact => contact.last_name[0].toUpperCase())
        const distinctContacts = [...new Set(contacts)]
        return distinctContacts.sort()
      } else {
        return []
      }
    },
    getContact: (state) => (id) => {
      return state.contacts.filter(contact => contact.id === parseInt(id))
    },
    getUserId (state) {
      if (state.user) {
        return state.user.id
      }
    }
  },
  modules: {
  }
})
