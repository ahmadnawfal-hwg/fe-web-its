<script setup>
import { useUIStore } from '@/stores/useUIStore';
import { useAuthStore } from '@/stores/useAuthStore';

const colorMode = useColorMode();
const ui = useUIStore();
const auth = useAuthStore();

const isMounted = ref(false);
const isOpenDropdown = ref(false);

function signOut() {
  auth.onLogout();
  navigateTo('/login');
}

onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
  <header
    :class="[
      'fixed top-0 z-20 h-20 w-full flex items-center justify-between px-4 border-b border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900',
      'transition-all duration-300 ease-in-out',
      ui.isCollapsed ? 'md:w-[calc(100%-5rem)]' : 'md:w-[calc(100%-16rem)]',
    ]"
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
        class="cursor-pointer"
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
      <UDropdownMenu
        v-model:open="isOpenDropdown"
        :content="{
          align: 'start',
          side: 'bottom',
          sideOffset: 8,
        }"
        :ui="{
          content: 'w-36',
        }"
        :items="[
          [
            {
              label: 'Sign out',
              icon: 'i-heroicons-arrow-left-on-rectangle',
              onSelect: signOut,
            },
          ],
        ]"
      >
        <UAvatar
          src="https://i.pravatar.cc/100"
          alt="User"
          size="sm"
          class="cursor-pointer"
        />
      </UDropdownMenu>
    </div>
  </header>
</template>
