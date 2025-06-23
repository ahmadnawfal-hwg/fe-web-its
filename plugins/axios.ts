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
    const token = useCookie('token').value;
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  });

  instance.interceptors.response.use(
    (res) => res,
    (error) => {
      // console.error('API Error:', error.response?.data || error.message);
      return Promise.reject(error.response?.data || error);
    },
  );

  return {
    provide: {
      axios: instance,
    },
  };
});
