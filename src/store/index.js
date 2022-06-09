import { setToken,getToken,removeToken } from "@/utils/token";
import Vue from "vue";
import Vuex from "vuex"
Vue.use(Vuex)

let state = {
    token: getToken()||''
}

//action：处理action可以书写自己的业务逻辑，也可以处理异步
const actions = {

}

//mutations:修改state的唯一手段
const mutations = {

}

//getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {
    
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
})