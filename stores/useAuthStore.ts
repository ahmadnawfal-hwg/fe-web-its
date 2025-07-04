import { defineStore } from 'pinia';
import type { ApiCallbacks } from '~/types/api';

type LoginPayload = {
  username: string;
  password: string;
};

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null as string | null,
  }),
  actions: {
    async onLogin(payload: LoginPayload, callbacks: ApiCallbacks = {}) {
      const api = useApi();

      await api.post<LoginPayload>('/auth/login', {
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
    onLogout() {
      this.token = null;
    },
  },
});
