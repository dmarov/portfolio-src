<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component'

@Component
export default class Menu extends Vue {

}

</script>
<template lang='pug'>

    nav.menu-wrapper
        .logo.menu-wrapper__logo Logo Here
        input(type="checkbox" id="burger" class="content__el_invisible")
        label.menu__burger(for="burger")
            span.burger-icon.menu__burger-icon
        ul.menu
            li.menu__item
                router-link.menu__link(to="/") Home
            li.menu__item
                router-link.menu__link(to="/projects") Projects
            li.menu__item
                router-link.menu__link(to="/about-me") About me
            li.menu__item
                router-link.menu__link(to="/contact") Contact
</template>
