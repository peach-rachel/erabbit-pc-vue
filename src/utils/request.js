//处理步骤：1、创建axios实例，2、请求拦截器，如果有token进行头部携带
//3、响应拦截器 ，4、导出一个函数，调用当前的axios实例发请求，返回promise

import axios from 'axios'
import store from '@/store'
import router from '@/router'

export const baseURL =  'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
    baseURL,
    timeout:5000
})

//请求拦截器
instance.interceptors.request.use(config=>{
    //获取用户信息
    const {profile} = store.state.user
    //判断是否有token
    if(profile.token){
        //设置token
        config.headers.Authorization = `Bearer ${profile.token}`
    }
    return config
},err => {
    return Promise.reject(err)
})

//响应拦截器：1、剥离无效数据 2、处理token失效
instance.interceptiors.response.use(res => res.data,
    //401状态码即token失效，进入该函数
    err => {
        if(err.response && err.response.status === 401){
        //1、清空无效用户信息，2、跳转登陆页，3、跳转需要传参，携带当前路由给登陆页
        const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
        store.commit('user/setUser',{})  //serUser是方法名
        router.push('/login?redirectUrl=' + fullpath)
        }
        return Promise.reject(err)
    }
   
)

//请求工具函数
export default (url,method,submitData) => {
    return instance({
        url,
        method,
        [method.toLowerCase() === 'get'? 'params' : 'data']:submitData 
    })
}


