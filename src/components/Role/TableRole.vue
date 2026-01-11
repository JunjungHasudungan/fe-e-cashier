<template>
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
</template>
<script setup>

</script>