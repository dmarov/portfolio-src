!function(t){function e(e){for(var r,u,c=e[0],a=e[1],s=e[2],l=0,p=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);for(f&&f(e);p.length;)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={0:0},i=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var f=a;i.push([384,2]),n()}({117:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("app-menu"),e("router-view")],1)},o=[];r._withStripped=!0,n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}))},118:function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"page-wrapper"},[this._v("Home")])},o=[];r._withStripped=!0,n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}))},119:function(t,e,n){"use strict";var r=function(){var t=this.$createElement;this._self._c;return this._m(0)},o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-wrapper"},[e("div",{staticClass:"projects"},[e("div",{staticClass:"projects__item"}),e("div",{staticClass:"projects__item"}),e("div",{staticClass:"projects__item"}),e("div",{staticClass:"projects__item"})])])}];r._withStripped=!0,n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}))},120:function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"page-wrapper"},[this._v("About Me")])},o=[];r._withStripped=!0,n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}))},121:function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"page-wrapper"},[this._v("Contacts")])},o=[];r._withStripped=!0,n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}))},122:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"menu-wrapper"},[n("div",{staticClass:"logo menu-wrapper__logo"},[t._v("Logo Here")]),n("input",{staticClass:"content__el_invisible",attrs:{type:"checkbox",id:"burger"}}),t._m(0),n("ul",{staticClass:"menu"},[n("li",{staticClass:"menu__item"},[n("div",{staticClass:"menu__link",on:{click:function(e){t.hideMenu(),t.$router.push("/")}}},[t._v("Home")])]),n("li",{staticClass:"menu__item"},[n("div",{staticClass:"menu__link",on:{click:function(e){t.hideMenu(),t.$router.push("/projects")}}},[t._v("Projects")])]),n("li",{staticClass:"menu__item"},[n("div",{staticClass:"menu__link",on:{click:function(e){t.hideMenu(),t.$router.push("/about-me")}}},[t._v("About me")])]),n("li",{staticClass:"menu__item"},[n("div",{staticClass:"menu__link",on:{click:function(e){t.hideMenu(),t.$router.push("/contact")}}},[t._v("Contact")])])])])},o=[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"menu__burger",attrs:{for:"burger"}},[e("span",{staticClass:"burger-icon menu__burger-icon"})])}];r._withStripped=!0,n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}))},384:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(27)),u=r(n(388)),c=r(n(389));n(391),i.default.use(u.default);var a=document.querySelector("#app"),s=function(){return Promise.resolve().then((function(){return o(n(396))}))},f=[{path:"/",component:s},{path:"/projects",component:function(){return Promise.resolve().then((function(){return o(n(397))}))}},{path:"/about-me",component:function(){return Promise.resolve().then((function(){return o(n(398))}))}},{path:"/contact",component:function(){return Promise.resolve().then((function(){return o(n(399))}))}},{path:"*",component:s}],l=new u.default({routes:f});new i.default({el:a,router:l,render:function(t){return t(c.default)}})},389:function(t,e,n){"use strict";n.r(e);var r=n(117),o=n(83);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);var u=n(24),c=Object(u.a)(o.default,r.a,r.b,!1,null,null,null);c.options.__file="src/components/layout.vue",e.default=c.exports},390:function(t,e,n){"use strict";n.r(e);var r=n(122),o=n(85);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);var u=n(24),c=Object(u.a)(o.default,r.a,r.b,!1,null,null,null);c.options.__file="src/components/menu.vue",e.default=c.exports},391:function(t,e,n){var r=n(392);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(400).default)("60c07708",r,!1,{})},392:function(t,e,n){var r=n(393);"string"==typeof r&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};n(395)(r,o);r.locals&&(t.exports=r.locals)},393:function(t,e,n){(e=t.exports=n(394)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Space+Mono&display=swap);",""]),e.push([t.i,".menu-wrapper{display:flex;justify-content:space-between;align-items:center;background-color:#191919;color:#fff;width:100%;box-shadow:0 2px 3px 1px #EE2879;z-index:1}.menu-wrapper__logo{margin:20px}.menu{z-index:1;background-color:#191919;position:absolute;top:0;left:0;width:100%;display:flex;flex-direction:column;justify-content:space-around;align-items:stretch;margin:0;padding:0;font-family:'Space Mono', monospace;text-transform:uppercase;list-style:none;overflow:hidden;transform:translateX(-100%);transition:transform .2s linear;height:100vh}@media only screen and (min-width: 700px){.menu{position:static;transform:translateX(0);flex-direction:row;width:auto;height:auto}}.menu__item{cursor:pointer;transition:color 0.2s linear;display:flex;justify-content:center;align-items:center;flex-grow:1}.menu__item:hover{color:#EE2879}.menu__link{padding:20px;text-decoration:none;display:block;color:inherit;outline:none}.menu__burger{z-index:2;position:relative;cursor:pointer;align-self:stretch;display:flex;align-items:center;justify-content:center}@media only screen and (min-width: 700px){.menu__burger{display:none}}.menu__burger-icon{display:block;width:30px;height:2px;background-color:#EE2879;position:relative;transition:all 0.2s ease-out;margin:20px}.menu__burger-icon::before,.menu__burger-icon::after{background-color:#EE2879;content:\"\";display:block;position:absolute;height:100%;width:100%;transition:all 0.2s ease-in}.menu__burger-icon:before{top:5px}.menu__burger-icon:after{top:-5px}#burger:checked ~ .menu{transform:translateX(0)}#burger:checked ~ .menu__burger .menu__burger-icon{background:transparent}#burger:checked ~ .menu__burger .menu__burger-icon::before{transform:rotate(-45deg);top:0}#burger:checked ~ .menu__burger .menu__burger-icon::after{transform:rotate(45deg);top:0}body{margin:0;min-height:100%}*{box-sizing:border-box}.content{min-height:100vh;background-color:#fff}.content__el_invisible{display:none}.page-wrapper{padding:20px 10px}\n",""])},396:function(t,e,n){"use strict";n.r(e);var r=n(118),o=n(87);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);var u=n(24),c=Object(u.a)(o.default,r.a,r.b,!1,null,null,null);c.options.__file="src/components/home.vue",e.default=c.exports},397:function(t,e,n){"use strict";n.r(e);var r=n(119),o=n(89);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);var u=n(24),c=Object(u.a)(o.default,r.a,r.b,!1,null,null,null);c.options.__file="src/components/projects.vue",e.default=c.exports},398:function(t,e,n){"use strict";n.r(e);var r=n(120),o=n(91);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);var u=n(24),c=Object(u.a)(o.default,r.a,r.b,!1,null,null,null);c.options.__file="src/components/about-me.vue",e.default=c.exports},399:function(t,e,n){"use strict";n.r(e);var r=n(121),o=n(93);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);var u=n(24),c=Object(u.a)(o.default,r.a,r.b,!1,null,null,null);c.options.__file="src/components/contact.vue",e.default=c.exports},83:function(t,e,n){"use strict";n.r(e);var r=n(84),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e.default=o.a},84:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,u=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(u=(i<3?o(u):i>3?o(e,n,u):o(e,n))||u);return i>3&&u&&Object.defineProperty(e,n,u),u},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var c=u(n(27)),a=u(n(390)),s=u(n(51)),f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e=i([s.default({components:{"app-menu":a.default}})],e)}(c.default);e.default=f},85:function(t,e,n){"use strict";n.r(e);var r=n(86),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e.default=o.a},86:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,u=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(u=(i<3?o(u):i>3?o(e,n,u):o(e,n))||u);return i>3&&u&&Object.defineProperty(e,n,u),u},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var c=u(n(27)),a=u(n(51)),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.hideMenu=function(){document.querySelector("#burger").checked=!1},e=i([a.default],e)}(c.default);e.default=s},87:function(t,e,n){"use strict";n.r(e);var r=n(88),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e.default=o.a},88:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,u=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(u=(i<3?o(u):i>3?o(e,n,u):o(e,n))||u);return i>3&&u&&Object.defineProperty(e,n,u),u},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var c=u(n(27)),a=u(n(51)),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e=i([a.default],e)}(c.default);e.default=s},89:function(t,e,n){"use strict";n.r(e);var r=n(90),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e.default=o.a},90:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,u=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(u=(i<3?o(u):i>3?o(e,n,u):o(e,n))||u);return i>3&&u&&Object.defineProperty(e,n,u),u},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var c=u(n(27)),a=u(n(51)),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e=i([a.default],e)}(c.default);e.default=s},91:function(t,e,n){"use strict";n.r(e);var r=n(92),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e.default=o.a},92:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,u=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(u=(i<3?o(u):i>3?o(e,n,u):o(e,n))||u);return i>3&&u&&Object.defineProperty(e,n,u),u},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var c=u(n(27)),a=u(n(51)),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e=i([a.default],e)}(c.default);e.default=s},93:function(t,e,n){"use strict";n.r(e);var r=n(94),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e.default=o.a},94:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,u=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(u=(i<3?o(u):i>3?o(e,n,u):o(e,n))||u);return i>3&&u&&Object.defineProperty(e,n,u),u},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var c=u(n(27)),a=u(n(51)),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e=i([a.default],e)}(c.default);e.default=s}});