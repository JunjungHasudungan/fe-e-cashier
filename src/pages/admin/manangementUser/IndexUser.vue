<template>
  <div class="space-y-8">

    <!-- Page Heading -->
     <Heading :card="isVisibable === 'user-table'" title="Management Pengguna" subTitle="Ringkasan Seluruh Pengguna aplikasi" />

        <button 
            v-show="isVisibable == 'user-table'"
            @click="createUser"
            class="inline-flex items-center  text-white bg-brand hover:bg-blue-800 box-border border border-blue-600 focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" 
            type="button">
       <svg class="w-4 h-4 me-1.5 -ms-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/></svg>
            User
        </button>

        <!-- Main modal -->
        <div  
            v-show="isVisibable == 'create-user'"  
            class="fixed inset-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <CardCreateUser @btn-close="closeFormCreate" />
        </div>

    
        <div v-show="isVisibable == 'user-table'"
             class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
            <div class="flex justify-end flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 p-4">
                <label for="input-group-1" class="sr-only">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
                    </div>
                    <input type="text" id="input-group-1" class="block w-full max-w-96 ps-9 pe-3 py-2 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search">
                </div>
            </div>
            <table class="w-full text-sm text-left rtl:text-right text-body">
                <thead class="text-sm text-body bg-neutral-secondary-medium border-b border-t border-default-medium">
                    <tr>
                        <th scope="col" class="px-6 py-3 font-medium">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3 font-medium">
                            Position
                        </th>
                        <th scope="col" class="px-6 py-3 font-medium">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3 font-medium">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                        <th scope="row" class="flex items-center px-6 py-4 text-heading whitespace-nowrap">
                            <div class="ps-3">
                                <div class="text-base font-semibold">Neil Sims</div>
                                <div class="font-normal text-body">neil.sims@flowbite.com</div>
                            </div>  
                        </th>
                        <td class="px-6 py-4">
                            React Developer
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <div class="h-2.5 w-2.5 rounded-full bg-success me-2"></div> Online
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <!-- Modal toggle -->
                            <a href="#" type="button" class="font-medium text-fg-brand hover:underline">Edit user</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


   </div>
</template>


<script setup> 
    import Heading from '@/components/Heading.vue';
    import CardCreateUser from '@/components/User/CardCreateUser.vue';
    import { ref } from 'vue';

    const isVisibable = ref("user-table")
    const createUser = ()=> isVisibable.value = 'create-user'

    const closeFormCreate =  () =>  {
        isVisibable.value = 'user-table'
    }

</script>