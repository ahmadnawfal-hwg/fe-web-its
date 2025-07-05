<script setup lang="ts">
import { getEntryColumns } from '@/components/tables/columns/entries-columns';

definePageMeta({
  layout: 'dashboard',
});

const { entriesStore, page, search } = useEntries();

const optionStatus = ref([
  {
    label: 'All Status',
    id: 'all',
  },
  {
    label: 'Pending',
    id: '0',
  },
  {
    label: 'Submitted',
    id: '1',
  },
  {
    label: 'Processed',
    id: '2',
  },
  {
    label: 'Completed',
    id: '3',
  },
]);
const valueStatus = ref('all');
</script>

<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-3xl font-bold">Entries</h1>
    <div
      class="grid grid-cols-1 md:flex md:justify-between md:items-center gap-4"
    >
      <div>
        <UInput
          v-model="search"
          icon="i-lucide-search"
          size="lg"
          variant="outline"
          placeholder="Search..."
          class="w-full md:w-auto"
        />
      </div>
      <div class="flex flex-col md:flex-row gap-4 md:items-center">
        <USelect
          v-model="valueStatus"
          value-key="id"
          :items="optionStatus"
          class="w-full md:w-36"
          size="lg"
        />
        <UButton icon="i-lucide-plus" size="lg" class="cursor-pointer"
          >Create Entries</UButton
        >
      </div>
    </div>
    <Tables
      :loading="entriesStore.isLoading"
      :columns="getEntryColumns()"
      :data="entriesStore.data"
    />
    <div class="flex justify-end">
      <UPagination
        v-model:page="page"
        show-edges
        :sibling-count="1"
        :total="entriesStore.meta?.total ?? 0"
        :items-per-page="entriesStore.meta?.per_page ?? 15"
      />
    </div>
  </div>
</template>
