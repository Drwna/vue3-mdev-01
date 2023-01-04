import HomeView from '@/views/home/index.vue';

const routes = [
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
    path: '/artmart',
    name: 'artmart',
    component: () => import('@/views/artmart/index.vue'),
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('@/views/category/index.vue'),
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: () => import('@/views/wishList/index.vue'),
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('@/views/my/index.vue'),
  },
  {
    path: '/demo',
    name: 'demo',
    component: ()=> import('@/views/demo/index.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/Index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Index.vue'),
  },
  {
    path: '/verify',
    name: 'verify',
    component: () => import('@/views/verify/Index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/error.vue'),
  },
];

export default routes;
