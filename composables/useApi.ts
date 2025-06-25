import type { ApiOptions } from '~/types/api';

export const useApi = () => {
  const { $axios } = useNuxtApp();

  async function request<T = any>(
    method: 'get' | 'post' | 'put' | 'delete',
    url: string,
    options: ApiOptions<T> = {},
  ): Promise<T | null> {
    const { params, data, onSuccess, onError, onSettled } = options;

    let result: T | null = null;
    let error: any = null;

    try {
      const response = await $axios.request<T>({
        method,
        url,
        params: method === 'get' ? params : undefined,
        data: ['post', 'put', 'delete'].includes(method) ? data : undefined,
      });

      result = response.data;
      onSuccess?.(result);
    } catch (err: any) {
      error = {
        statusCode: err.response?.status || 500,
        message:
          err.response?.data?.message || err.message || 'An error occurred',
      };
      onError?.(error);
    } finally {
      onSettled?.();
    }

    return result;
  }

  return {
    get: <T = any>(url: string, opts?: ApiOptions<T>) =>
      request<T>('get', url, opts),
    post: <T = any>(url: string, opts?: ApiOptions<T>) =>
      request<T>('post', url, opts),
    put: <T = any>(url: string, opts?: ApiOptions<T>) =>
      request<T>('put', url, opts),
    del: <T = any>(url: string, opts?: ApiOptions<T>) =>
      request<T>('delete', url, opts),
  };
};
