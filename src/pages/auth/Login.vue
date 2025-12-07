<template>
    <div class="rounded-sm flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-md max-h-full">
            <!-- Modal content -->
            <div class="dark:bg-gray-800 bg-white dark:text-gray-600 text-gray-500 relative border border-default rounded-sm shadow-sm p-4 md:p-6">
                <!-- Modal body -->
                <form @submit.prevent="submitLogin" class="pt-2 md:pt-3">
                    <div class="mb-4">
                        <label for="email" class="block mb-2.5 text-sm font-medium text-heading">Your email</label>
                        <input 
                            v-model="userLogin.email" 
                            type="email" 
                            id="email" 
                            class="rounded-lg bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
                            placeholder="example@company.com"  />
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block mb-2.5 text-sm font-medium text-heading">Your password</label>
                        <input 
                            v-model="userLogin.password" 
                            type="password" id="password" 
                             class="rounded-lg bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
                            placeholder="•••••••••"  />
                    </div>
                    <button 
                        type="submit" 
                        class="text-white bg-brand border rounded-md hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none w-full mb-3">Login to your account</button>
                    <div class="text-sm font-medium text-body">Belum punya akun? 
                        <router-link to="/register" class="text-fg-brand hover:underline">Register</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div> 
</template>

<script setup>
    import { reactive } from 'vue';
    import auth from '@/services/authentication/auth';

    // membuat object userRegister
    const userLogin = reactive({ email: '', password: '' })

    const submitLogin = async ()=> {
        console.log('kesini')
    }
</script>

