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
                a.menu__link Home
            li.menu__item
                a.menu__link Projects
            li.menu__item
                a.menu__link About me
            li.menu__item
                a.menu__link Contact
</template>
