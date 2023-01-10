import http from '@/utils/http';
import type { formData } from '@/views/register/register';
import type { formData as RegisterByPhone } from '@/views/verifyPage/index';
import type { FormData as EditUserProfile } from '@/component/editInfoLayout/editInfoLayout';

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

export const checkAndSendShortMsg = (objParam: Pick<typeof RegisterByPhone, 'mobilePhoneNo' | 'identifyCode'>) => {
  return http.post('/remote/auth/facadeauth/checkAndSendShortMsg', objParam);
};

export const loginByShortMsg = (objParam: Pick<typeof RegisterByPhone, 'mobilePhoneNo' | 'identifyCode'>) => {
  return http.post('/remote/auth/facadeauth/loginByShortMsg', objParam);
};

export const getCurrUserInfo = (objParam = {}) => {
  return http.post('/remote/auth/facadeauth/getCurrUserInfo', objParam);
};

export const uploadImg = (objParam: FormData) => {
  return http.postBlob('/remote/infra/facadeinfra/uploadImg', objParam);
};

export const editUserProfile = (objParam: Partial<EditUserProfile>) => {
  return http.post('/remote/auth/facadeauth/editUserProfile', objParam);
};
