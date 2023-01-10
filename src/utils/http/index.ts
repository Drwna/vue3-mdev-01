import axios from "axios";
// import qs from "qs";//qs为序列化数据的js库

//设置baseUrl
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

//设置请求头
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
axios.defaults.headers.post["X-Requested-With"] = "XMLHttpRequest2";

//设置超时
axios.defaults.timeout = 10000;
//请求拦截器
axios.interceptors.request.use(
  config => {
    // const token = store.state.token;
    // token && (config.headers.Authorization = token);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status == 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    alert(`异常请求：${JSON.stringify(error.message)}`);
  }
);

//封装post/get请求
export default {
  post(url: string, data: Record<string, any> | FormData) {
    return new Promise<Record<string, any>>((resolve, reject) => {
      axios({
        headers: { 'Content-type': 'application/json;charset=UTF-8' },
        method: "post",
        url,
        //data,
        data: JSON.stringify(data) //参数序列化
      })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  postBlob(url: string, formData: FormData) {
    return new Promise<Record<string, string>>((resolve, reject) => {
      axios({
        method: "post",
        url,
        headers: { 'Content-type': 'multipart/form-data', },
        data: formData
      })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  get(url: string, data: Record<any, any>) {
    return new Promise((resolve, reject) => {
      axios({
        headers: { 'content-type': 'application/json;charset=UTF-8' },
        method: "get",
        url,
        params: data
      })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
