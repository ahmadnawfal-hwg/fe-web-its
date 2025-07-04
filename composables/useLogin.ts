import { reactive } from 'vue';
import { z } from 'zod';
import type { FormSubmitEvent } from '#ui/types';

const schema = z.object({
  username: z.string().min(4, 'Username must be at least 4 characters'),
  password: z.string().min(4, 'Password must be at least 4 characters'),
});

type Schema = z.output<typeof schema>;

export function useLogin() {
  const state = reactive<Schema>({
    username: '',
    password: '',
  });

  async function onSubmit(_event: FormSubmitEvent<Schema>) {
    // const data = event.data;
    // alert('Login berhasil! Cek konsol.');
  }

  const isShowIconPassword = ref(false);

  const togglePasswordVisibility = () => {
    isShowIconPassword.value = !isShowIconPassword.value;
  };

  return {
    schema,
    state,
    onSubmit,
    isShowIconPassword,
    togglePasswordVisibility,
  };
}
