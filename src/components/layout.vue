<script lang='ts'>
import Menu from './menu';

export default {

    components: {
        'vue-menu': Menu,
    },
    created() {
    
        let a: number = 'a';
        a = 7;
    }
}

</script>
<template lang='pug'>
    vue-menu
</template>
