<template>
    <div class="flex items-center justify-between border-b border-default pb-4 md:pb-5">
        <h3 class="text-lg font-medium text-heading">
            {{ props.title }}
        </h3>
        <button type="button" class="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center" data-modal-hide="static-modal">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
            <span class="sr-only">Close modal</span>
        </button>
    </div>
</template>

<script setup>

    const props = defineProps({
        title: {
            type: String,
            default: 'Write here.'
        },
    })
</script>