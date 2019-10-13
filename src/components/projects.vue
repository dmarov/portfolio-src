<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import ProjectTrik from './project-trik.vue';
import ProjectPaxus from './project-paxus.vue';

@Component({
    components: {
        'project-trik': ProjectTrik,
        'project-paxus': ProjectPaxus,
    },
})
export default class Menu extends Vue {

}

</script>
<template lang='pug'>

    .projects
        project-trik
        project-paxus

</template>
