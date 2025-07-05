import { defineStore } from 'pinia';
import type { ApiCallbacks } from '~/types/api';
import type { User } from '~/types/user';

type LoginPayload = {
  username: string;
  password: string;
};

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null as string | null,
    user: null as User | null,
  }),
  actions: {
    setToken(data: string | null) {
      const cookie = useCookie<string | null>('token');
      this.token = data;
      cookie.value = data;
    },
    setUser(data: User | null) {
      this.user = data;
    },
    loadToken() {
      const cookie = useCookie<string | null>('token');
      this.token = cookie.value;
    },
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
      this.setToken(null);
      this.setUser(null);
    },
  },
});
