<template>
  <div>
    <MovieBar></MovieBar>
    <MovieTab></MovieTab>
    <div id="app">
      <img src="./assets/logo.png">
      <br/>
      <h3>施(撒)工(懒)中</h3>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import MovieBar from './components/Movie/Bar';
  import MovieTab from './components/Movie/Tab';

  export default {
    name: 'app',
    components: {
      MovieTab,
      MovieBar,
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
