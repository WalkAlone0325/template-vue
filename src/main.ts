import 'virtual:uno.css'
import './assets/main.css'

import { createApp } from 'vue'
import setupStore from './store'
import setupRouter from './router'

import App from './App.vue'

function setup() {
  const app = createApp(App)

  setupStore(app)

  setupRouter(app)

  app.mount('#app')
}

setup()
