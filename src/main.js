import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import Vuex from 'vuex'
const store = new Vuex.Store()
createApp(App).use(store).mount('#app')
