<template>
    <div class="users-container">
        <div class="d-flex justify-space-between mb-3">
            <h2 class="text-h5 mb-6">Users</h2>

            <v-btn flat color="primary" rounded="xl" density="comfortable">
                Create New
                <template #append>
                    <PlusIcon :size="20" />
                </template>
            </v-btn>
        </div>

        <v-card elevation="10">

            <v-data-table :headers="headers" :items="UserItems" sticky :loading="loading" color="primary">


                <template #item.action>
                    <PencilIcon class="cursor-pointer" color="gray" stroke-width="1.2" :size="18" />
                    <TrashIcon class="cursor-pointer" color="#ff2825" stroke-width="1.2" :size="18" />
                </template>

                <template #bottom></template>
            </v-data-table>
        </v-card>

    </div>
</template>

<script setup lang="ts">
import { PencilIcon } from 'vue-tabler-icons';
import { TrashIcon } from 'vue-tabler-icons';
import { PlusIcon } from 'vue-tabler-icons';
import UserItems from './userItems'

const headers = [
    { title: 'ID', value: 'id', },
    {
        title: 'Username',
        value: 'username',
    },
    { title: 'Full Name', value: 'fullName', },
    { title: 'Email', value: 'email', },
    {
        title: 'Age', value: 'age',
    },
    {
        title: 'Country', value: 'country',
    },
    {
        title: 'Action', value: 'action', align: 'end',
    },
]

const loading = ref(true)

onMounted(()=>{
    setTimeout(()=>{
        loading.value = false
    }, 1000)
})
</script>