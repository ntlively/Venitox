import Vue from 'vue'
import Router from 'vue-router'

import HomeComponent from "../components/HomeRoute/Home.vue";
import AboutUsComponent from "../components/AboutUsRoute/AboutUs.vue";
//import Home from '@/components/Home' // this is the import line to add

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: HomeComponent
    },
    {
        path: '/AboutUs',
        name: 'AboutUs',
        component: AboutUsComponent
      },
  ]
})