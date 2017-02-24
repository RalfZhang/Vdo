<template>
<div>
  <MovieBar></MovieBar>
  <MovieTab></MovieTab>
</div>
</template>
<script>

  import MovieBar from './Movie/Bar';
  import MovieTab from './Movie/Tab';

  export default {
    name: 'home',
    components: {
      MovieTab,
      MovieBar,
    },
  };
</script>
