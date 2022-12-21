import http from "@/utils/http";

// to server: /api/mock/member/facademember/getWithEqualTest
// to server: /api/remote/member/facademember/getWithEqualTest

export function apiTest() {
  let objParam = {
    languageTag: 1,
    code: "w-atg-p-about"
  };
  return http.post("/remote/webcms/facadewebcms/getWebContentByCategoryCode", objParam);
  // return http.post('/mock/member/facademember/getWithEqualTest',{});
  // return http.post('/remote/member/facademember/getWithEqualTest',{});
}



