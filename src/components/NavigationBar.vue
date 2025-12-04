<template>
    <header class="fixed w-full z-20 top-0 start-0">
        <nav class="bg-neutral-primary">
            <div class="flex flex-wrap  justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-7" alt="Flowbite Logo" />
                    <span class="self-center text-green-600 text-xl text-heading font-semibold whitespace-nowrap">{{ title }}</span>
                </a>
                <div class="flex items-center gap-2 space-x-6 rtl:space-x-reverse">
                    <router-link to="/login" class="text-sm font-medium text-blue-600 text-fg-brand hover:underline">Login</router-link>
                    <router-link to="/register" class="text-sm text-blue-600 text-body hover:underline">Register</router-link>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
    const title = import.meta.env.VITE_APP_NAME || "e-undangan"
</script>