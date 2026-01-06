<template>
  <div class="min-h-screen bg-neutral-primary-soft">
    <!-- Top Navbar -->
    <TopNavBar @toggle-sidebar="toggleSidebar" />

    <!-- Sidebar -->
    <SideBar :open="sidebarOpen" @toggle="toggleSidebar" />

    <!-- Main Content -->
    <main
      class="pt-14 transition-all duration-300"
      :style="{
            marginLeft: sidebarOpen ? '256px' : '64px'
          }"
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
