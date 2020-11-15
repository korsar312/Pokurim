import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store.js'
import VueAgile from 'vue-agile'


const app = createApp(App)
app.use(VueAgile)
app.use(store)
app.mount('#app')


//  json-server --watch db.json
//  npm run serve
