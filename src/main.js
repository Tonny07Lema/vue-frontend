import { createApp } from 'vue'
import App from './App.vue'
import AppN from './AppN.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(AppN).mount('#appN')
createApp(App).mount('#app')
