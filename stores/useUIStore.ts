import { defineStore } from 'pinia';

export const useUIStore = defineStore('ui', () => {
  const isDrawerOpen = ref(false);
  const isMobile = ref(false);
  const isCollapsed = ref(false);

  const updateScreen = () => {
    isMobile.value = window.innerWidth < 768;
    if (!isMobile.value) {
      isDrawerOpen.value = false;
    }
  };

  return {
    isDrawerOpen,
    isMobile,
    updateScreen,
    isCollapsed,
  };
});
