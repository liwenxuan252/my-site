import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"
import router from "./router"
import '@/mock'
import message from "@/utils/message"
import '../eventBus'
import store from './store'

//自定义指令
import vLoading from '@/directives/loading.js';
window.store = store
Vue.directive('loading',vLoading)

Vue.prototype.$message = message;
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

