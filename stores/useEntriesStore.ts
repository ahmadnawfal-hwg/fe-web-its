import { defineStore } from 'pinia';
// import type { ApiCallbacks } from '~/types/api';

type errorResponse = {
  statusCode: number;
  message: string;
  code: string;
};

type EntriesParams = {
  page: number;
  search?: string;
};

export const useEntriesStore = defineStore('entries', {
  state: () => ({
    data: [] as string[],
    meta: null as any,
    isLoading: true,
    error: null as errorResponse | null,
  }),

  actions: {
    async getListEntries(params: EntriesParams) {
      const api = useApi();
      this.isLoading = true;
      this.error = null;
      this.data = [];
      this.meta = null;

      await api.get<string[]>('/entries', {
        params,
        onSuccess: (res: any) => {
          this.data = res.data;
          this.meta = res.meta;
        },
        onError: (err) => {
          this.error = err;
        },
        onSettled: () => {
          this.isLoading = false;
        },
      });
    },

    // async createEntries(payload: EntriesPayload, callbacks: ApiCallbacks = {}) {
    //   const api = useApi();

    //   await api.post<EntriesPayload>('/posts', {
    //     data: payload,
    //     onSuccess: (res) => {
    //       callbacks.onSuccess?.(res);
    //     },
    //     onError: (err) => {
    //       callbacks.onError?.(err);
    //     },
    //     onSettled: () => {
    //       callbacks.onSettled?.();
    //     },
    //   });
    // },
  },
});
