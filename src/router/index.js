import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NavbarComponent from '@/components/Navbar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/navbar',
      name: 'Navbar',
      component: NavbarComponent
    }
  ]
})

export default router
