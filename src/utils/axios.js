import axios from 'axios'
import Store from '../store/store'
import ActionCreator from '../store/actionCreator'
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log(config)
    let {method} = config
    let token = localStorage.getItem('token')
    if(method === 'post'){
      if(config.url === '/hehe/admin/file/upload'){
      }else{
        config.data.token = token
      }
    }else if(method === 'get'){
      config.url+=`&token=${token}`
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    if(response.status === 200){
      if(response.data.err === -998){
        Store.dispatch(ActionCreator.changeModelState())
      }
      return response.data;
    }else{
      // 也是链式调用的catch处理
      return Promise.reject('请求出错');
    }
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
  export default axios