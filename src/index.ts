import Vue from "vue";
import BootstrapVue from 'bootstrap-vue';
import router from './router';

import HomeComponent from "./components/HomeRoute/Home.vue";
import HomeDecoratorComponent from "./components/HomeRoute/HomeDecorator.vue";
import AboutUsComponent from "./components/AboutUsRoute/AboutUs.vue";
import AboutUsDecoratorComponent from "./components/AboutUsRoute/AboutUsDecorator.vue";
import NavigationComponent from "./components/NavigationBar/nav.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

let v = new Vue({
    el: "#app",
    router,
    template: `
    <div>
        <NavigationComponent></NavigationComponent>
        <router-view></router-view>
    </div>
    `,
    data: { name: "World" },
    components: {
        HomeComponent,
        HomeDecoratorComponent,
        AboutUsComponent,
        AboutUsDecoratorComponent,
        NavigationComponent
    }
});
