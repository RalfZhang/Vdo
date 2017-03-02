<template>
  <div>
    <div id="app">
      <router-view></router-view>
      <Copyright></Copyright>
    </div>
  </div>
</template>

<script>
import Home from './view/Home';
import Copyright from './view/Copyright';

export default {
  name: 'app',
  components: {
    Home,
    Copyright,
  },
};

</script>

<style lang="css">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #212121;
  }
  </style>
