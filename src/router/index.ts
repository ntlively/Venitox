import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Router from 'vue-router'
import Hello from '@/components/HelloRoute/Hello.vue'
import AboutUs from '@/components/AboutUsRoute/AboutUs.vue'
//import Home from '@/components/Home' // this is the import line to add

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
        path: '/',
        name: 'AboutUs',
        component: AboutUs
      },
  ]
})