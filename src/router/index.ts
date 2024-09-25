import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import inicio from '../views/inicio.vue';
import join from '../views/join.vue';
import login from '../views/login.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: inicio
  },
  {
    path: '/join',
    name: 'Join',
    component: join
  },
  {
    path: '/login',
    name: 'Login',
    component: login
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
