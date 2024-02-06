import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Admin from '../views/Admin.vue'
import Komsan from '../views/Komsan.vue'
import Technology from '../views/Technology.vue'
import Keyla from '../views/Keyla.vue'
import Society from '../views/Society.vue'
import Ksekam from '../views/Ksekam.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView  
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/កម្សាន្ត',
      name: '1',
      component: Komsan
    },
    {
      path: '/បច្ចេកវិទ្យា',
      name: '2',
      component: Technology
    },
    {
      path: '/កីឡា',
      name: '3',
      component: Keyla
    },
    {
      path: '/សង្គម',
      name: '4',
      component: Society
    },
    {
      path: '/កសិកម្ម',
      name: '9',
      component: Ksekam
    },
  ]
})
export default router
