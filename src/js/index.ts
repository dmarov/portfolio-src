import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../components/layout.vue';
import '../sass/layout.scss';

Vue.use(VueRouter);

let el = document.querySelector("#app") as HTMLElement;

const Home = () => import(/* webpackPreload: true */ "../components/home.vue");
const Projects = () => import("../components/projects.vue");
const AboutMe = () => import("../components/about-me.vue");
const Contact = () => import("../components/contact.vue");


const routes = [
    { path: "/", component: Home  },
    { path: "/projects", component: Projects },
    { path: "/about-me", component: AboutMe },
    { path: "/contact", component: Contact },
    { path: "*", component: Home },
];

const router = new VueRouter({
    routes,
});

new Vue({
    el,
    router,
    render: h => h(App),
});
