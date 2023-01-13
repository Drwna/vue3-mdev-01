import http from '@/utils/http';
import type { formData } from '@/views/register/register';
import type { formData as RegisterByPhone } from '@/views/verifyPage/verifyPage';
import type { FormData as EditUserProfile } from '@/component/editInfoLayout/editInfoLayout';

export function register(objParam: typeof formData) {
  return http.post('/remote/user/facadeuser/registerUser', objParam);
  // return http.post('/mock/user/facadeuser/registerUser', objParam);
}

export const getIdentifyCode = (objParam: { mobilePhoneNo: string } | { userEMail: string }) => {
  return http.post('/remote/auth/facadeauth/getIdentifyCode', objParam);
};

export const sendVerifyCodeByEmailAfterLogin = (objParam: { userEMail: string; identifyCode: string }) => {
  return http.post('/remote/auth/facadeauth/sendVerifyCodeByEmailAfterLogin', objParam);
};

export const editEmailByVerifyCode = (objParam: { userEMail: string; identifyCode: string }) => {
  return http.post('/remote/user/facadeuser/editEmailByVerifyCode', objParam);
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

export const loginByPwd = (objParam: { userNo: string; userPwd: string }) => {
  return http.post('/remote/auth/facadeauth/login', objParam);
};

export const getCurrUserInfo = (objParam = {}) => {
  return http.post('/remote/auth/facadeauth/getCurrUserInfo', objParam);
};

export const resetPwd = (objParam: { mobilePhoneNo: string; userPwd: string; identifyCode: string }) => {
  return http.post('/remote/auth/facadeauth/resetUserPwdByPhone', objParam);
};

export const uploadImg = (objParam: FormData) => {
  return http.postBlob('/remote/infra/facadeinfra/uploadImg', objParam);
};

export const editUserProfile = (objParam: Partial<EditUserProfile>) => {
  return http.post('/remote/auth/facadeauth/editUserProfile', objParam);
};

// TODO: mock
export const getList = (objParam: { page: number }) => {
  return http.post('/mock/user/facadeuser/list', objParam);
};

export const getVoteList = (objParam = {}) => {
  return http.post('/mock/user/facadeuser/vote', objParam);
};
