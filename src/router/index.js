import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Admin from '../views/Admin.vue'
import HelloWorld from '../components/HelloWorld.vue'

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
      component: Admin
    },
    {
      path: '/បច្ចេកវិទ្យា',
      name: '2',
      component: Admin
    },
    {
      path: '/កីឡា',
      name: '3',
      component: Admin
    },
    {
      path: '/សង្គម',
      name: '4',
      component: Admin
    },
    {
      path: '/កសិកម្ម',
      name: '9',
      component: Admin
    },
  ]
})
export default router
