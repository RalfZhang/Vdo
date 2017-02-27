// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import MuseUI from 'muse-ui';

import 'muse-ui/dist/muse-ui.css';
import 'muse-ui/dist/theme-carbon.css';

import App from './App';
import router from './router';


Vue.use(MuseUI);
Vue.filter('arr2string', value => value.join(' / '));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
