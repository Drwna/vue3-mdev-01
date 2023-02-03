import http from '@/utils/http';
import type { formData } from '@/views/register/register';
import type { formData as RegisterByPhone } from '@/views/verifyPage/verifyPage';
import type { FormData as EditUserProfile } from '@/component/editInfoLayout/editInfoLayout';

enum URL {
  Register = '/remote/user/facadeuser/registerUser',
  GetIdentifyCode = '/remote/auth/facadeauth/getIdentifyCode',
  SendVerifyCodeByEmailAfterLogin = '/remote/auth/facadeauth/sendVerifyCodeByEmailAfterLogin',
  EditEmailByVerifyCode = '/remote/user/facadeuser/editEmailByVerifyCode',
  RegisterByPhone = '/remote/auth/facadeauth/registerByPhone',
  ActiveRegisterByEmail = '/auth/facadeauth/activeRegisterByEmail',
  SendVerifyCodeByEmail = '/remote/auth/facadeauth/sendVerifyCodeByEmail',
  SendRegisterEmail = '/remote/auth/facadeauth/sendRegisterEmail',
  CheckVerifyCodeByEmail = '/remote/auth/facadeauth/checkVerifyCodeByEmail',
  CheckAndSendShortMsg = '/remote/auth/facadeauth/checkAndSendShortMsg',
  getIdentifyCodeForEMail = '/remote/auth/facadeauth/getIdentifyCodeForEMail',
  LoginByShortMsg = '/remote/auth/facadeauth/loginByShortMsg',
  LoginByPwd = '/remote/auth/facadeauth/login',
  LoginByEMail = '/remote/auth/facadeauth/login',
  GetCurrUserInfo = '/remote/auth/facadeauth/getCurrUserInfo',
  ResetPwd = '/remote/auth/facadeauth/resetUserPwdByPhone',
  UploadImg = '/remote/infra/facadeinfra/uploadImg',
  EditUserProfile = '/remote/auth/facadeauth/editUserProfile',
  // mock
  GetList = '/mock/user/facadeuser/list',
  GetVoteList = '/mock/user/facadeuser/vote',
  GetImageList = '/mock/user/facadeuser/image',
  GetImageWishList = '/mock/user/facadeuser/imageWish',
}

export function register(objParam: typeof formData) {
  // return http.post('/remote/user/facadeuser/registerUser', objParam);
  return http.post(URL.Register, objParam);
  // return http.post('/mock/user/facadeuser/registerUser', objParam);
}

export const getIdentifyCode = (objParam: { mobilePhoneNo: string }) => {
  return http.post(URL.GetIdentifyCode, objParam);
};

export const sendVerifyCodeByEmailAfterLogin = (objParam: { userEMail: string; identifyCode: string }) => {
  return http.post(URL.SendVerifyCodeByEmailAfterLogin, objParam);
};

export const editEmailByVerifyCode = (objParam: { userEMail: string; identifyCode: string }) => {
  return http.post(URL.EditEmailByVerifyCode, objParam);
};

export const registerByPhone = (objParam: typeof RegisterByPhone) => {
  return http.post(URL.RegisterByPhone, objParam);
};

export const sendRegisterEmail = (objParam: { userEMail: string; userPwd: string; identifyCode: string }) => {
  return http.post(URL.SendRegisterEmail, objParam);
};

export const getIdentifyCodeForEMail = (objParam: { userEMail: string }) => {
  return http.post(URL.getIdentifyCodeForEMail, objParam);
};

export const activeRegisterByEmail = (objParam: { userEMail: string; identifyCode: string }) => {
  return http.post(URL.ActiveRegisterByEmail, objParam);
};

export const sendVerifyCodeByEmail = (objParam: { userEMail: string }) => {
  return http.post(URL.SendVerifyCodeByEmail, objParam);
};

export const checkVerifyCodeByEmail = (objParam: { userEMail: string; identifyCode: string }) => {
  return http.post(URL.CheckVerifyCodeByEmail, objParam);
};

export const checkAndSendShortMsg = (objParam: Pick<typeof RegisterByPhone, 'mobilePhoneNo' | 'identifyCode'>) => {
  return http.post(URL.CheckAndSendShortMsg, objParam);
};

export const loginByShortMsg = (objParam: Pick<typeof RegisterByPhone, 'mobilePhoneNo' | 'identifyCode'>) => {
  return http.post(URL.LoginByShortMsg, objParam);
};

export const loginByPwd = (objParam: { userNo: string; userPwd: string }) => {
  return http.post(URL.LoginByPwd, objParam);
};

export const loginByEMail = (objParam: { userNo: string; userPwd: string }) => {
  return http.post(URL.LoginByPwd, objParam);
};

export const getCurrUserInfo = (objParam = {}) => {
  return http.post(URL.GetCurrUserInfo, objParam);
};

export const resetPwd = (objParam: { mobilePhoneNo: string; userPwd: string; identifyCode: string }) => {
  return http.post(URL.ResetPwd, objParam);
};

export const uploadImg = (objParam: FormData) => {
  return http.postBlob(URL.UploadImg, objParam);
};

export const editUserProfile = (objParam: Partial<EditUserProfile>) => {
  return http.post(URL.EditUserProfile, objParam);
};

// TODO: mock
export const getList = (objParam: { page: number }) => {
  return http.post(URL.GetList, objParam);
};

export const getVoteList = (objParam = {}) => {
  return http.post(URL.GetVoteList, objParam);
};

export const getImageList = (objParam: { page: number }) => {
  return http.post(URL.GetImageList, objParam);
};

export const getImageWishList = (objParam = {}) => {
  return http.post(URL.GetImageWishList, objParam);
};
