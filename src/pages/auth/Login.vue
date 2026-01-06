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
                        <p 
                            v-if="loginErrors.email"
                            class="mt-2.5 font-light dark:text-red-600 text-fg-danger-strong">
                            <span class="font-medium">{{ loginErrors.email }}</span>
                        </p>
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block mb-2.5 text-sm font-medium text-heading" >
                            Your password
                        </label>
                        <div class="relative">
                            <input v-model="userLogin.password" :type="showPassword ? 'text' : 'password'"  id="password"
                            class="caret-white w-full  rounded-lg  bg-neutral-secondary-medium border border-default-medium  text-heading text-sm focus:ring-brand focus:border-brand px-3 py-2.5 pr-10  shadow-xs placeholder:text-body"  placeholder="•••••••••"
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

                        <!-- ERROR -->
                        <p
                            v-if="loginErrors.password"
                            class="mt-2 text-sm text-fg-danger-strong"
                        >
                            {{ loginErrors.password }}
                        </p>
                        </div>

                    <button 
                        type="submit" 
                        :disabled="loadingProcess.disable" 
                        class="flex items-center justify-center gap-2 text-white bg-brand border rounded-md  hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium text-sm px-4 py-2.5 focus:outline-none w-full mb-3">
                    <svg  
                        v-if="loadingProcess.isLoading" 
                        class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                        <path  class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>

                    <span>  {{ loadingProcess.isLoading ? 'Processing...' : 'Login' }}  </span>
                    </button>

                    <div class="text-sm font-medium text-body">Belum punya akun? 
                        <router-link to="/register" class="text-fg-brand hover:underline">Register</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div> 
</template>

<script setup>
    import { reactive,ref } from 'vue';
    import auth from '@/services/authentication/auth';
    import LoginValidator, { loginErrors } from '@/services/helpers/LoginValidator'
    // import route
    import { useRouter } from 'vue-router'
    import router from '@/routes';


    // membuat object userRegister
    const userLogin = reactive({ email: '', password: '' })
    const loadingProcess = reactive({ isLoading: false, disable: false })
    const showPassword = ref(false)
    const togglePassword = () => {
        showPassword.value = !showPassword.value
    }
    const submitLogin = async ()=> {
        try {
            loadingProcess.isLoading = true
            loadingProcess.disable = true
            // mengosongkan objek errors terlebih dahulu
            LoginValidator.resetErrors()

            if (!LoginValidator.validateAll(userLogin)) return

            // kirim data ke backend
            const response = await auth.login(userLogin);

            localStorage.setItem("token", response.data.token.value);
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

