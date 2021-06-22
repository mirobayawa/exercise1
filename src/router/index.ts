import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import RouteNames from '@/enums/route_names';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: RouteNames.home,
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/news-feed',
    name: RouteNames.newsFeed,
    component: () => import('../views/NewsFeed.vue'),
  },
  {
    path: '/view-post/:id',
    name: RouteNames.viewPost,
    props: true,
    component: () => import('../views/ViewPost.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../views/PageNotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
