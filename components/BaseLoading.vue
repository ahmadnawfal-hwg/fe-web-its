<template>
  <!-- Fullscreen loading -->
  <div
    v-if="mode === 'fullscreen'"
    class="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center space-y-4"
  >
    <div
      class="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"
    />
    <slot name="message">
      <p class="text-white text-sm font-medium animate-pulse">Loading...</p>
    </slot>
  </div>

  <!-- Button inline loading -->
  <div v-else-if="mode === 'button'" class="inline-block">
    <div
      class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
    />
  </div>
</template>

<script setup>
defineProps({
  mode: {
    type: String,
    default: 'fullscreen', // or 'button'
    validator: (val) => ['fullscreen', 'button'].includes(val),
  },
});
</script>
