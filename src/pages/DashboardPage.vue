<template>
  <div class="space-y-8">

    <!-- Page Heading -->
     <Heading :card="isVisable === 'data-table'" title="Dashboard" subTitle="Ringkasan statistik aplikasi" />

    <!-- 3 Card Statistik -->
    <div class="grid grid-cols-12 gap-6">

      <div
        class="col-span-12 sm:col-span-6 lg:col-span-4
               bg-neutral-secondary-medium border border-default
               rounded-xl p-6 shadow-sm"
      >
        <p class="text-sm text-body">Users</p>
        <p class="text-2xl font-semibold text-heading mt-1">1.245</p>
      </div>

      <div
        class="col-span-12 sm:col-span-6 lg:col-span-4
               bg-neutral-secondary-medium border border-default
               rounded-xl p-6 shadow-sm"
      >
        <p class="text-sm text-body">Orders</p>
        <p class="text-2xl font-semibold text-heading mt-1">356</p>
      </div>

      <div
        class="col-span-12 sm:col-span-6 lg:col-span-4
               bg-neutral-secondary-medium border border-default
               rounded-xl p-6 shadow-sm"
      >
        <p class="text-sm text-body">Revenue</p>
        <p class="text-2xl font-semibold text-heading mt-1">
          Rp 24.500.000
        </p>
      </div>

    </div>

    <!-- Card Besar -->
    <div
      class="bg-neutral-secondary-medium border border-default
             rounded-xl p-6 shadow-sm h-64"
    >
      <h3 class="text-sm font-medium text-heading mb-4">
        Statistik Bulanan
      </h3>

      <div
        class="flex items-center justify-center h-full
               border border-dashed border-default
               rounded-lg text-body text-sm"
      >
        Chart / konten besar di sini
      </div>
    </div>

  </div>
</template>

<script setup>
  import Heading from '@/components/Heading.vue';
  import { ref } from 'vue';

  const isVisable = ref("data-table")
</script>
