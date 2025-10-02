import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/inicio'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  },
  { 
    path : '/inicio', 
    component: () => import ('../views/InicioPage.vue') 
  },
  { 
    path : '/sumadora', 
    component: () => import ('../views/SumadoraPage..vue') 
  },
  { 
    path : '/convertidor', 
    component: () => import ('../views/ConvertidorPage.vue') 
  },
  { 
    path : '/tablamultiplicar', 
    component: () => import ('../views/TablaMultiplicarPage.vue') 
  },
  { 
    path : '/experiencia', 
    component: () => import ('../views/Experiencia.vue') 
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
