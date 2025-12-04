<template>
    <div class="rounded-sm flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-md max-h-full">
            <!-- Modal content -->
            <div class="bg-gray-800 relative border border-default rounded-sm shadow-sm p-4 md:p-6">
                <!-- Modal body -->
                <form @submit.prevent="submitRegister" class="pt-2 md:pt-4">
                    <div class="mb-4">
                        <label for="email" class="block mb-2.5 text-sm font-medium text-heading">
                            Username
                        </label>
                        <input 
                            type="text" 
                            id="username" 
                            v-model="userRegister.name"
                            class="rounded-lg bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
                            placeholder="Jhon Doe" 
                        />
                        <p 
                            v-if="errors.name"
                            class="mt-2.5 text-sm text-fg-danger-strong">
                            <span class="font-medium">{{ errors.name }}</span>
                        </p>
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block mb-2.5 text-sm font-medium text-heading">
                            Your email
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            v-model="userRegister.email"
                            class="rounded-lg bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
                            placeholder="jhon@example.com" 
                        />
                        <p 
                            v-if="errors.email"
                            class="mt-2.5 text-sm text-fg-danger-strong">
                            <span class="font-medium">{{ errors.email }}</span>
                        </p>
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block mb-2.5 text-sm font-medium text-heading">Your password</label>
                        <input 
                            type="password" 
                            id="password" 
                            v-model="userRegister.password"
                            class="rounded-lg bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
                            placeholder="•••••••••"
                        />
                        <p 
                            v-if="errors.password"
                            class="mt-2.5 text-sm text-fg-danger-strong">
                            <span class="font-medium">{{ errors.password }}</span>
                        </p>
                    </div>
                    <div class="mb-4">
                        <label for="password_confirmation" class="block mb-2.5 text-sm font-medium text-heading">Your password confirmation</label>
                        <input 
                            type="password" 
                            id="password_confirmation" 
                            v-model="userRegister.password_confirmation"
                            class="rounded-lg bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
                            placeholder="•••••••••" 
                        />
                        <p 
                            v-if="errors.password_confirmation"
                            class="mt-2.5 text-sm text-fg-danger-strong">
                            <span class="font-medium">{{ errors.password_confirmation }}</span>
                        </p>
                    </div>
                    <button 
                        type="submit" 
                        class="text-white bg-brand border rounded-md hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none w-full mb-3">Register your account</button>
                    <div class="text-sm font-medium text-body">already has account? 
                        <router-link to="/login" class="text-fg-brand hover:underline">Login</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div> 
</template>

<script setup>
    import { reactive } from 'vue';
   
    // import logic untuk register
    import auth from '@/services/authentication/auth';

    // import validation untuk validasi inputan
    import { required, min, emailFormat } from '@/utils/validator';
    
    // membuat object inputan userRegister
    const userRegister = reactive({ name: '', email: '', password: '', password_confirmation: ''})

    // membut object error inputan user
    const errors = reactive({ name: '', email: '', password: '', password_confirmation: ''})

    // membut object fieldName inputan user
    const fields = reactive({ name: 'nama', email: 'email', password: 'password', password_confirmation: 'password konfirmasi'})

    /* 
    next todo:
    membuat tombol disable, dan memberkan loading icon
    menampilkan password yang dihide
    */
    // membuat reset inputan
    const resetFieldRegister = ()=> {
        // mengosongkan objek user Register
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
    const submitRegister =async ()=> {

        if (!validator()) {
            console.log("Ada error input");
            return;
        }

        try {
            // kirim data ke backend
            const response = await auth.register(userRegister);
            console.log("data user register:", response);

            // redirect ke halaman dashbaord
        } catch (error) {
            // pengecekan error response status dari backend
            if(error.response && error.response.status === 409) {
                errors.email = error.response.data.message;
                console.error("Register gagal:", error);
            return;
        }
        console.error("Register gagal:", error.response);
    }
}

</script>

