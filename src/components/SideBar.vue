<template>
  <aside
    class="fixed top-0 left-0 z-40 h-full pt-14
         bg-neutral-primary-soft border-e border-default
         transition-[width] duration-300"
    :class="open ? 'w-64' : 'w-16'"
  >

    <!-- Collapse Button -->
    <button
      @click="$emit('toggle')"
      class="absolute -right-3 top-20 w-6 h-6 bg-neutral-secondary-medium
             border border-default rounded-full flex items-center justify-center"
    >
      <svg  v-if="open" class="w-4 h-4 text-heading" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-width="2"  d="M15 19l-7-7 7-7" />
      </svg>

      <svg v-else
        class="w-4 h-4 text-heading" fill="none" stroke="currentColor" viewBox="0 0 24 24"  >
        <path stroke-linecap="round" stroke-width="2"   d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Menu -->
    <ul class="px-3 py-4 space-y-1 font-medium">
      <SideBarItem label="Dashboard" :icon="IconHome" :open="open" to="/dashboard" />
      <SideBarItem label="Inbox" :icon="IconInbox" :open="open" badge="2" />
      <SideBarItem label="Management User" :icon="IconUser" :open="open" to="/management-user"/>
      <SideBarItem label="Products" :icon="IconWallet" :open="open" />
    </ul>

  </aside>
</template>

<script setup>
import SideBarItem from './SideBarItem.vue'
import IconHome from './icons/IconHome.vue';
import IconInbox from './icons/iconInbox.vue';
import IconUser from './icons/IconUser.vue';
import IconWallet from './icons/IconWallet.vue';

defineProps({
  open: Boolean
})
</script>
