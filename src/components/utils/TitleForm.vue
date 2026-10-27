<template>
    <h5 :class="classUtilties">{{ props.title }}</h5>
</template>

<script setup>
    const props = defineProps({
        title: {
            type: String,
            default: 'Something greate'
        }, 
        classUtilties: {
            type: String,
            default: 'text-xl font-semibold text-center dark:text-gray-200 text-green-900 text-heading mb-6'
        }
    })
</script>