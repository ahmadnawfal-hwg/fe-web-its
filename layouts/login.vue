<template>
  <div class="flex min-h-screen w-full">
    <div class="hidden md:flex md:flex-1 relative">
      <NuxtImg
        src="/login-image.png"
        alt="Login Background"
        class="absolute inset-0 h-full w-full object-cover"
        format="webp"
        quality="80"
      />

      <div class="absolute inset-0" />
    </div>

    <div class="flex flex-1 items-center justify-center p-8">
      <NuxtPage />
    </div>
  </div>
</template>
