<script setup>
definePageMeta({
  layout: 'login-center',
});

const {
  schema,
  state,
  onSubmit,
  isShowIconPassword,
  togglePasswordVisibility,
} = useLogin();
</script>

<template>
  <div
    class="flex items-center justify-center min-h-screen overflow-hidden z-10"
  >
    <div class="flex flex-col gap-4">
      <div class="flex justify-center">
        <NuxtImg src="/logo-hwg-light.png" alt="Logo" class="w-[220px]" />
      </div>

      <div
        class="w-[500px] mx-auto rounded-lg border border-gray-200 bg-white shadow-md px-8 pb-16 pt-10"
      >
        <div class="space-y-4 mb-6">
          <h1 class="text-center text-primary text-4xl font-bold">Sign In</h1>
          <p class="text-center opacity-[70%]">
            Enter your details below to sign in
          </p>
        </div>

        <UForm
          :schema="schema"
          :state="state"
          class="space-y-4"
          @submit="onSubmit"
        >
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
                  :icon="
                    isShowIconPassword ? 'i-lucide-eye-off' : 'i-lucide-eye'
                  "
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
    </div>
  </div>
</template>
