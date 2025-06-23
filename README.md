```markdown
# Nuxt 3 Codebase Starter by Ahmad Nawfal

This project is a Nuxt 3 starter codebase configured with commonly used modules and conventions to help you build modern frontend applications quickly and efficiently.

## 🧰 Tech Stack

- [Nuxt 3](https://nuxt.com)
- [Pinia](https://pinia.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Nuxt Image](https://image.nuxt.com/)
- [Nuxt Scripts](https://github.com/nuxt-modules/scripts)
- [Nuxt Fonts](https://github.com/nuxt-modules/fonts)
- [Nuxt Icon](https://github.com/nuxt-modules/icon)
- [Nuxt ESLint Module](https://github.com/nuxt-modules/eslint) using **Airbnb Style Guide**
- [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/okonet/lint-staged) for Git hooks
- [Prettier](https://prettier.io/) for code formatting

---

## 🧱 Code Structure & Conventions

### 📁 `components/pages/*`

Page-level components should be placed under `components/pages`.

> 📌 **Note:** Component filenames should use **multiword names** to avoid conflicts with native HTML elements and improve readability.

✅ Recommended:

components/pages/about/AboutBanner.vue
components/pages/home/HomeHero.vue

❌ Avoid:

components/pages/about/banner.vue
components/pages/home/hero.vue

This aligns with [Vue Style Guide – Rule: Multi-word component names](https://vuejs.org/style-guide/rules-essential.html#multi-word-component-names).
```

---

### 📁 `stores/*`

All API calls are handled inside **Pinia stores** under the `stores` directory.

Example:

```

stores/usePostStore.ts

```

### Store conventions:

Each store should at least contain:

- `data`: for storing API response
- `isLoading`: to handle loading state
- `error`: to store any error messages

Example:

```ts
import { defineStore } from 'pinia';
import type { ApiCallbacks } from '~/types/api';

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type PostPayload = Omit<Post, 'id'>;

export const usePostStore = defineStore('post', {
  state: () => ({
    data: [] as Post[],
    isLoading: true,
    error: null as string | null,
  }),

  actions: {
    async fetchPosts() {
      const api = useApi();
      this.isLoading = true;
      this.error = null;

      await api.get<Post[]>('/posts', {
        onSuccess: (res) => {
          this.data = res;
        },
        onError: (err) => {
          this.error = typeof err === 'string' ? err : 'failed fetch data';
        },
        onSettled: () => {
          this.isLoading = false;
        },
      });
    },

    async addPost(payload: PostPayload, callbacks: ApiCallbacks<Post> = {}) {
      const api = useApi();

      await api.post<Post>('/posts', {
        data: payload,
        onSuccess: (res) => {
          callbacks.onSuccess?.(res);
        },
        onError: (err) => {
          callbacks.onError?.(err);
        },
        onSettled: () => {
          callbacks.onSettled?.();
        },
      });
    },
  },
});
```

---

### 📁 `composables/*`

For reusable logic between pages/components, use the `composables` directory.

Example:

```ts
const { data, error, isLoading } = useFetchData();
```

---

## ✅ Commit Convention

This project uses **Conventional Commit Messages** such as:

- `feat`: a new feature
- `fix`: a bug fix
- `refactor`: code refactoring without changing behavior
- `docs`: documentation changes
- `chore`: tooling or config changes
- `style`: code style changes (formatting, semi, etc.)

Example:

```
feat: add post creation action to post store
fix: handle error in useApi composable
```

---

## 🚀 Getting Started

Install dependencies:

```bash
pnpm install
```

Start development server:

```bash
pnpm dev
```

---

## 🛡️ Pre-Commit Hook

Before each commit, Husky runs the following tasks via `lint-staged`:

- ESLint fix
- Prettier formatting

This ensures consistent and clean code before pushing.

---

Happy coding! ✨

```

```
