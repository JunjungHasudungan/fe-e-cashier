<template>
  <div class="min-h-screen bg-gray-900">

    <!-- Navigation -->
    <NavigationBar />

    <!-- Page Heading -->
    <header v-if="header" class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <!-- tampilkan header -->
        <slot name="header" />
      </div>
    </header>

    <!-- Page Content -->
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
import { useSlots } from 'vue'
import NavigationBar from '@/components/NavigationBar.vue'

// cek apakah slot header diberikan
const slots = useSlots()
const header = slots.header
</script>