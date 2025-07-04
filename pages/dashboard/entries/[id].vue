<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-3xl font-bold">Details</h1>
    <div class="flex">
      <NuxtLink to="/dashboard/entries">
        <UButton
          icon="i-lucide-arrow-left"
          size="lg"
          color="primary"
          variant="solid"
          class="cursor-pointer"
          >Back to Entries</UButton
        >
      </NuxtLink>
    </div>
    <div>
      <UCard
        :ui="{
          root: 'rounded-sm',
        }"
      >
        <template #header>
          <div class="flex justify-between gap-4 items-center">
            <h3 class="text-xl font-semibold">
              Checklist Group - Entry-6AC7R23
            </h3>
            <UButton
              icon="i-lucide-download"
              size="lg"
              color="primary"
              variant="solid"
              class="cursor-pointer"
              >Download PDF</UButton
            >
          </div>
        </template>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <p class="opacity-80">Outlet</p>
            <p class="font-semibold">DRAGON N COW CENTRAL PARK</p>
          </div>
          <div>
            <p class="opacity-80">Date</p>
            <p class="font-semibold">28 Jun 2025</p>
          </div>
          <div>
            <p class="opacity-80">Outlet Manager</p>
            <p class="font-semibold">REOPRIMAWIJAYA</p>
          </div>
          <div>
            <p class="opacity-80">Status</p>
            <p class="font-semibold">SUBMITTED</p>
          </div>
          <div>
            <p class="opacity-80">Created By</p>
            <p class="font-semibold">FAZRY YAHYA DARMAWAN S</p>
          </div>
        </div>
      </UCard>
    </div>

    <div>
      <UCard
        :ui="{
          root: 'rounded-sm',
        }"
      >
        <template #header>
          <h3 class="text-xl font-semibold">PERANGKAT JARINGAN</h3>
        </template>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div class="flex flex-col">
            <p class="opacity-80">ISP Provider</p>
            <p class="font-semibold">Baik</p>
            <div class="flex gap-2 items-center">
              <UIcon name="i-lucide-link" class="text-gray-500" />
              <span class="text-secondary">File</span>
            </div>
          </div>
          <div class="flex flex-col">
            <p class="opacity-80">Kecepatan Bandwitdth</p>
            <p class="font-semibold">Baik</p>
            <div class="flex gap-2 items-center">
              <UIcon name="i-lucide-link" class="text-gray-500" />
              <span class="text-secondary">File</span>
            </div>
          </div>
          <div class="flex flex-col">
            <p class="opacity-80">Switch Unmanaged</p>
            <p class="font-semibold">Baik</p>
          </div>
        </div>
      </UCard>
    </div>
    <div>
      <UCard
        :ui="{
          root: 'rounded-sm',
        }"
      >
        <template #header>
          <h3 class="text-xl font-semibold">PC SERVER</h3>
        </template>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div class="flex flex-col">
            <p class="opacity-80">Fisik Server</p>
            <p class="font-semibold">Baik</p>
          </div>
          <div class="flex flex-col">
            <p class="opacity-80">CPU</p>
            <p class="font-semibold">Baik</p>
            <div class="flex gap-2 items-center">
              <UIcon name="i-lucide-link" class="text-gray-500" />
              <span class="text-secondary">File</span>
            </div>
          </div>
          <div class="flex flex-col">
            <p class="opacity-80">SSD</p>
            <p class="font-semibold">Baik</p>
            <div class="flex gap-2 items-center">
              <UIcon name="i-lucide-link" class="text-gray-500" />
              <span class="text-secondary">File</span>
            </div>
          </div>
          <div class="flex flex-col">
            <p class="opacity-80">Maintenance Quartal</p>
            <p class="font-semibold">Baik</p>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>
