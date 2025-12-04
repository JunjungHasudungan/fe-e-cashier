<template>
    <div class="rounded-sm flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-md max-h-full">
            <!-- Modal content -->
            <div class="bg-gray-800 relative border border-default rounded-sm shadow-sm p-4 md:p-6">
                <!-- Modal body -->
                <form action="#" class="pt-2 md:pt-3">
                    <div class="mb-4">
                        <label for="email" class="block mb-2.5 text-sm font-medium text-heading">Your email</label>
                        <input type="email" id="email" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="example@company.com" required />
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block mb-2.5 text-sm font-medium text-heading">Your password</label>
                        <input type="password" id="password" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="•••••••••" required />
                    </div>
                    <button type="submit" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none w-full mb-3">Login to your account</button>
                    <div class="text-sm font-medium text-body">Belum punya akun? 
                        <router-link to="/register" class="text-fg-brand hover:underline">Register</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div> 
</template>

<script setup>
    import { ref, reactive } from 'vue';
    import auth from '@/services/authentication/auth';

    // membuat object userRegister
    const userRegister = reactive({username: '', email: '', password: '', password_confirmation: ''})

    const register = async ()=> {
        // await 
    }
</script>

