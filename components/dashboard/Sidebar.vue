<script setup>
import { useUIStore } from '@/stores/useUIStore';

const colorMode = useColorMode();
const ui = useUIStore();

onMounted(() => {
  ui.updateScreen();
  window.addEventListener('resize', ui.updateScreen);
});

onUnmounted(() => {
  window.removeEventListener('resize', ui.updateScreen);
});

const links = [
  {
    label: 'Checklist',
    icon: 'i-heroicons-clipboard-document-check',
    to: '/dashboard/checklist',
  },
  {
    label: 'Entries',
    icon: 'i-heroicons-pencil-square',
    to: '/dashboard/entries',
  },
];
</script>

<template>
  <!-- Desktop Sidebar -->
  <aside
    v-if="!ui.isMobile"
    :class="[
      'h-screen sticky top-0 border-r border-gray-200 bg-white dark:bg-neutral-900 dark:border-neutral-800 transition-all duration-300 ease-in-out',
      ui.isCollapsed ? 'w-20' : 'w-64',
    ]"
  >
    <!-- Header -->
    <div
      class="h-20 flex items-center justify-center px-4 border-b border-gray-200 dark:border-neutral-800"
    >
      <NuxtImg
        :src="
          colorMode.value === 'dark' ? '/logo-hwg-white.webp' : '/logo-hwg.png'
        "
        class="w-auto"
        :class="[ui.isCollapsed ? 'h-10 mx-auto' : 'h-12']"
      />
      <!-- Collapse toggle -->
    </div>

    <!-- Nav -->
    <nav class="p-4 space-y-2">
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
        :class="[
          $route.path.startsWith(link.to)
            ? 'bg-gray-200 dark:bg-gray-700 font-semibold'
            : '',
          ui.isCollapsed ? 'justify-center' : '',
        ]"
      >
        <UIcon :name="link.icon" class="w-5 h-5" />
        <span v-if="!ui.isCollapsed" class="truncate">{{ link.label }}</span>
      </NuxtLink>
    </nav>
  </aside>

  <!-- Mobile Drawer -->
  <USlideover
    v-if="ui.isMobile"
    v-model:open="ui.isDrawerOpen"
    side="left"
    class="w-[300px]"
  >
    <template #content>
      <div
        class="h-20 flex items-center justify-center px-4 border-b border-gray-200 dark:border-neutral-800"
      >
        <NuxtImg
          :src="
            colorMode.value === 'dark'
              ? '/logo-hwg-white.webp'
              : '/logo-hwg.png'
          "
          class="h-12 w-auto"
        />
      </div>
      <nav class="space-y-2">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="flex items-center gap-3 px-3 py-2 transition-colors text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          :class="{
            'bg-gray-200 dark:bg-gray-700 font-semibold':
              $route.path.startsWith(link.to),
          }"
          @click="ui.isDrawerOpen = false"
        >
          <UIcon :name="link.icon" class="w-5 h-5" />
          <span>{{ link.label }}</span>
        </NuxtLink>
      </nav>
    </template>
  </USlideover>
</template>
