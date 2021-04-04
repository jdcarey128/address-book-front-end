import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyA4ySzkPOdLeZD0QdPU9RBT3zdY8FO8mME',
  authDomain: 'address-book-d188d.firebaseapp.com',
  projectId: 'address-book-d188d',
  storageBucket: 'address-book-d188d.appspot.com',
  messagingSenderId: '49979778129',
  appId: '1:49979778129:web:e0cf41abbe251ee66a4470',
  measurementId: 'G-KFEBBG5852'
}

firebase.initializeApp(firebaseConfig)

createApp(App).use(store).use(router).mount('#app')
