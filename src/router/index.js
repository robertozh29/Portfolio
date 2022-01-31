import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/es',
    name: 'Español',
    component: () => import('../views/Español.vue')
  },
  {
    path: '/fr',
    name: 'Français',
    component: () => import('../views/Francais.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
