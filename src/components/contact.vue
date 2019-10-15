<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component'

@Component
export default class Menu extends Vue {

}

</script>
<template lang='pug'>

    .page
        | You can get in touch with me via
        .contacts
            a.contacts__icon.contacts__mail(href="mailto:d.marov94@gmail.com")
            a.contacts__icon.contacts__facebook(href="https://www.facebook.com/dvmarov")
            a.contacts__icon.contacts__vk(href="https://vk.com/id223706950")

</template>
