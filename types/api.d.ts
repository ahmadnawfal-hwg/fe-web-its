export type ApiCallbacks<T = any> = {
  onSuccess?: (_data: T) => void;
  onError?: (_error: any) => void;
  onSettled?: () => void;
};

export type ApiOptions<T = any> = {
  params?: Record<string, any>;
  data?: any;
} & ApiCallbacks<T>;
