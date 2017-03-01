import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from 'components/Home';
import Movie from 'components/Movie';
import MovieTab from 'components/Movie/Tab';
import MovieSubject from 'components/Movie/Subject';
import MovieSearch from 'components/Movie/Search';
// import Test from 'components/Test';

Vue.use(VueRouter);


export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/movie',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'movie',
          redirect: 'movie/home',
          name: 'Movie',
          component: Movie,
          children: [
            {
              path: 'home',
              name: 'MovieHome',
              component: MovieTab,
            },
            {
              path: 'subject/:id',
              name: 'MovieSubject',
              component: MovieSubject,
            },
            {
              path: 'search',
              name: 'MovieSearch',
              component: MovieSearch,
            },
          ],
        },
      ],
    },
  ],
});
