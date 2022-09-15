import { createApp as vue } from 'vue'
import { createPinia as pinia } from 'pinia'
import { initializeApp as firebase } from "firebase/app";

import App from './App.vue'
import router from './router'
import fb from './config/firebase'

firebase(fb);

vue(App)
    .use(pinia())
    .use(router)
    .mount('#app')
