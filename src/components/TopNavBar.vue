<template>
  <nav class="fixed top-0 z-50 w-full bg-neutral-primary-soft border-b border-default">
    <div class="px-4 py-3 flex items-center justify-between">

      <!-- Left -->
      <div class="flex items-center gap-3">

        <!-- Toggle Sidebar -->
        <button
          @click="$emit('toggle-sidebar')"
          class="text-heading hover:bg-neutral-secondary-medium p-2 rounded-base"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-width="2"
              d="M5 7h14M5 12h14M5 17h10" />
          </svg>
        </button>

        <span class="text-lg font-semibold text-heading">
          {{ appName }}
        </span>
      </div>

      <!-- Right -->
      <div class="relative">

        <button
          @click="open = !open"
          class="flex items-center gap-2 focus:outline-none"
        >
          <img
            class="w-8 h-8 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          />
        </button>

        <!-- Dropdown -->
        <div v-if="open" class="absolute right-0 mt-2 w-44 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg" >
          <div class="px-4 py-3 border-b border-default-medium">
            <p class="text-sm font-medium text-heading">{{ user.name }}</p>
            <p class="text-sm text-body truncate">{{ user.email }}</p>
          </div>

          <ul class="p-2 text-sm font-medium text-body">
            <li>
              <button
                class="w-full text-left p-2 hover:bg-neutral-tertiary rounded text-red-400"
                @click="logout"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed  } from 'vue'
import { useRouter } from 'vue-router'
import auth from '@/services/authentication/auth'

const router = useRouter()
const appName = import.meta.env.VITE_APP_NAME || 'Dashboard'
const open = ref(false)
const user = computed(() => auth.state.user)

const logout = () => {
  localStorage.removeItem('token')
  router.push('/')
}
</script>
