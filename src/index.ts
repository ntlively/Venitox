import Vue from "vue";
import HelloComponent from "./components/HelloRoute/Hello.vue";
import HelloDecoratorComponent from "./components/HelloRoute/HelloDecorator.vue";
import AboutUsComponent from "./components/AboutUsRoute/AboutUs.vue";
import AboutUsDecoratorComponent from "./components/AboutUsRoute/AboutUsDecorator.vue";
import NavigationComponent from "./components/NavigationBar/nav.vue";


let v = new Vue({
    el: "#app",
    template: `
    <div>
        <NavigationComponent></NavigationComponent>
        Name: <input v-model="name" type="text">
        <h1>Hello Component</h1>
        <hello-component :name="name" :initialEnthusiasm="5" />
        <h1>Hello Decorator Component</h1>
        <hello-decorator-component :name="name" :initialEnthusiasm="5" />
    </div>
    `,
    data: { name: "World" },
    components: {
        HelloComponent,
        HelloDecoratorComponent,
        AboutUsComponent,
        AboutUsDecoratorComponent,
        NavigationComponent
    }
});
