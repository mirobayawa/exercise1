import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import RouteNames from '@/enums/route-names';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: RouteNames.Home,
    component: () => import('../views/home.vue'),
  },
  {
    path: '/news-feed',
    name: RouteNames.NewsFeed,
    component: () => import('../views/news-feed.vue'),
  },
  {
    path: '/view-post/:id',
    name: RouteNames.ViewPost,
    props: true,
    component: () => import('../views/view-post.vue'),
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('../views/page-not-found.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
