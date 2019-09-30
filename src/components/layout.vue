<script lang='ts'>
import Vue from 'vue';
import Menu from './menu.vue';
import Component from 'vue-class-component'

@Component({

    components: {
        "app-menu": Menu,
    },
})
export default class Layout extends Vue {


}

</script>
<template lang='pug'>
    .content
        app-menu
</template>
