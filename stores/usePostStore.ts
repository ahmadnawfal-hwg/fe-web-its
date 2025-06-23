import { defineStore } from 'pinia';
import type { ApiCallbacks } from '~/types/api';

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type PostPayload = Omit<Post, 'id'>;

export const usePostStore = defineStore('post', {
  state: () => ({
    data: [] as Post[],
    isLoading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchPosts() {
      const api = useApi();
      this.isLoading = true;
      this.error = null;

      await api.get<Post[]>('/posts', {
        onSuccess: (res) => {
          this.data = res;
        },
        onError: (err) => {
          this.error = typeof err === 'string' ? err : 'failed fetch data';
        },
        onSettled: () => {
          this.isLoading = false;
        },
      });
    },

    async addPost(payload: PostPayload, callbacks: ApiCallbacks<Post> = {}) {
      const api = useApi();

      await api.post<Post>('/posts', {
        data: payload,
        onSuccess: (res) => {
          callbacks.onSuccess?.(res);
        },
        onError: (err) => {
          callbacks.onError?.(err);
        },
        onSettled: () => {
          callbacks.onSettled?.();
        },
      });
    },
  },
});
