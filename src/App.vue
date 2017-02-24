<template>
  <div>
  <Home></Home>
    <div id="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from './components/Home';

export default {
  name: 'app',
  components: {
    Home,
  },
};

</script>

<style lang="css">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  </style>
