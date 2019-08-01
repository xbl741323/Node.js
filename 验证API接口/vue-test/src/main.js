import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(VueResource)

// Vue.http.options.root = 'http://localhost:3300';//设置请求的根路径
Vue.http.options.emulateJSON = true;//全局设置 post 时候表单数据格式组织形式application/x-www-form-urlencoded

import app from './App.vue'
import router from './router.js'//导入自定义路由模块

var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router,
})