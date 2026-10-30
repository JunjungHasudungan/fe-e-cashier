// membuat router
import { createRouter, createWebHistory } from "vue-router";

// AppLayout untuk layout yang sudah berhasil login ataupun register
import AppLayout from "@/layouts/AppLayout.vue";

// import components
import WelcomePage from "@/pages/WelcomePage.vue";
import Register from "@/pages/auth/Register.vue";
import Login from "@/pages/auth/Login.vue";
import WelcomeLayout from "@/layouts/WelcomeLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import IndexUser from "@/pages/admin/manangementUser/IndexUser.vue";
import IndexRole from "@/pages/admin/ManangementRole/IndexRole.vue";
// import komponen admin dashboard
import AdminDashboard from "@/pages/admin/AdminDashboard.vue";
import MemberDashboard from "@/pages/member/MemberDashboard.vue";
// import komponen member dashboard 

// membuat routes untuk semua komponents
const routes = [
  {
    path: "/",
    component: WelcomeLayout,
    children: [
      {
        path: "",
        name: "home",
        component: WelcomePage,
        meta: { title: "Welcome" },
      },
    ],
  },
  {
    path: "/admin/dashboard",
    component: AppLayout,
    children: [
      {
        path: "",
        name: "admin-dashboard",
        component: AdminDashboard,
        meta: { requiresAuth: true, title: "AdminDashboard", roles: ["admin"] },
      },
    ],
  },
  {
    path: "/member/dashboard",
    component: AppLayout,
    children: [
      {
        path: "",
        name: "member-dashboard",
        component: MemberDashboard,
        meta: {
          requiresAuth: true,
          title: "MemberDashboard",
          roles: ["member"],
        },
      },
    ],
  },
  {
    path: "/management-user",
    component: AppLayout,
    children: [
      {
        path: "",
        name: "manangement-user",
        component: IndexUser,
        meta: { requiresAuth: true, title: "User" },
      },
    ],
  },
  {
    path: "/management-role",
    component: AppLayout,
    children: [
      {
        path: "",
        name: "management-role",
        component: IndexRole,
        meta: { requiresAuth: true, title: "Jabatan tambahan" },
      },
    ],
  },
  {
    path: "/",
    component: AuthLayout,
    children: [
      {
        path: "login",
        name: "login",
        component: Login,
        meta: { requiresGuest: true, title: "Login" },
      },
      {
        path: "register",
        name: "register",
        component: Register,
        meta: { requiresGuest: true, title: "Register" },
      },
    ],
  },
];

// membuat object router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (to.meta.requiresAuth && !token) {
    return "/login";
  }

  if (to.meta.requiresGuest && token) {
    if (user?.role === "admin") {
      return "/admin/dashboard";
    }

    if (user?.role === "member") {
      return "/member/dashboard";
    }
  }

  // memeriksa apakah role pengguna sesuai dengan route yang diizinkan
  if (to.meta.roles && !to.meta.roles.includes(user?.role)) {
    if (user?.role === "admin") {
      return "/admin/dashboard";
    }

    if (user?.role === "member") {
      return "/member/dashboard";
    }

    // Jika informasi user tidak valid, arahkan ke halaman login
    return "/login";
  }
});

router.afterEach((to) => {
  const appName = import.meta.env.VITE_APP_NAME;
  document.title = to.meta.title ? `${to.meta.title} | ${appName}` : appName;
});

// melakukan export router
export default router;
