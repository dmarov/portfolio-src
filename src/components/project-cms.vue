<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component'
import cmsImg0 from '../images/project_cms_extra-properties.png';
import cmsImg1 from '../images/project_cms_subproducts.png';
import cmsImg2 from '../images/project_cms_orders.png';
import cmsImg3 from '../images/project_cms_feedback.png';
import Swiper from 'swiper';

@Component
export default class Menu extends Vue {

    cmsImg0: any = cmsImg0;
    cmsImg1: any = cmsImg1;
    cmsImg2: any = cmsImg2;
    cmsImg3: any = cmsImg3;

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
        window.open('https://test-cms.1mcg.ru', '_blank');
    }
}

</script>
<template lang='pug'>

    .project
        .project__info(@click="open()").content__el_pointable
            h1.project__title CMS
            .project__description
                | I develooped new modules such as
                | orders, catalog, feedback.
                | One of the most advanced modules is part of catalog,
                | which allows binding arbitrary properties to product.
                | It allows bind array of products, array of images,
                | text, number, boolean, array of strings, arbitrary json.
                | Api of web site allows to create advanced search by this properties.
                | Orders module allows to create flexible orders, which change its' structure
                | with every new project. Order has standard properties such as full name and mobile number,
                | but also can have any other property which will be displayed and can be modified. This module
                | also allows to modify orders' content, adding, removing and modifying products. Orders' sum 
                | recalculates automatically, including discounts. It also allows to notify client via SMS or email.
                | All this was made by me using Vue.js framework.

        .swiper
            .swiper__slides
                img.swiper__slide(:src="cmsImg0")
                img.swiper__slide(:src="cmsImg1")
                img.swiper__slide(:src="cmsImg2")
                img.swiper__slide(:src="cmsImg3")
            .swiper__pagination
            //.swiper__button.swiper__button_prev
            //.swiper__button.swiper__button_next

</template>
