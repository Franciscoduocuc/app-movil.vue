import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import inicio from '../views/inicio.vue';
import join from '../views/join.vue';
import login from '../views/login.vue';
import categoria from '../views/categoria.vue';
import producto from '../views/producto.vue';
import preguntas from '../views/preguntas.vue';


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
  },
  {
    path: '/categoria',
    name: 'categoria',
    component: categoria
  },
  {
    path: '/producto',
    name: 'producto',
    component: producto
  },
  {
    path: '/preguntas',
    name: 'preguntas',
    component: preguntas
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
