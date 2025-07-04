<script setup>
import { useUIStore } from '@/stores/useUIStore';

const colorMode = useColorMode();
const ui = useUIStore();

const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
  <header
    class="sticky top-0 z-20 h-20 flex items-center justify-between px-4 border-b border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
  >
    <div>
      <UButton
        v-if="ui.isMobile"
        icon="i-heroicons-bars-3"
        variant="ghost"
        class="cursor-pointer"
        @click="ui.isDrawerOpen = true"
      />

      <UButton
        v-else
        icon="i-heroicons-chevron-left"
        variant="outline"
        size="sm"
        class="transition-transform cursor-pointer"
        :class="{ 'rotate-180': ui.isCollapsed }"
        @click="ui.isCollapsed = !ui.isCollapsed"
      />
    </div>

    <div class="flex items-center gap-4">
      <UButton
        v-if="isMounted"
        variant="ghost"
        :icon="
          colorMode.preference === 'dark'
            ? 'i-heroicons-moon'
            : 'i-heroicons-sun'
        "
        @click="
          colorMode.preference =
            colorMode.preference === 'dark' ? 'light' : 'dark'
        "
      />
      <UAvatar src="https://i.pravatar.cc/100" alt="User" size="sm" />
    </div>
  </header>
</template>
