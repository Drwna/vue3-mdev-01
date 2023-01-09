import { defineStore } from 'pinia';

interface StoreUser {
  userID: string;
}

export const useUseStore = defineStore('userInfo', {
  state: (): StoreUser => ({
    userID: '',
  }),
  actions: {
    setUserInfo({ userID }: StoreUser) {
      this.userID = userID;
    },
  },
});
