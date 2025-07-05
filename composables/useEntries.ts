import { useDebounce } from '@vueuse/core';

export const useEntries = () => {
  const entriesStore = useEntriesStore();
  const page = ref(1);
  const search = ref('');
  const debouncedSearch = useDebounce(search, 500);

  const getEntries = () => {
    entriesStore.getListEntries({
      page: page.value,
      search: debouncedSearch.value,
    });
  };

  onMounted(() => {
    getEntries();
  });

  watch(debouncedSearch, () => {
    page.value = 1;
    getEntries();
  });

  watch(page, () => {
    getEntries();
  });

  return {
    entriesStore,
    page,
    search,
  };
};
