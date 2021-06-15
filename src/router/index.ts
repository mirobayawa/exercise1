import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const homeRoute = {
  path: '/',
  name: 'Home',
  component: () => import('../views/Home.vue'),
};

const newsFeedRoute = {
  path: '/news-feed',
  name: 'NewsFeed',
  component: () => import('../views/NewsFeed.vue'),
};

const viewPostRoute = {
  path: '/view-post/:id',
  name: 'ViewPost',
  props: true,
  component: () => import('../views/ViewPost.vue'),
};

const routes: Array<RouteRecordRaw> = [
  homeRoute,
  newsFeedRoute,
  viewPostRoute,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
