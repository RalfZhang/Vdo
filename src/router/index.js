import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from 'view/Home';
import MovieTab from 'view/Movie/Tab';
import MovieSubject from 'view/Movie/Subject';
import MovieSearch from 'view/Movie/Search';
import About from 'view/About/Index';
import Test from 'view/Test';

Vue.use(VueRouter);


export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/test',
      component: Test,
    },
        /**
         *嵌套路由写法
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
        */

    {
      path: '/',
      redirect: '/movie/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/movie/home',
      name: 'MovieHome',
      component: MovieTab,
    },
    {
      path: '/movie/subject/:id',
      name: 'MovieSubject',
      component: MovieSubject,
    },
    {
      path: '/movie/search',
      name: 'MovieSearch',
      component: MovieSearch,
    }, {
      path: '/about',
      name: 'About',
      component: About,
    },
        // 重定向
    {
      path: '/Vdo',
      redirect: '/movie/home',
    },
    {
      path: '/vdo',
      redirect: '/movie/home',
    },
    {
      path: '/vue-douban',
      redirect: '/movie/home',
    },
    {
      path: '/douban',
      redirect: '/movie/home',
    },
  ],
});
