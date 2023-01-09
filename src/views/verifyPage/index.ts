import { reactive } from "vue";
import { validator } from "@/utils/verify";

export const formData = reactive({
  mobilePhoneNo: '',
  identifyCode: '',
});

export const ruleList = reactive({
  phone: [{ validator, message: '', c: 'mobile' }],
  code: [{ validator, message: '', c: 'code' }],
});
