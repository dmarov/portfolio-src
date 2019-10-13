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
        .page-wrapper
            transition(name="change")
                router-view
</template>

<style lang="scss">

.change-enter-active {

    transition: opacity .5s ease-in;
}

.change-enter {

    opacity: 0;
}
</style>
