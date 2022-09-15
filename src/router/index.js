import { createRouter, createWebHistory } from 'vue-router'
import Authenticated from './guards/Authenticated'
import Guest from './guards/Guest'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      beforeEnter: [Authenticated]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      beforeEnter: [Guest]
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      redirect: { name: 'home' },
    },
  ]
})
