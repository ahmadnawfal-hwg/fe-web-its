export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie<string | null>('token');

  if (to.path === '/') {
    return token.value
      ? navigateTo('/dashboard/checklist')
      : navigateTo('/login');
  }

  if (token.value && to.path === '/login') {
    return navigateTo('/dashboard/checklist');
  }

  if (!token.value && to.path !== '/login') {
    return navigateTo('/login');
  }
});
