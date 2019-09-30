import Vue from 'vue';
import App from '../components/layout.vue';
import '../sass/layout.scss';

let el = document.querySelector("#app") as HTMLElement;

new Vue({
    el,
    render: h => h(App),
});
