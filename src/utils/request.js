import axios from "axios";
import store from '@/store'
import { MessageBox, Message } from 'element-ui'
// import Qs from 'qs' //用于序列化参数

//创建axios实例
const requests = axios.create({
    //基础路径
    baseURL:'/api',
    //超时请求时间
    timeout:5000,
    // headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
    // transformRequest: [data => Qs.stringify(data, { indices: true })] //将参数key=value序列化，因为本项目有的接口需要json/对象传参数，这里就不能这样直接全局配置，否则有的接口会报400(因为你把json或者是对象类型的数据，在这里key=value序列化了)

})

//请求拦截器
requests.interceptors.request.use((config)=>{
    if (store.state.token) {
        config.headers.token = store.state.token
    }
    // //如果使用 application/x-www-form-urlencoded ，需要在请求参数增加 type = "keyValue"
    // if (config.type === "keyValue") {
    //     config.headers["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8"
    //     config.data = Qs.stringify(config.data) //序列化参数
    // }

    return config;
})

//响应拦截器
requests.interceptors.response.use((response)=>{
    //成功的回调函数
    return response.data;
},(error)=>{
    // 响应失败的回调函数
    // return Promise.reject(new Error(error));
    return Promise.reject(new Error(error.message));
});

export default requests
