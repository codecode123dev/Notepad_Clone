import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {adminGlobalComponents} from "./utils/import"
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})


const app = createApp(App)
adminGlobalComponents(app)
app.use(vuetify)
app.use(router)
app.mount('#app')

