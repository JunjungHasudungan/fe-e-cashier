<template>
  <div class="space-y-8">

    <!-- Page Heading -->
        <Heading 
            :card="isVisibable === 'role-table'" 
            title="Management Jabatan" 
            subTitle="Ringkasan Seluruh Pengguna aplikasi" 
        />

        <button 
            v-show="isVisibable == 'role-table'"
            @click="createRole"
            class="inline-flex items-center  text-white bg-brand hover:bg-blue-800 box-border border border-blue-600 focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" 
            type="button">
       <svg class="w-4 h-4 me-1.5 -ms-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/></svg>
            Jabatan
        </button>

        <!-- Main modal -->
        <div  
            v-show="isVisibable == 'create-role'"  
            class="fixed inset-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <CardCreateRole @btn-close="closeFormCreate" :data-provide="state.roles"/>
        </div>

    
        <div v-show="isVisibable == 'role-table'"
             class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
            <div class="flex justify-end flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 p-4">
                <SearchRole />
            </div>
           <TableRole />
        </div>


   </div>
</template>


<script setup> 
    import { ref, onMounted } from 'vue';
    import Heading from '@/components/Heading.vue';
    import CardCreateRole from '@/components/Role/CardCreateRole.vue';
    import SearchRole from '@/components/Role/SearchRole.vue';
    import TableRole from '@/components/Role/TableRole.vue';
    import { useRoleStore } from '@/services/managementRole/role';

    const isVisibable = ref("role-table")
    const createRole = ()=> isVisibable.value = 'create-role'
    const { state, getRoles } = useRoleStore()

    const closeFormCreate =  () =>  {
        isVisibable.value = 'role-table'
    }

    onMounted(()=> {
        getRoles()
    })

</script>