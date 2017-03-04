import Vuex from 'vuex';
import Vue from 'vue';
import movie from './movies/module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    movie,
  },
});
