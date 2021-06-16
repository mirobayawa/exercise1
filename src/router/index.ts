import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import routeNames from '@/enums/route_names';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: routeNames.home,
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/news-feed',
    name: routeNames.newsFeed,
    component: () => import('../views/NewsFeed.vue'),
  },
  {
    path: '/view-post/:id',
    name: routeNames.viewPost,
    props: true,
    component: () => import('../views/ViewPost.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
