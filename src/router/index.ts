import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PREFIX_APP),
  routes: [],
})

const setupRouter = (app: App) => {
  app.use(router)
}

export default setupRouter
