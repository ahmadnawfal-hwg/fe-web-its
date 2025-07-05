import { z } from 'zod';
import type { FormSubmitEvent } from '#ui/types';

const schema = z.object({
  username: z.string().min(4, 'Username must be at least 4 characters'),
  password: z.string().min(4, 'Password must be at least 4 characters'),
});

type Schema = z.output<typeof schema>;

export const useLogin = () => {
  const authStore = useAuthStore();
  const toast = useToast();
  const colorMode = useColorMode();

  const form = reactive<Schema>({
    username: '',
    password: '',
  });

  const isLoadingSubmit = ref(false);
  const isShowIconPassword = ref(false);
  const isMounted = ref(false);

  const onSubmit = (event: FormSubmitEvent<Schema>) => {
    const data = event.data;
    isLoadingSubmit.value = true;

    authStore.onLogin(data, {
      onSuccess: (response) => {
        authStore.setToken(response.data.token);
        authStore.setUser(response.data.user);
        toast.add({
          title: 'Login successful',
          description: `Welcome back, ${response.data.user.name || 'User'}!`,
          icon: 'i-heroicons-check-circle',
        });
        navigateTo('/dashboard/checklist');
      },
      onError: (error) => {
        toast.add({
          title: 'Login failed',
          description: error.message || 'Invalid username or password.',
          icon: 'i-heroicons-exclamation-triangle',
          color: 'error',
        });
      },
      onSettled: () => {
        isLoadingSubmit.value = false;
      },
    });
  };

  const togglePasswordVisibility = () => {
    isShowIconPassword.value = !isShowIconPassword.value;
  };

  onMounted(() => {
    isMounted.value = true;
  });

  return {
    schema,
    form,
    onSubmit,
    isShowIconPassword,
    togglePasswordVisibility,
    isLoadingSubmit,
    colorMode,
    isMounted,
  };
};
