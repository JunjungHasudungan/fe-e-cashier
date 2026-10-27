<template>
    <div class="mb-4">
        <label for="email" class="block mb-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300">{{ props.label }}</label>
        <input 
            :type="props.type" 
            :id="props.id" 
            @input="handleInput"
            class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm text-gray-900 rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
            :placeholder="props.placeholder" 
            :class="{ 'pr-10': $slots.suffix }"
        />
        <div v-if="$slots.suffix"  class="absolute inset-y-0 right-3 flex items-center">
            <slot name="suffix" />
        </div>
         <p v-if="props.errorText" class="mt-2.5 text-sm text-fg-danger-strong"> {{ props.errorText }} </p>
    </div>
</template>

<script setup>
    const emit = defineEmits(['update:modelValue'])

    const props = defineProps({
        modelValue: {
            type: String,
            default: ''
        },
        errorText: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'text'
        },
        id: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            default: 'example@company.com'
        }
    })

    function handleInput(event) {
        emit('update:modelValue', event.target.value)
    }
</script>