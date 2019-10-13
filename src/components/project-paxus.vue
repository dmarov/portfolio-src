<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component'
import paxusImg0 from '../images/project_paxus_0.png';
import paxusImg1 from '../images/project_paxus_1.png';
import paxusImg2 from '../images/project_paxus_2.png';
import paxusImg3 from '../images/project_paxus_3.png';
import Swiper from 'swiper';

@Component
export default class Menu extends Vue {

    paxusImg0: any = paxusImg0;
    paxusImg1: any = paxusImg1;
    paxusImg2: any = paxusImg2;
    paxusImg3: any = paxusImg3;

    mounted(): void {

        let elems = this.$el.querySelectorAll<HTMLElement>(".swiper");

        elems.forEach(el => {

            let nextEl = el.querySelector(".swiper__button_next") as HTMLElement;
            let prevEl = el.querySelector(".swiper__button_prev") as HTMLElement;

            new Swiper(el, {
                navigation: {
                    nextEl,
                    prevEl,
                },
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
        window.open('https://paxus.ru', '_blank');
    }
}

</script>
<template lang='pug'>

    .project
        .project__info(@click="open()").content__el_pointable
            h1.project__title Moto Factory paxus.ru
            .project__description
                | I did all backend, all frontend logic
                | Paxus was one of most challenging customer.
                | Due to specifics of their market, they needed
                | to have product constructor. After a lot of strugle we did it
        .swiper
            .swiper__slides
                img.swiper__slide(:src="paxusImg0")
                img.swiper__slide(:src="paxusImg1")
                img.swiper__slide(:src="paxusImg2")
                img.swiper__slide(:src="paxusImg3")
            .swiper__pagination
            //.swiper__button.swiper__button_prev
            //.swiper__button.swiper__button_next

</template>
