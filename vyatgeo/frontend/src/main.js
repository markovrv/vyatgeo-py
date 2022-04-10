import "babel-polyfill";
import 'whatwg-fetch';
import Vue from 'vue'

window.Popper = require('popper.js').default;

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Accept'] = 'application/json';

Vue.config.productionTip = false

Vue.component('HelloWorld', require('./components/HelloWorld.vue').default)

new Vue({
  el: '#app'
});
