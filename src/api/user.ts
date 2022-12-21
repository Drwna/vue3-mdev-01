import http from '@/utils/http';
import type {formData} from '@/views/register/register';

export function register(objParam: typeof formData) {
  return http.post("/remote/user/facadeuser/registerUser", objParam);
  // return http.post('/mock/user/facadeuser/registerUser', objParam);
};
