/**
 * axios封装：请求拦截，响应拦截，错误编码
 */
import axios from 'axios'

const getCookie = function (name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return arr[2];
  else
    return null;
}

/**
 * 默认10S请求超时
 */
axios.defaults.timeout = 10000;
/**
 * 设置post请求头
 */
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

/**
 * 请求拦截器
 */
axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    if (getCookie('api_token')) {
      var token = getCookie("api_token");
      token && (config.headers.Authorization = "Bearer " + token);
    }
    return config;
  },
  error => {
    return Promise.error(error);
  }
)
// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是200的情况
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          // window.location.href = process.env.WEB_URL + "login";
          break;
          // 403 token过期
          // 登录过期对用户进行提示
          // 清除本地token和清空vuex中token对象
          // 跳转登录页面
        case 403:
          Toast({
            message: '登录过期，请重新登录',
            duration: 1000,
            forbidClick: true
          });
          // 清除token
          localStorage.removeItem('token');
          store.commit('loginSuccess', null);
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath
              }
            });
          }, 1000);
          break;
          // 404请求不存在
        case 404:
          Toast({
            message: '网络请求不存在',
            duration: 1500,
            forbidClick: true
          });
          break;
          // 其他错误，直接抛出错误提示
        default:
      }
      return Promise.reject(error.response);
    }
  }
)
/**
 * get请求
 * @param {String} url 请求地址
 * @param {Object} params 请求参数
 */
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(process.env.API_URL + url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch(error => {
        reject(error);
      })
  });
}
/**
 * post请求
 * @param {String} url 请求地址
 * @param {Object} params 请求参数
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(process.env.API_URL + url, params)
      .then(res => {
        resolve(res.data);
      }).catch(err => {
        reject(err);
      })
  });
}
