import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import TodoView from '../views/ToDo.vue'
import CalendarView from '../views/Calendar.vue'
import SettingsView from '../views/Settings.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/todo',
      name: 'todo',
      // route level code-splitting
      // this generates a separate chunk (ToDo.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ToDo.vue')
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('../views/Calendar.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/Settings.vue')
    }
  ]
})

export default router
