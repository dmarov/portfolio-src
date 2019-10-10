<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component'

@Component
export default class Menu extends Vue {

    hideMenu(): void {

        let checkbox = document.querySelector("#burger") as HTMLInputElement;
        checkbox.checked = false;
    }
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
                .menu__link(@click='hideMenu(); $router.push("/")') Home
            li.menu__item
                .menu__link(@click='hideMenu(); $router.push("/projects")') Projects
            li.menu__item
                .menu__link(@click='hideMenu(); $router.push("/about-me")') About me
            li.menu__item
                .menu__link(@click='hideMenu(); $router.push("/contact")') Contact
</template>
