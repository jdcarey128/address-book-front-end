import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    user: '',
    contacts: [],
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
    SET_USER (state, userDetails) {
      state.user = userDetails
    },
    SET_USER_CONTACTS (state, userContacts) {
      state.contacts = userContacts
    },
    LOGOUT_USER (state) {
      state.user = ''
      state.contacts = []
      state.contactsDisplay = ''
    }
  },
  actions: {
    setContactsDisplay ({ commit, state }, letter) {
      commit('SET_CONTACTS_DISPLAY', letter)
    },
    createContact ({ commit, state }, contactDetails) {
      axios.post(`http://127.0.0.1:5000/users/${state.user.id}/contacts`, {
        ...contactDetails
      }).then(function (response) {
        commit('CREATE_CONTACT', [response.data])
      })
    },
    updateContact ({ commit, state }, contactDetails) {
      axios.patch(`http://127.0.0.1:5000/users/${state.user.id}/contacts/${contactDetails.id}`, {
        ...contactDetails
      }).then(function (response) {
        axios.get(`http://127.0.0.1:5000/users/${state.user.id}/contacts`).then(function (response) {
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
        commit('SET_USER', response.data)
        const userId = response.data.id
        dispatch('setUserContacts', userId)
      })
    },
    setUserContacts ({ commit }, userId) {
      axios.get(`http://127.0.0.1:5000/users/${userId}/contacts`)
        .then(function (response) {
          commit('SET_USER_CONTACTS', response.data.contacts)
        })
    },
    loginUser ({ commit, dispatch }, userEmail) {
      axios.post('http://127.0.0.1:5000/login', {
        email: userEmail
      }).then(function (response) {
        commit('SET_USER', response.data)
        const userId = response.data.id
        dispatch('setUserContacts', userId)
      })
    },
    logoutUser ({ commit }) {
      commit('LOGOUT_USER')
    },
    deleteContact ({ commit, state }, contactId) {
      axios.delete(`http://127.0.0.1:5000/users/${state.user.id}/contacts/${contactId}`)
        .then(function (response) {
          axios.get(`http://127.0.0.1:5000/users/${state.user.id}/contacts`)
            .then(function (response) {
              commit('UPDATE_CONTACTS', response.data.contacts)
            })
        })
    }
  },
  getters: {
    getFilteredContacts: (state) => (contactsLetter) => {
      if (state.contacts.length > 0) {
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
      }
    },
    getAllContacts (state) {
      if (state.contacts.length > 0) {
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
    }
  },
  modules: {
  }
})
