import axios from 'axios'
import qs from 'qs';


axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = '';

//请求处理
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
    return Promise.reject(error);
});

//返回处理
axios.interceptors.response.use((res) =>{
    if(!res.data.success){
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    //404等问题可以在这里处理
    return Promise.reject(error);
});

axios.fetch = function(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
        .then(response => {
            response.data.integer = 'success'
            resolve(response.data);
        }, err => {
            reject(err);
        })
        .catch((error) => {
            reject(error)
        })
    })
}

export default axios