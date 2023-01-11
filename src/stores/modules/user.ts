import { defineStore } from 'pinia';

interface StoreUser {
  nickName: string;
  avatarUrl: string;
  userEMail: string;
}

const baseAvatarUrl = 'https://cosmos-app.oss-cn-shanghai.aliyuncs.com/avatar/';
export const useUserStore = defineStore('userInfo', {
  state: (): StoreUser => ({
    nickName: '',
    avatarUrl: '',
    userEMail: '',
  }),
  actions: {
    setUserInfo({ avatarUrl, nickName, userEMail }: StoreUser) {
      this.nickName = nickName;
      this.avatarUrl = baseAvatarUrl + avatarUrl;
      this.userEMail = userEMail;
    },
  },
  persist: {
    key: 'userInfo',
    storage: localStorage,
    paths: ['nickName', 'avatarUrl', 'userEMail'],
  },
});
