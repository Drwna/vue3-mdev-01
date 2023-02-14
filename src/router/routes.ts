import HomeView from '@/views/home/index.vue';
import { useUserStore } from '@/stores/modules/user';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    beforeEnter: async (to, from, next) => {
      const storeUser = useUserStore();
      const isLogin = await storeUser.getUserInfo();
      if (from.fullPath === '/') {
        if (isLogin || from.path === '/registerAndLoginWithMobile/register') {
          next();
        } else {
          next({ path: '/registerAndLoginWithMobile/login', replace: true });
        }
      } else {
        next();
      }
    },
    component: HomeView,
  },
  {
    path: '/mainPage',
    component: () => import('@/views/mainPage/index.vue'),
    children: [
      { path: '', component: () => import('@/views/mainPage/homePage.vue') },
      { path: 'category', component: () => import('@/views/mainPage/Category.vue') },
      { path: 'chart', component: () => import('@/views/mainPage/Chart.vue') },
      { path: 'my', component: () => import('@/views/mainPage/My.vue') },
    ],
  },
  {
    path: '/artPage',
    component: () => import('@/views/artPage/index.vue'),
    children: [
      { path: '', component: () => import('@/views/artPage/homePage.vue') },
      { path: 'category', component: () => import('@/views/artPage/Category.vue') },
      { path: 'chart', component: () => import('@/views/artPage/Chart.vue') },
      { path: 'my', component: () => import('@/views/artPage/My.vue') },
    ],
  },
  {
    path: '/registerAndLoginWithMobile',
    children: [
      { path: '', component: () => import('@/views/mobilePage/list.vue') },
      { path: 'register', component: () => import('@/views/verifyPage/Index.vue') },
      { path: 'login', component: () => import('@/views/login/Index.vue') },
      { path: 'loginByPassword', component: () => import('@/views/login/PasswordLogin.vue') },
      { path: 'resetPassword', component: () => import('@/views/resetPassword/Index.vue') },
    ],
  },
  {
    path: '/registerAndLoginWithEMail',
    children: [
      { path: '', component: () => import('@/views/eMailPage/index.vue') },
      { path: 'register', component: () => import('@/views/eRegister/index.vue') },
      { path: 'login', component: () => import('@/views/login/EMailLogin.vue') },
    ],
  },
  {
    path: '/profile',
    name: 'profile',
    beforeEnter: async (to, from, next) => {
      const storeUser = useUserStore();
      const isLogin = await storeUser.getUserInfo();
      if (isLogin) {
        next();
      } else {
        next({ path: 'registerAndLoginWithMobile/login', replace: true });
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
    path: '/images',
    name: 'images',
    component: () => import('@/views/images/index.vue'),
  },
  {
    path: '/select',
    name: 'select',
    component: () => import('@/views/select/select.vue'),
  },
  {
    path: '/echarts',
    name: 'echarts',
    component: () => import('@/views/echarts/Index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/error/index.vue'),
  },
];

export default routes;
