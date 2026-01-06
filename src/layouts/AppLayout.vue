<template>
  <div class="min-h-screen bg-neutral-primary-soft">

    <!-- Top Navbar -->
    <TopNavBar @toggle-sidebar="toggleSidebar" />

    <!-- Sidebar -->
    <SideBar :open="sidebarOpen" @close="sidebarOpen = false" />

    <!-- Main Content -->
    <main
      class="pt-14 transition-all duration-300"
      :class="sidebarOpen ? 'sm:ml-64 ml-0' : 'sm:ml-16 ml-0'"
    >
      <div class="p-6">
        <router-view />
      </div>
    </main>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import TopNavBar from '@/components/TopNavBar.vue'
import SideBar from '@/components/SideBar.vue'

const sidebarOpen = ref(true)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}
</script>
