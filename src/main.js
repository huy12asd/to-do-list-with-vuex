import { createApp } from 'vue'
import App from './App.vue'

import Vuex from 'vuex'
const store = new Vuex.Store(todo)
import todo from './store'
createApp(App).use(store).mount('#app')
