<template>
    <label for="password" class="block mb-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300" > {{ props.label }} </label>
    <div class="relative">
        <input 
            @input="handleInput" :type="showPassword ? 'text' : 'password'"  id="password"
            class="bg-neutral-secondary-medium border border-default-medium text-gray-900 dark:text-gray-300 text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
            placeholder="•••••••••"
        />
        <button  type="button" @click="showPassword = !showPassword" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none" >
            <svg v-if="!showPassword"  xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5
                    c4.478 0 8.268 2.943 9.542 7
                    -1.274 4.057-5.064 7-9.542 7
                    -4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <svg v-else  xmlns="http://www.w3.org/2000/svg"  class="h-4 w-4"  fill="none"  viewBox="0 0 24 24"  stroke="currentColor"  >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13.875 18.825A10.05 10.05 0 0112 19
                    c-4.478 0-8.268-2.943-9.543-7
                    a9.97 9.97 0 011.563-3.029" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6.18 6.18A9.958 9.958 0 0112 5
                    c4.478 0 8.268 2.943 9.543 7
                    a9.97 9.97 0 01-4.043 5.132" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 3l18 18" />
            </svg>
        </button>
    </div>
    <span v-if="props.textError" class="mt-2 text-sm text-fg-danger-strong"> {{ props.textError }} </span>
</template>

<script setup>
import { ref } from 'vue';

    const emit = defineEmits(['update:modelValue'])
    const showPassword = ref(false)
    const props = defineProps({
        label: {
            type: String,
            required: true
        },
        modelValue: {
            type: String,
            default: ''
        },
        textError: {
            type: String,
            default: ''
        }
    })

    function handleInput(event) {
        emit('update:modelValue', event.target.value)
    }

</script>