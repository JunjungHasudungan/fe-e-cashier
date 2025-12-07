<!-- <template>
    <header class="fixed w-full z-20 top-0 start-0">
        <nav class="bg-neutral-primary">
            <div class="flex flex-wrap  justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-7" alt="Flowbite Logo" />
                    <span class="self-center text-green-600 text-xl text-heading font-semibold whitespace-nowrap">{{ title }}</span>
                </a>
                <div class="flex items-center gap-2 space-x-6 rtl:space-x-reverse">
                    <router-link to="/login" class="text-sm font-medium text-blue-600 text-fg-brand hover:underline">Login</router-link>
                    <router-link to="/register" class="text-sm text-blue-600 text-body hover:underline">Register</router-link>
                </div>
            </div>
        </nav>
    </header>
</template> -->
<template>
    <header class="fixed w-full z-20 top-0 start-0">
        <nav class="bg-neutral-primary">
            <div class="flex justify-between items-center mx-auto max-w-screen-xl p-4">

                <!-- Logo -->
                <router-link to="/" class="flex items-center space-x-3">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-7">
                    <span class="text-green-600 text-xl font-semibold">{{ title }}</span>
                </router-link>

                <!-- Menu (Dynamic) -->
                <div class="flex items-center gap-4">

                    <!-- Jika belum login -->
                    <template v-if="!isLoggedIn">
                        <router-link to="/login" class="text-sm font-medium text-blue-600 hover:underline">
                            Login
                        </router-link>

                        <router-link to="/register" class="text-sm font-medium text-blue-600 hover:underline">
                            Register
                        </router-link>
                    </template>

                    <!-- Jika sudah login -->
                    <template v-else>
                        <router-link to="/dashboard" class="text-sm font-medium text-blue-200 hover:underline">
                            Dashboard
                        </router-link>

                        <button @click="logout"
                            class="text-sm font-medium text-red-400 hover:underline">
                            Logout
                        </button>
                    </template>

                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import DashboardPage from '@/pages/DashboardPage.vue'

const router = useRouter()
const title = import.meta.env.VITE_APP_NAME || "e-undangan"

const isLoggedIn = ref(false)

onMounted(() => {
    isLoggedIn.value = !!localStorage.getItem("token")
})

watch(
  () => router.fullPath,
  () => {
    isLoggedIn.value = !!localStorage.getItem("token")
  }
)

const logout = () => {
    localStorage.removeItem("token")
    isLoggedIn.value = false
    router.push("/")
}
</script>