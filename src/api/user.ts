import http from '@/utils/http';
import type { formData } from '@/views/register/register';
import type { formData as RegisterByPhone } from '@/views/verifyPage/Index';

export function register(objParam: typeof formData) {
  return http.post('/remote/user/facadeuser/registerUser', objParam);
  // return http.post('/mock/user/facadeuser/registerUser', objParam);
}

export const getIdentifyCode = (objParam: Pick<typeof RegisterByPhone, 'mobilePhoneNo'>) => {
  return http.post('/remote/auth/facadeauth/getIdentifyCode', objParam);
};

export const registerByPhone = (objParam: typeof RegisterByPhone) => {
  return http.post('/remote/auth/facadeauth/registerByPhone', objParam);
};

export const checkAndSendShortMsg = (objParam: typeof RegisterByPhone) => {
  return http.post('/remote/auth/facadeauth/checkAndSendShortMsg', objParam);
};

export const loginByShortMsg = (objParam: typeof RegisterByPhone) => {
  return http.post('/remote/auth/facadeauth/loginByShortMsg', objParam);
};
