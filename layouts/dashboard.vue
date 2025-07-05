<template>
  <div
    class="flex min-h-screen bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100"
  >
    <DashboardSidebar />

    <div class="flex flex-col flex-1 overflow-hidden">
      <DashboardHeader />

      <div class="flex-1 overflow-auto">
        <div class="min-w-full p-4 pt-22">
          <NuxtPage />
        </div>
      </div>
    </div>
  </div>
</template>
