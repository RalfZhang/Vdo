import Vue from 'vue';
import Router from 'vue-router';
import Home from 'components/Home';
import Detail from 'components/Movie/Detail';
import MovieSearch from 'components/Movie/Search';
import Test from 'components/Test';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/movie/subject/',
      name: 'MovieDetail',
      component: Detail,
    },
    {
      path: '/test/',
      name: 'test',
      component: Test,
    },
    {
      path: '/movie/search/',
      name: 'MovieSearch',
      component: MovieSearch,
    },
  ],
});
