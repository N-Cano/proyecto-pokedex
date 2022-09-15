import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp as initializeFirebase } from "firebase/app";

import App from './App.vue'
import router from './router'
import firebaseConfig from './config/firebase'

import './assets/main.css'

initializeFirebase(firebaseConfig);

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
