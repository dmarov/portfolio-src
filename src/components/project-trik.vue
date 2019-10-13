<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component'
import trikImg0 from '../images/project_trik_0.png';
import trikImg1 from '../images/project_trik_1.png';
import trikImg2 from '../images/project_trik_2.png';
import trikImg3 from '../images/project_trik_3.png';
import Swiper from 'swiper';

@Component
export default class Menu extends Vue {

    trikImg0: any = trikImg0;
    trikImg1: any = trikImg1;
    trikImg2: any = trikImg2;
    trikImg3: any = trikImg3;

    mounted(): void {

        let elems = this.$el.querySelectorAll<HTMLElement>(".swiper");

        elems.forEach(el => {

            let nextEl = el.querySelector(".swiper__button_next") as HTMLElement;
            let prevEl = el.querySelector(".swiper__button_prev") as HTMLElement;

            new Swiper(el, {
                /*navigation: {
                    nextEl,
                    prevEl,
                },*/
                wrapperClass: 'swiper__slides',
                slideClass: 'swiper__slide',
                loop: true,
                pagination: {
                    el: '.swiper__pagination',
                    bulletClass: 'swiper__pagination-bullet',
                    bulletActiveClass: 'swiper__pagination-bullet_active',
                },
            });
        });
    }

    open(): void {
        window.open('https://trik.ru', '_blank');
    }
}

</script>
<template lang='pug'>

    .project
        .project__info(@click="open()").content__el_pointable
            h1.project__title Pharmacy network trik.ru
            .project__description
                | I did all backend, 90% frontend logic.
                | Trik needed web store that would serve their 5 pharmacies.
                | It required to create custom logic, which could satisfy their requirements.
                | Their site has complicated search by dynamically assignable properties tags,
                | and any logical expression which can be constructed from any of them and also
                | sorting by dynamically assignable properties.
                | Personal area is completely stateless. It was achieved by using JWT.
        .swiper
            .swiper__slides
                img.swiper__slide(:src="trikImg0")
                img.swiper__slide(:src="trikImg1")
                img.swiper__slide(:src="trikImg2")
                img.swiper__slide(:src="trikImg3")
            .swiper__pagination
            //.swiper__button.swiper__button_prev
            //.swiper__button.swiper__button_next

</template>
