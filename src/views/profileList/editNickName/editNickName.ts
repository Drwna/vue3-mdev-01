import { reactive } from 'vue';
import { validator } from '@/utils/verify';
import { useUserStore } from '@/stores/modules/user';

export interface FormData {
  userEMail: string;
  nickName: string;
}

export const ruleList = reactive({
  nickName: [{ validator, message: '', c: 'nickName' }],
});

const storeUser = useUserStore();
export const formData = reactive<Pick<FormData, 'nickName'>>({ nickName: storeUser.nickName || '' });
