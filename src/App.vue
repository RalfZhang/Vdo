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
import Detail from './components/Movie/Detail';

export default {
  name: 'app',
  components: {
    Home,
    Detail,
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
