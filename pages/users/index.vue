<script setup lang="ts">
interface User {
  id: number;
  name: string;
}

const {
  data: users,
  pending,
  error,
} = await useSsrFetch<User[]>('/users', {
  key: 'users',
  default: () => [],
});
</script>

<template>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <div v-else>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>
