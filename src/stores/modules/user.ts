import { defineStore } from 'pinia';

interface StoreUser {
  isLogin?: boolean;
  nickName?: string;
  avatarUrl?: string;
  userEMail?: string;
}

const baseAvatarUrl = 'https://cosmos-app.oss-cn-shanghai.aliyuncs.com/avatar/';
export const useUserStore = defineStore('userInfo', {
  state: (): StoreUser => ({
    isLogin: false,
    nickName: '',
    avatarUrl: '',
    userEMail: '',
  }),
  actions: {
    setUserInfo({ isLogin, avatarUrl, nickName, userEMail }: StoreUser) {
      this.isLogin = isLogin;
      this.nickName = nickName;
      this.avatarUrl = baseAvatarUrl + avatarUrl;
      this.userEMail = userEMail;
    },
  },
  persist: {
    key: 'userInfo',
    storage: localStorage,
    paths: ['isLogin', 'nickName', 'avatarUrl', 'userEMail'],
  },
});
