'use strict';

require('@JS/core/bulma-wrapper');

const Vue = require('vue');
const Vuex = require('vuex');
window.Vue = Vue;
window.Vuex = Vuex;
Vue.use(Vuex);

const Axios = require('axios');
window.Axios = Axios;

