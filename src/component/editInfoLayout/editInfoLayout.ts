import { reactive } from 'vue';

export interface FormData {
  userEMail: string;
  nickName: string;
}

export const formData = reactive<Pick<FormData, 'nickName'>>({ nickName: '' });
