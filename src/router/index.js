import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: () => import("../views/RegisterView.vue")
    },
    {
      path: '/home',
      name: 'home',
      component: () => import("../views/RegisterView.vue")
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import ("../views/AboutUsView.vue"),
    },
  
    {
      path: '/admin',
      name: 'admin',
      component: () => import ("../views/AdminView.vue"),
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import ("../views/CalendarView.vue"),
    },
    {
      path: '/packs',
      name: 'packs',
      component: () => import ("../views/PacksView.vue"),
    },
    {
      path: '/shows',
      name: 'shows',
      component: () => import ("../views/ShowsView.vue"),
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import ("../views/PaymentView.vue"),
    },
    {
      path: '/shows',
      name: 'shows',
      component: () => import ("../views/ShowsView.vue"),
    },

 
  ],
})

export default router
