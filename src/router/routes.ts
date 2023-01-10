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
    component: () => import('@/views/demo/index.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/Index.vue'),
  },
  {
    path: '/verify',
    name: 'verify',
    component: () => import('@/views/verifyPage/Index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Index.vue'),
  },
  {
    path: '/avatar',
    name: 'avatar',
    component: () => import('@/views/avatar/Index.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/profile/Index.vue'),
  },
  {
    path: '/profileList',
    children: [
      {
        path: '',
        name: 'profileList',
        component: () => import('@/views/profileList/ProfileList.vue'),
      },
      {
        path: 'editNickname',
        name: 'editNickname',
        component: () => import('@/views/profileList/editNickName/Index.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/Error.vue'),
  },
];

export default routes;
