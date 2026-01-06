<template>
  <div class="min-h-screen bg-gray-900">

    <NavigationBar />

    <main class="pt-20 flex items-center justify-center min-h-screen">
      <router-view />
    </main>

  </div>
</template>

<script setup>
    import NavigationBar from '@/components/NavigationBar.vue';
</script>

