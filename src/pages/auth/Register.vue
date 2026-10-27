<template>
    <div class="rounded-sm flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-md max-h-full">
            <!-- Modal content -->
            <div class="dark:bg-gray-800 bg-white dark:text-gray-600 text-gray-500 relative border border-default border-gray-400 rounded-lg shadow-sm p-4 md:p-6">
                <!-- Modal body -->
                <form @submit.prevent="submitRegister" class="pt-1 md:pt-2">
                    <TitleForm title="Sign up to our platform" />
                    <div class="mb-2">
                        <BaseInput 
                            v-model="userRegister.name" 
                            :errorText="errors.name" 
                            label="nama" 
                            id="username"
                            type="text" 
                            placeholder="write your name"
                        />
                    </div>
                    <div class="mb-2">
                         <BaseInput 
                            v-model="userRegister.email" 
                            :error-text="errors.email" 
                            label="email" 
                            id="email"
                            type="email" 
                            placeholder="jhon@example.com"
                        />
                    </div>
                    <div class="mb-2">
                        <InputPassword 
                            label="password" 
                            v-model="userRegister.password" 
                            :text-error="errors.password"
                        />
                    </div>
                    <div class="mb-2">
                        <InputPassword 
                            label="password konfirmasi" 
                            v-model="userRegister.password_confirmation" 
                            :text-error="errors.password_confirmation"
                        />
                    </div>
                    <BtnSubmit 
                        :disabled="!isCompleted || loading.submit"
                        :loading="loading.disabled" 
                        :completed="isCompleted"
                        change="bg-blue-600 hover:bg-blue-700 cursor-pointer"
                        label="Register your account"
                    />
                    <div class="text-sm font-medium text-body">already has account? 
                        <router-link to="/login" class="text-fg-brand hover:underline">Login</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div> 
</template>

<script setup>
    import TitleForm from '@/components/utils/TitleForm.vue';
    import BaseInput from '@/components/utils/BaseInput.vue';
    import BtnSubmit from '@/components/utils/BtnSubmit.vue';
    import InputPassword from '@/components/utils/InputPassword.vue';
    import { computed, reactive } from 'vue';
    import auth from '@/services/authentication/auth';
    import router from '@/routes';

    // import validation untuk validasi inputan
    import { required, min, emailFormat } from '@/utils/validator';
    
    const userRegister = reactive({ name: '', email: '', password: '', password_confirmation: ''})
    const errors = reactive({ name: '', email: '', password: '', password_confirmation: ''})
    const loading = reactive({ submit: false, disabled: false })
    // membut object fieldName inputan user
    const fields = reactive({ name: 'nama', email: 'email', password: 'password', password_confirmation: 'password konfirmasi'})

    const isCompleted = computed(()=> {
        return Object.values(userRegister).every(item=> String(item).trim() !== '')
    })

    /* 
    next todo:
    membuat tombol disable, dan memberkan loading icon
    menampilkan password yang dihide
    */
    // membuat reset inputan
    const resetFieldRegister = ()=> {
        Object.keys(userRegister).forEach(key => {
            userRegister[key] = "";
        });
    }

    // membuat fungsi validasi inputan
    const validator = ()=> {
        // memberikan nilai isValid true
        let isValid = true;

        // menghapus errors
        Object.keys(errors).forEach(key => {
            errors[key] = "";
        });

        // validasi tidak ada name 
        errors.name = 
            required(userRegister.name, fields.name) || 
            min(userRegister.name, 4);

        // validasi tidak ada email
        errors.email = 
            required(userRegister.email, fields.email) || 
            emailFormat(userRegister.email);

        // validasi tidak ada passowrd
        errors.password = 
            required(userRegister.password, fields.password) || 
            min(userRegister.password, 6);

        // validasi tidak ada password_confirmation
        errors.password_confirmation = 
            required(userRegister.password_confirmation, fields.password_confirmation) || 
            min(userRegister.password_confirmation, 6) ||
            (userRegister.password === userRegister.password_confirmation ? "" : "Konfirmasi password tidak sama dengan password")

        Object.values(errors).forEach((value) => {
            if (value !== "") isValid = false;
        });
        // mengembalikan nilai isValid
        return isValid;
    }

    // membuat event submit
    const submitRegister = async ()=> {

        if (!validator()) {
            console.log("Ada error input");
            return;
        }

        try {
            loading.submit = true
            loading.disabled = true
            const response = await auth.register(userRegister);

            localStorage.setItem("token", response.data.token.value);

            // mengamlihkan ke path dashboard
             router.push("/dashboard")

        } catch (error) {
            // pengecekan error response status dari backend
            if (error.response && error.response.status === 409) {
                errors.email = error.response.data.message;
                console.error("Register gagal:", error.response.data);
            } else {
                console.error("Register gagal:", error);
            }
        } finally {
            loading.submit = false
            loading.disabled = false
        }

    }

</script>

