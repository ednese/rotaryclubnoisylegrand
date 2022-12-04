import { createRouter, createWebHistory } from 'vue-router';
import { capitalize } from '@/utils';

import HomeView from '@/views/HomeView.vue';

export const sections = ['acceuil', 'histoire', 'infos'];

const routes = [
  {
    path: '/',
    name: 'home',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      ...routes.map(({ path, name }) => ({
      path,
      name,
      component:
        name === 'home'
          ? HomeView
          : () => import(`../views/${capitalize(name)}View.vue`),
    })),
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    }
  ],
  scrollBehavior() {
    return { behavior: 'smooth' };
  },
});

export default router;
