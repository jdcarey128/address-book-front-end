import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import CreateContact from '../views/CreateContact.vue'
import UpdateContact from '../views/UpdateContact.vue'
import UserLogin from '../views/UserLogin.vue'
import UserRegister from '../views/UserRegister.vue'

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
    name: 'UpdateContact',
    component: UpdateContact,
    props: true
  },
  {
    path: '/login',
    name: 'UserLogin',
    component: UserLogin
  },
  {
    path: '/register',
    name: 'UserRegister',
    component: UserRegister
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
