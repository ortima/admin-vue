import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import * as FaIcons from 'oh-vue-icons/icons/fa'

import App from './App.vue'
import router from './router'

addIcons(...Object.values(FaIcons))

const app = createApp(App)

app.use(createPinia())
app.component('v-icon', OhVueIcon)

app.use(router)

app.mount('#app')
