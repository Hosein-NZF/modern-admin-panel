<template>
  <div class="products-container">
    <div class="d-flex justify-space-between mb-3">
      <h2 class="text-h5 mb-6">Products</h2>

      <v-btn flat color="primary" rounded="xl" density="comfortable">
        Create New
        <template #append>
          <PlusIcon :size="20" />
        </template>
      </v-btn>
    </div>

    <v-card elevation="10">

      <v-data-table :headers="headers" :items="loading ? [] : productItems" sticky :loading="loading">

        <template v-slot:item.stock="{ item }">
          <div class="text-end d-flex justify-start">
            <v-tooltip>
              <template #activator="{ props }">
                <v-chip v-bind="props" :style="{ color: item.stock > 0 ? '#00b341' : 'rgb(244, 67, 54)' }"
                  :text="item.stock > 0 ? 'In stock' : 'Out of stock'" class="text-uppercase cursor-pointer" size="x-small" />
              </template>
              {{ item.stock }}
            </v-tooltip>
          </div>
        </template>

        <template #item.action>
          <PencilIcon class="cursor-pointer" color="gray" stroke-width="1.2" :size="18" @click="()=>{}"/>
          <TrashIcon class="cursor-pointer" color="#ff2825" stroke-width="1.2" :size="18" @click="()=>{}"/>
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
import productItems from './productItems'


const headers = [
  { title: 'ID', value: 'id', },
  {
    title: 'Name',
    value: 'name',
  },
  { title: 'Category', value: 'category', },
  { title: 'Price', value: 'price', },
  {
    title: 'Stock', value: 'stock', align: 'start',
  },
  {
    title: 'Action', value: 'action', align: 'end',
  },
]

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2000)
})
</script>