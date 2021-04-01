import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import CreateContact from '../views/CreateContact.vue'
import EditContact from '../views/EditContact.vue'

const routes = [
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacts/new',
    name: 'CreateContact',
    component: CreateContact
  },
  {
    path: '/contacts/:id/edit',
    name: 'EditContact',
    component: EditContact,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
