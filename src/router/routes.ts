import HomeView from '@/views/home/index.vue';
import { useUserStore } from '@/stores/modules/user';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/cosmos',
    children: [
      { path: '', component: () => import('@/views/artmart/index.vue') },
      { path: 'category', component: () => import('@/views/category/index.vue') },
      { path: 'wishlist', component: () => import('@/views/wishList/index.vue') },
      { path: 'my', component: () => import('@/views/my/index.vue') },
    ],
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/views/demo/index.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/verifyPage/Index.vue'),
  },
  {
    path: '/login',
    children: [
      { path: '', component: () => import('@/views/login/Index.vue') },
      { path: 'password', component: () => import('@/views/login/PasswordLogin.vue') },
    ],
  },
  {
    path: '/resetPassword',
    name: 'resetPassword',
    component: () => import('@/views/resetPassword/Index.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    beforeEnter: (to, from, next) => {
      const storeUser = useUserStore();
      if (storeUser.isLogin) {
        next();
      } else {
        next('/login');
      }
    },
    component: () => import('@/views/profile/Index.vue'),
  },
  {
    path: '/profileList',
    children: [
      { path: '', component: () => import('@/views/profileList/ProfileList.vue') },
      { path: 'editNickname', component: () => import('@/views/profileList/editNickName/Index.vue') },
      { path: 'editEMail', component: () => import('@/views/profileList/editEMail/Index.vue') },
      { path: 'auth', component: () => import('@/views/auth/Index.vue') },
      { path: 'editAvatar', component: () => import('@/views/avatar/Index.vue') },
    ],
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/views/list/index.vue'),
  },
  {
    path: '/tab',
    name: 'tab',
    component: () => import('@/views/tab/index.vue'),
  },
  {
    path: '/qrcode',
    name: 'qrcode',
    component: () => import('@/views/qrcode/index.vue'),
  },
  {
    path: '/vote',
    name: 'vote',
    component: () => import('@/views/vote/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/error/index.vue'),
  },
];

export default routes;
