import {reactive} from 'vue';
import {register} from '@/api/user';
import {validator} from '@/utils/verify';

export const formData = reactive({
  userNo: '',
  userEmail: '',
  userPwd: '',
  confirmPwd: ''
});

export const ruleList = reactive({
  userNo: [{validator, message: '', c: 'email'}],
  userEmail: [{validator, message: '', c: 'email'}],
  userPwd: [{validator, message: '', c: 'len', h: '3,7', m: '3和7'}],
  confirmPwd: [{validator, message: '', c: 'len', h: '3,7', m: '3和7'}]
});


export const onRegister = () => {
  register(formData).then((res) => {
    console.log('res', res);
  });
};
