<template>
  <div class="flex min-h-screen w-full">
    <div class="hidden md:block flex-[7] relative">
      <NuxtImg
        src="/login-image.png"
        alt="Login Background"
        class="absolute inset-0 h-full w-full object-cover"
        format="webp"
        quality="80"
      />
    </div>

    <div
      class="flex flex-1 md:flex-[5] items-center justify-center p-6 sm:p-10"
    >
      <NuxtPage />
    </div>
  </div>
</template>
