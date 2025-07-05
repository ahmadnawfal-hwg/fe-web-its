import axios from 'axios';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const instance = axios.create({
    baseURL: config.public.apiBase,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  instance.interceptors.request.use((req) => {
    const authStore = useAuthStore();
    const token = authStore.token || useCookie('token').value;

    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  });

  instance.interceptors.response.use(
    (res) => res,
    (error) => {
      return Promise.reject(error);
    },
  );

  return {
    provide: {
      axios: instance,
    },
  };
});
