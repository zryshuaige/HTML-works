import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../components/Layout.vue';
import Login from '../components/Login.vue';

const routes = [
  { path: '/', redirect: '/Layout' },
  { path: '/Layout', component: Layout },
  { path: '/login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
