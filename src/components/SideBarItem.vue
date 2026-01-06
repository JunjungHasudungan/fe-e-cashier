<template>
  <router-link
    :to="to || '#'"
    class="flex items-center gap-3 px-3 py-2 rounded-base
           text-body hover:bg-neutral-tertiary hover:text-heading"
  >
    <span class="text-lg">{{ icon }}</span>

    <span v-if="open" class="flex-1 whitespace-nowrap">
      {{ label }}
    </span>

    <span
      v-if="badge && open"
      class="text-xs bg-danger-soft text-fg-danger-strong
             border border-danger-subtle px-2 rounded-full"
    >
      {{ badge }}
    </span>
  </router-link>
</template>

<script setup>
defineProps({
  label: String,
  icon: String,
  open: Boolean,
  badge: String,
  to: String
})
</script>
