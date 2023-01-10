import { defineStore } from 'pinia';

interface StoreUser {
  userID: string;
  avatarUrl: string;
}

const avatarBaseURL = 'https://cosmos-app.oss-cn-shanghai.aliyuncs.com/avatar/';
export const useUserStore = defineStore('userInfo', {
  state: (): StoreUser => ({
    userID: '',
    avatarUrl: '',
  }),
  actions: {
    setUserInfo({ userID, avatarUrl }: StoreUser) {
      this.userID = userID;
      this.avatarUrl = avatarBaseURL + avatarUrl;
    },
  },
  persist: {
    key: 'userInfo',
    storage: localStorage,
    paths: ['avatarUrl'],
  },
});
