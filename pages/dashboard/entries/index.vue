<script setup lang="ts">
import { getEntryColumns } from '@/components/tables/columns/entries-columns';

definePageMeta({
  layout: 'dashboard',
});

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

const rows = [
  {
    can_complete: false,
    can_edit: false,
    can_process: false,
    code: 'Entry-HTIDF1A',
    date: '2025-06-16T17:00:00.000000Z',
    id: 311,
    status: 0,
    outlet: { id: 32, name: 'AMBYAR SUPERCLUB SENAYAN' },
    users: [
      { id: 5, name: 'FAZRY YAHYA DARMAWAN S' },
      { id: 6, name: 'SYAMGIANTO' },
    ],
  },
  {
    can_complete: false,
    can_edit: false,
    can_process: false,
    code: 'Entry-KJEW02B',
    date: '2025-06-17T17:00:00.000000Z',
    id: 312,
    status: 1,
    outlet: { id: 33, name: 'KOPI NYATA JAKARTA' },
    users: [
      { id: 7, name: 'NADIRA ANGGRAENI' },
      { id: 8, name: 'REZA PRATAMA' },
    ],
  },
  {
    can_complete: false,
    can_edit: false,
    can_process: false,
    code: 'Entry-XTQPW3C',
    date: '2025-06-18T17:00:00.000000Z',
    id: 313,
    status: 2,
    outlet: { id: 34, name: 'WARUNG NGOPI BENHIL' },
    users: [
      { id: 9, name: 'NINA SAFITRI' },
      { id: 10, name: 'ADE KURNIAWAN' },
    ],
  },
  {
    can_complete: false,
    can_edit: false,
    can_process: false,
    code: 'Entry-YUIER4D',
    date: '2025-06-19T17:00:00.000000Z',
    id: 314,
    status: 3,
    outlet: { id: 35, name: 'DEPOT ENAK BANGET' },
    users: [
      { id: 11, name: 'BUDI HARTONO' },
      { id: 12, name: 'RINA AMALIA' },
    ],
  },
  {
    can_complete: false,
    can_edit: false,
    can_process: false,
    code: 'Entry-WOQPL5E',
    date: '2025-06-20T17:00:00.000000Z',
    id: 315,
    status: 3,
    outlet: { id: 36, name: 'NASGOR PAK JOKO' },
    users: [
      { id: 13, name: 'ANDRE MAULANA' },
      { id: 14, name: 'MAYA RIZKI' },
    ],
  },
];

const page = 1;
</script>

<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-3xl font-bold">Entries</h1>
    <div class="flex justify-between items-center gap-4">
      <div>
        <UInput
          icon="i-lucide-search"
          size="lg"
          variant="outline"
          placeholder="Search..."
        />
      </div>
      <div class="flex gap-4 items-center">
        <USelect
          v-model="valueStatus"
          value-key="id"
          :items="optionStatus"
          class="w-36"
          size="lg"
        />
        <UButton icon="i-lucide-plus" size="lg" class="cursor-pointer"
          >Create Entries</UButton
        >
      </div>
    </div>
    <UCard
      :ui="{
        body: 'p-0',
        root: 'rounded-sm',
      }"
    >
      <UTable :columns="getEntryColumns()" :data="rows" />
    </UCard>
    <div class="flex justify-end">
      <UPagination
        v-model:page="page"
        show-edges
        :sibling-count="1"
        :total="100"
      />
    </div>
  </div>
</template>
