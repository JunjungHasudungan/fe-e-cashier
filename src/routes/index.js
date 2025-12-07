// membuat router 
import { createRouter, createWebHistory } from 'vue-router'

// AppLayout untuk layout yang sudah berhasil login ataupun register
import AppLayout from '@/layouts/App.vue'

// AppLayout untuk layout yang sedang proses login ataupun register
import GuestLayout from '@/layouts/Guest.vue'

// import components
import WelcomePage from '@/pages/WelcomePage.vue'
import DashboardPage from '@/pages/DashboardPage.vue'
import Register from '@/pages/auth/Register.vue'
import Login from '@/pages/auth/Login.vue'

// membuat routes untuk semua komponents
const routes = [
   {
        path: '/',
        component: AppLayout,
        children: [
            { path: '', name: 'home', component: WelcomePage, meta: { title: 'Welcome' } },
        ]
    },
    {
      path: '/dashboard',
      component: AppLayout,
      children: [
        {
          path: '',           // default child
          name: 'dashboard',
          component: DashboardPage,
          meta: { requiresAuth: true, title: 'Dashboard' }
        }
      ]
    },
    {
      path: '/',
      component: GuestLayout,
      children: [
        // { path: '', name: '/', component: WelcomePage,  meta: { title: 'welcome',  requiresGuest: true } },
        { path: 'register', component: Register, name: 'register', meta: { title: 'register', requiresGuest: true } },
        { path: 'login', component: Login, name: 'login', meta: { title: 'login',  requiresGuest: true } },
      ]
    },
]

// membuat object router
const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to) => {
  const token = localStorage.getItem("token")

  if (to.meta.requiresAuth && !token) {
    return "/login"
  }

  if (to.meta.requiresGuest && token) {
    return "/dashboard"
  }
})

router.afterEach((to) => {
  const appName = import.meta.env.VITE_APP_NAME
  document.title = to.meta.title ? `${to.meta.title} | ${appName}` : appName
})

// melakukan export router
export default router