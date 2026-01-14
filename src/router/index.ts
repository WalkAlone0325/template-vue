import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes: [],
})

const setupRouter = (app: App) => {
  app.use(router)
}

export default setupRouter
