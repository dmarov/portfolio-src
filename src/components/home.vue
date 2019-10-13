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

    logoPhp: any = logoPhp;
    logoApache: any = logoApache;
    logoNginx: any = logoNginx;
    logoUnix: any = logoUnix;
    logoLinux: any = logoLinux;
    logoNode: any = logoNode;
    logoMysql: any = logoMysql;
    logoPostgresql: any = logoPostgresql;
    logoWebpack: any = logoWebpack;
    logoVuejs: any = logoVuejs;
    logoGulp: any = logoGulp;
    logoBabel: any = logoBabel;
    logoGit: any = logoGit;

}

</script>
<template lang='pug'>

    .page
        h2 My name is Dmitry. I am software developer.
        p I've been developing web sites for 2 years.
        p Also i developed services and administered servers.
        p This is my tech stack
        p
            img.tech-logo(:src='logoPhp')
            img.tech-logo(:src='logoApache')
            img.tech-logo(:src='logoNginx')
            img.tech-logo(:src='logoUnix')
            img.tech-logo(:src='logoLinux')
            img.tech-logo(:src='logoNode')
            img.tech-logo(:src='logoMysql')
            img.tech-logo(:src='logoPostgresql')
            img.tech-logo(:src='logoWebpack')
            img.tech-logo(:src='logoVuejs')
            img.tech-logo(:src='logoGulp')
            img.tech-logo(:src='logoBabel')
            img.tech-logo(:src='logoGit')
</template>
