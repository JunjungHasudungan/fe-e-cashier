<template>
    <div class="relative w-full max-w-lg max-h-full">
        <!-- Modal content -->
        <div class="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-3 md:p-4">
            <!-- Modal body -->
            <form @submit.prevent="btnSendDataUser">
                <div class="grid gap-4 grid-cols-2 py-1 md:py-2">
                    <div class="col-span-2">
                        <label for="name" class="block mb-2.5 text-sm font-medium text-heading">Name</label>
                        <input 
                            type="text" 
                            v-model="user.name" 
                            id="name" 
                            class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
                            placeholder="Type product name"
                        >
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <label for="price" class="block mb-2.5 text-sm font-medium text-heading">Price</label>
                        <input 
                            type="number" 
                            name="price" 
                            id="price" 
                            class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
                            placeholder="$2999" 
                        >
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <label for="category" class="block mb-2.5 text-sm font-medium text-heading">Category</label>
                        <select id="category" class="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body">
                            <option selected="">Select category</option>
                            <option value="TV">TV/Monitors</option>
                            <option value="PC">PC</option>
                            <option value="GA">Gaming/Console</option>
                            <option value="PH">Phones</option>
                        </select>
                    </div>
                    <div class="col-span-2">
                        <label for="description" class="block mb-2.5 text-sm font-medium text-heading">Product Description</label>
                        <textarea id="description" rows="4" class="block bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body" placeholder="Write product description here"></textarea>                    
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
    import auth from '@/services/authentication/auth';
    const user = reactive({ name: '', email: '', password: '', role: '' })
    const listRole = ref({ student: 'student', teacher: 'teacher', parent: 'parent' })
    const btnSendDataUser = async ()=> { 
        try {
            console.log(user)
            const result = await auth.register(user);
            
        } catch (error) {
            
        }
    }
</script>