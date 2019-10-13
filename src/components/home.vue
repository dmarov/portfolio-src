<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component'

import logoPhp from '../images/logo_php.png';
import logoApache from '../images/logo_apache-http-server.jpg';
import logoNginx from '../images/logo_nginx.png';
import logoUnix from '../images/logo_unix.png';
import logoLinux from '../images/logo_linux.jpg';
import logoNode from '../images/logo_nodejs.png';
import logoMysql from '../images/logo_mysql.svg';
import logoPostgresql from '../images/logo_postgresql.png';
import logoWebpack from '../images/logo_webpack.png';
import logoVuejs from '../images/logo_vuejs.png';
import logoGulp from '../images/logo_gulp.jpg';
import logoBabel from '../images/logo_babel.svg';
import logoGit from '../images/logo_git.png';

@Component
export default class Menu extends Vue {

    images: Array<any> = [
        logoPhp,
        logoApache,
        logoNginx,
        logoUnix,
        logoLinux,
        logoNode,
        logoMysql,
        logoPostgresql,
        logoWebpack,
        logoVuejs,
        logoGulp,
        logoBabel,
        logoGit
    ];

    getStyle(index: number): object {

        let res = {
            'background-image': `url(${this.images[index]})`,
        };

        return res;
    }
}

</script>
<template lang='pug'>

    .page
        h2 My name is Dmitry. I am software developer.
        p I've been developing web sites for 2 years.
        p Also i developed services and administered servers.
        p This is my tech stack
        .tech-stack
            .tech-logo-wrapper(v-for="(img, index) in images")
                .tech-logo(:style='getStyle(index)')
</template>
