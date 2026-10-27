<template>
    <button 
        type="submit" 
        :disabled="!props.completed || props.loading" 
        :class="[
            'flex items-center justify-center gap-2 text-white border rounded-lg shadow-xs font-medium text-sm px-4 py-2.5 focus:outline-none w-full mb-3',
            props.completed ? props.change : 'bg-gray-400 cursor-not-allowed opacity-60'
        ]">
    <svg  
        v-if="props.loading" 
        class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path  class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>

    <span>  {{ props.loading ? 'Loading...' : props.label }}  </span>
    </button>
</template>

<script setup>
    const props = defineProps({
        loading: {
            type: Boolean,
            required: true
        },
        completed : {
            type: Boolean,
            required: true
        },
        change: {
            type: String,
            default: 'hover:cursor-pointer flex items-center justify-center gap-2 text-white bg-blue-400 border rounded-lg hover:bg-blue-500 focus:ring-4 focus:ring-brand-medium shadow-xs font-medium text-sm px-4 py-2.5 focus:outline-none w-full mb-3'
        },
        label: {
            type: String,
            default: 'btn'
        }
    })
</script>