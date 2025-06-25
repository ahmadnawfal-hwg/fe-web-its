<template>
  <Transition name="fade" mode="out-in">
    <!-- Loading -->
    <div v-if="loading" key="loading">
      <BaseLoading />
    </div>

    <!-- Error -->
    <div v-else-if="error" key="error">
      <slot name="error">
        <ErrorBlock :status="error.statusCode" :message="error.message" />
      </slot>
    </div>

    <!-- Success -->
    <div v-else key="content">
      <slot />
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  loading?: boolean;
  error?: { statusCode: number; message: string } | null;
}>();
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
