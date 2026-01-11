<template>
    <div class="relative w-full max-w-lg max-h-full">
        <!-- Modal content -->
        <div class="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-3 md:p-4">
            <!-- Modal body -->
            <form @submit.prevent="btnSendAdditionRole">
                <div class="grid gap-4 grid-cols-2 py-1 md:py-2">
                    <div class="col-span-2">
                        <label for="name" class="block mb-2.5 text-sm font-medium text-heading">Nama Jabatan Tambahan</label>
                        <input 
                            type="text" 
                            v-model="additionRole.name" 
                            id="name" 
                           class="w-full rounded-lg bg-[var(--color-neutral-secondary-soft)] border border-[var(--color-default-medium)]
                                    text-[var(--color-heading)] caret-[var(--color-heading)] placeholder:text-[var(--color-body)]
                                    px-3 py-2.5 pr-10 focus:ring-2 focus:ring-[var(--color-fg-brand)] focus:border-[var(--color-fg-brand)]" 
                            placeholder="Type product name"
                        >
                        <span v-if="errors.name" class="mt-2 text-sm text-fg-danger-strong"> {{ errors.name }} </span>
                    </div>
                    <div class="col-span-2">
                        <label for="category" class="block mb-2.5 text-sm font-medium text-heading">Jabatan Utama</label>
                        <select v-model="additionRole.role_id" id="category"  class="w-full rounded-lg bg-[var(--color-neutral-secondary-soft)] border border-[var(--color-default-medium)]
                                    text-[var(--color-heading)] caret-[var(--color-heading)] placeholder:text-[var(--color-body)]
                                    px-3 py-2.5 pr-10 focus:ring-2 focus:ring-[var(--color-fg-brand)] focus:border-[var(--color-fg-brand)]">
                            <option selected="">Select category</option>
                            <option v-for="role in props.dataProvide" :value="role.id" :key="role.id">{{ role.name }}</option>
                        </select>
                        <span v-if="errors.role_id" class="mt-2 text-sm text-fg-danger-strong"> {{ errors.role_id }} </span>
                    </div>
                </div>
                <div class="flex items-center space-x-4 pt-2 md:pt-4">
                    <button type="submit" class="inline-flex items-center  text-white bg-brand hover:bg-brand-strong box-border border border-blue-600 focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                        Submit
                    </button>
                    <button @click="$emit('btnClose')" type="button" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
    import { reactive, ref } from 'vue';
    import apiBackEnd from '@/utils/apiBackEnd';
    const additionRole = reactive({ name: '', role_id: ''})
    const errors = reactive({ name: '', role_id: '' })
    const props = defineProps({  
        dataProvide: {
        type: Array,
        default: () => []
        } 
    })
    const btnSendAdditionRole = async ()=> { 
        try {
            const result = await apiBackEnd.post('/addition-role', additionRole);
            console.log(result)
            
        } catch (error) {
            console.log(error)
        }
    }
</script>