<template>
    <div class="rounded-sm shadow-xs flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-md max-h-full">
            <!-- Modal content -->
            <div class="dark:bg-gray-800 bg-white dark:text-red-600 text-red-700 relative border border-default rounded-lg border-gray-200 shadow-sm p-4 md:p-6">
                <!-- Modal body -->
                <form @submit.prevent="submitLogin" class="pt-2 md:pt-3">
                    <TitleForm title="Sign in to our platform" />
                    
                    <div class="mb-4">
                        <BaseInput 
                            v-model="userLogin.email" 
                            :errorText="loginErrors.email" 
                            label="Email" 
                            id="email"
                            type="email" 
                            placeholder="example@company.com"
                        />
                    </div>
                    <div class="mb-4">
                        
                        <label for="password" class="block mb-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300" > Your password </label>
                        <div class="relative">
                            <input 
                                v-model="userLogin.password" :type="showPassword ? 'text' : 'password'"  id="password"
                               class="bg-neutral-secondary-medium border border-default-medium text-gray-900 dark:text-gray-300 text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
                                placeholder="•••••••••"
                            />
                            <button  type="button" @click="togglePassword" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none" >
                            <svg v-if="!showPassword"  xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5
                                    c4.478 0 8.268 2.943 9.542 7
                                    -1.274 4.057-5.064 7-9.542 7
                                    -4.477 0-8.268-2.943-9.542-7z" />
                            </svg>

                            <!-- eye closed -->
                            <svg v-else  xmlns="http://www.w3.org/2000/svg"  class="h-5 w-5"  fill="none"  viewBox="0 0 24 24"  stroke="currentColor"  >
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
                        <span v-if="loginErrors.password" class="mt-2 text-sm text-fg-danger-strong"> {{ loginErrors.password }} </span>
                    </div>

                    <BtnSubmit 
                        :disabled="!isCompleted || loadingProcess.disable"
                        :loading="loadingProcess.disable" 
                        :completed="isCompleted"
                        change="bg-blue-600 hover:bg-blue-700 cursor-pointer"
                        label="Login"
                    />

                    <div class="text-sm font-medium text-body">Belum punya akun? 
                        <router-link to="/register" class="text-fg-brand hover:underline">Register</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div> 
</template>

<script setup>
    import { computed, reactive,ref } from 'vue';
    import auth from '@/services/authentication/auth';
    import LoginValidator, { loginErrors } from '@/services/helpers/LoginValidator'
    import BaseInput from '@/components/utils/BaseInput.vue';
    import BtnSubmit from '@/components/utils/BtnSubmit.vue';
    import TitleForm from '@/components/utils/TitleForm.vue';
    import router from '@/routes';


    // membuat object userRegister
    const userLogin = reactive({ email: '', password: '' })
    const loadingProcess = reactive({ isLoading: false, disable: false })
    const showPassword = ref(false)
    
    const togglePassword = () => {
        showPassword.value = !showPassword.value
    }

    const isCompleted = computed(()=> {
        return Object.values(userLogin).every(item=> String(item).trim() !== '')
    })

    const submitLogin = async ()=> {
        try {
            loadingProcess.isLoading = true
            loadingProcess.disable = true
            // mengosongkan objek errors terlebih dahulu
            LoginValidator.resetErrors()

            if (!LoginValidator.validateAll(userLogin)) return

            // kirim data ke backend
            const response = await auth.login(userLogin);

            // mengalihkan kehalaman dashboard
            router.push("/dashboard")
        } catch (error) {
            const errors = error?.response?.data?.errors
            // validasi jika error email
            if(errors?.email) {
                loginErrors.email = errors.email 
            }

            // validasi jika error password
            if(errors?.password) {
                loginErrors.password = errors.password 
            }

        }finally {
            loadingProcess.isLoading = false
            loadingProcess.disable = false
        }
    }
</script>

