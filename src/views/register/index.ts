import { reactive } from 'vue';
import { validator } from '@/utils/verify';

export const formData = reactive({
  phone: '',
  code: '',
});

export const ruleList = reactive({
  phone: [{ validator, message: '', c: 'mobile' }],
  code: [{ validator, message: '', c: 'code' }],
});
// const ruleList = reactive({
//   phone: [
//     { required: true, message: '请输入手机号' },
//     { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号' },
//   ],
//   code: [
//     { required: true, message: '请输入验证码' },
//     { pattern: /^\d{6}$/, message: '请输入正确的验证码' },
//   ],
// });

