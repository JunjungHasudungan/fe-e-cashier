<template>
    <div v-show="card">
      <h1 class="text-2xl font-semibold text-heading"> {{ title }} </h1>
      <p class="text-sm text-body mt-1"> {{ subTitle }} </p>
    </div>
</template>

<script setup>
    defineProps({
        title: String,
        subTitle: String,
        card: Boolean
    })
</script>