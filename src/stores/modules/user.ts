import { defineStore } from 'pinia';
import { getCurrUserInfo } from '@/api/user';
import defaultAvatar from '@/assets/images/defaultAvatar.webp';

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
    avatarUrl: defaultAvatar,
    userEMail: '',
  }),
  actions: {
    async getUserInfo() {
      const response = await getCurrUserInfo();
      if (response?.errMsg) {
        this.$reset();
        return false;
      }
      if (!response.successTag) {
        return false;
      }
      console.log('userStore getInfo==>', response);
      this.isLogin = true;
      this.nickName = response.rtnObj1.nickName;
      this.avatarUrl = baseAvatarUrl + response.rtnObj1.avatarUrl;
      this.userEMail = response.rtnObj1.userEMail;
      return true;
    },
  },
  persist: {
    key: 'userInfo',
    storage: localStorage,
    paths: ['isLogin', 'nickName', 'avatarUrl', 'userEMail'],
  },
});
