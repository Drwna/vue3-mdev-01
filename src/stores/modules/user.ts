import { defineStore } from 'pinia';
import { getCurrUserInfo } from '@/api/user';

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
    async getUserInfo() {
      const response = await getCurrUserInfo();
      if (response?.errMsg) {
        this.$reset();
        return false;
      }
      console.log('userStore getInfo==>', response);
      const { avatarUrl, nickName, userEMail } = response.rtnObj1;
      this.setUserInfo({
        isLogin: true,
        avatarUrl,
        nickName,
        userEMail,
      });
      return true;
    },
  },
  persist: {
    key: 'userInfo',
    storage: localStorage,
    paths: ['isLogin', 'nickName', 'avatarUrl', 'userEMail'],
  },
});
