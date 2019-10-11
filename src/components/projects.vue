<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component'
import img from '../images/project_trik_0.png';

@Component
export default class Menu extends Vue {

    img: any = img;

}

</script>
<template lang='pug'>

    .page-wrapper
        .projects
            .projects__item
                img(:src="img")
            .projects__item
            .projects__item
            .projects__item

</template>
