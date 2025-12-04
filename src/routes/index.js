// membuat router 
import { createRouter, createWebHistory } from 'vue-router'

// AppLayout untuk layout yang sudah berhasil login ataupun register
import AppLayout from '@/layouts/App.vue'

// AppLayout untuk layout yang sedang proses login ataupun register
import GuestLayout from '@/layouts/Guest.vue'

// import components
import WelcomePage from '@/pages/WelcomePage.vue'
import Register from '@/pages/auth/Register.vue'
import Login from '@/pages/auth/Login.vue'

// membuat routes untuk semua komponents
const routes = [
  {
    path: '/',
    component: AppLayout, // layout dengan navbar
    children: [
      { path: '', name: 'home', component: WelcomePage,  meta: { title: 'Welcome' } },
    ]
  },
  {
    path: '/',
    component: GuestLayout,
    children: [
      { path: 'register', component: Register, name: 'register', meta: { title: 'register' } },
      { path: 'login', component: Login, name: 'login', meta: { title: 'login' } },
    ]
  },
]

// membuat object router
const router = createRouter({
    history: createWebHistory(),
    routes
})

router.afterEach((to) => {
  const appName = import.meta.env.VITE_APP_NAME
  document.title = to.meta.title
    ? `${to.meta.title} | ${appName}`
    : appName
})

// melakukan export router
export default router