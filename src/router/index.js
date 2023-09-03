import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/en',
    name: 'English',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/es',
    name: 'Español',
    component: () => import('../views/Español.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
