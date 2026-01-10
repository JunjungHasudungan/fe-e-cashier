// membuat router 
import { createRouter, createWebHistory } from 'vue-router'

// AppLayout untuk layout yang sudah berhasil login ataupun register
import AppLayout from '@/layouts/AppLayout.vue'

// import components
import WelcomePage from '@/pages/WelcomePage.vue'
import DashboardPage from '@/pages/DashboardPage.vue'
import Register from '@/pages/auth/Register.vue'
import Login from '@/pages/auth/Login.vue'
import WelcomeLayout from '@/layouts/WelcomeLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import IndexUser from '@/pages/admin/manangementUser/IndexUser.vue'

// membuat routes untuk semua komponents
const routes = [
    {
      path: '/',
      component: WelcomeLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: WelcomePage,
          meta: { title: 'Welcome' }
        }
      ]
    },
    {
      path: '/dashboard',
      component: AppLayout,
      children: [
        {
          path: '',           
          name: 'dashboard',
          component: DashboardPage,
          meta: { requiresAuth: true, title: 'Dashboard' }
        }
      ]
    },
     {
      path: '/management-user',
      component: AppLayout,
      children: [
        {
          path: '',          
          name: 'manangemen-user',
          component: IndexUser,
          meta: { requiresAuth: true, title: 'User' }
        }
      ]
    },
    {
    path: '/',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        name: 'login',
        component: Login,
        meta: { requiresGuest: true, title: 'Login' }
      },
      {
        path: 'register',
        name: 'register',
        component: Register,
        meta: { requiresGuest: true, title: 'Register' }
      }
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