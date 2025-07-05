<template>
  <div class="border border-muted relative p-4 z-[1] rounded-md !p-0">
    <UTable
      :columns="columns"
      :data="data"
      :ui="{
        ...ui,
      }"
      :loading="loading"
      v-bind="$attrs"
    >
      <template #empty>
        <div v-if="loading" class="space-y-2 p-4">
          <div v-for="i in 5" :key="i" class="flex gap-4 items-center">
            <USkeleton
              v-for="(col, j) in columns"
              :key="j"
              class="h-4 flex-1"
            />
          </div>
        </div>
        <p v-else class="text-center text-sm text-gray-500 py-6">
          No data found.
        </p>
      </template></UTable
    >
  </div>
</template>

<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui';

defineOptions({ inheritAttrs: false });

interface Props {
  columns: TableColumn<any>[];
  data: unknown[];
  loading?: boolean;
  ui?: Record<string, string>;
}

defineProps<Props>();
</script>
