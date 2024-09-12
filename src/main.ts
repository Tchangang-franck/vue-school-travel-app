import { createApp,  } from 'vue'
import './style.css'
import  router from './router'
//@ts-ignore
import AppLink from './components/AppLink.vue'

import App from './App.vue' 


createApp(App)
.component('AppLink',AppLink)
.use(router)
.mount('#app')
