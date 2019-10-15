<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import ProjectTrik from './project-trik.vue';
import ProjectPaxus from './project-paxus.vue';
import ProjectCms from './project-cms.vue';

@Component({
    components: {
        'project-trik': ProjectTrik,
        'project-paxus': ProjectPaxus,
        'project-cms': ProjectCms,
    },
})
export default class Menu extends Vue {

}

</script>
<template lang='pug'>

    .page
        project-trik
        project-paxus
        project-cms

</template>
