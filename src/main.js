import Vue from 'vue'
import App from './App.vue'
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
import router from "@/router";
import store from '@/store'
import * as API from "@/api";
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  }
}).$mount('#app')
