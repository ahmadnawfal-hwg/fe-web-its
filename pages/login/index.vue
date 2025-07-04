<script setup lang="ts">
const {
  schema,
  state,
  onSubmit,
  isShowIconPassword,
  togglePasswordVisibility,
} = useLogin();

const colorMode = useColorMode();

const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});

definePageMeta({
  layout: 'login',
});
</script>

<template>
  <div class="w-full">
    <NuxtImg
      v-if="isMounted"
      :src="
        colorMode.value === 'dark' ? '/logo-hwg-white.webp' : '/logo-hwg.png'
      "
      alt="Logo"
      :class="[colorMode.value === 'dark' ? 'h-19' : 'h-20', 'mx-auto w-auto']"
    />

    <div class="flex justify-center flex-col space-y-2 mb-4">
      <h1 class="text-center text-2xl font-semibold">Hello Again</h1>
      <p class="text-center opacity-[70%]">
        Enter your details below to sign in
      </p>
    </div>

    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormField label="Username" name="username">
        <UInput
          v-model="state.username"
          class="w-full"
          placeholder="Enter your username"
          size="xl"
        />
      </UFormField>

      <UFormField label="Password" name="password">
        <UInput
          v-model="state.password"
          class="w-full"
          placeholder="••••••••"
          size="xl"
          :type="isShowIconPassword ? 'text' : 'password'"
          :ui="{ trailing: 'pe-1' }"
        >
          <template #trailing>
            <UButton
              color="neutral"
              variant="link"
              size="sm"
              :icon="isShowIconPassword ? 'i-lucide-eye-off' : 'i-lucide-eye'"
              :aria-label="
                isShowIconPassword ? 'Hide password' : 'Show password'
              "
              :aria-pressed="isShowIconPassword"
              aria-controls="password"
              @click="togglePasswordVisibility"
            />
          </template>
        </UInput>
      </UFormField>

      <UButton color="primary" size="xl" type="submit" class="mt-2" block
        >Submit</UButton
      >
    </UForm>
  </div>
</template>
