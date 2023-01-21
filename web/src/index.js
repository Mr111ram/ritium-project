import 'material-design-iconic-font/dist/css/material-design-iconic-font.min.css'
import { createApp } from 'vue'

import App from './App.vue'
import { vueRouter } from './routes'

const app = createApp(App)
app.use(vueRouter)
app.mount('#app')
