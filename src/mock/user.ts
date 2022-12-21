export default [
  {
    url: "/api/mock/user/facadeuser/registerUser",
    method: "post",
    response: () => {
      return {
        code: 200,
        msg: "success",
        "data|6": ["@integer(0, 1000)"]
      };
    }
  },
  {
    url: "/pd/mock/user/facadeuser/registerUser",
    method: "post",
    response: () => {
      return {
        code: 200,
        msg: "success",
        "data|6": ["@integer(0, 1000)"]
      };
    }
  }
  // example
  // {
  //   url: "/api/mock/member/facademember/getWithEqualTest",
  //   method: "post",
  //   response: () => {
  //     return {
  //       code: 200,
  //       msg: "success",
  //       "data|6": ["@integer(0, 1000)"],
  //     };
  //   },
  // },
  // {
  //   url: "/pd/mock/member/facademember/getWithEqualTest",
  //   method: "post",
  //   response: () => {
  //     return {
  //       code: 200,
  //       msg: "success",
  //       "data|6": ["@integer(0, 1000)"],
  //     };
  //   }
  // },
];
