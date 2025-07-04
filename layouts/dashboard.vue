<template>
  <div
    class="flex min-h-screen bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100"
  >
    <!-- Sidebar -->
    <DashboardSidebar />

    <!-- Main -->
    <div class="flex flex-col flex-1">
      <DashboardHeader />

      <div class="p-4">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
