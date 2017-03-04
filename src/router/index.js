import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from 'view/Home';
import Movie from 'view/Movie';
import MovieTab from 'view/Movie/Tab';
import MovieSubject from 'view/Movie/Subject';
import MovieSearch from 'view/Movie/Search';
import Test from 'view/Test';

Vue.use(VueRouter);


export default new VueRouter({
  routes: [
    {
      path: '/test',
      component: Test,
    },
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
