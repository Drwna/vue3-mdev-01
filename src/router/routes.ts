import HomeView from '@/views/home/index.vue';

export default [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/register.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/error.vue'),
  }
];
