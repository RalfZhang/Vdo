<template> 
<div class="loading">
  <mu-infinite-scroll :loading="isLoading" loadingText=""/>
</div>

</template>
<style lang="css" scoped>
    .loading{
      padding: 100px 0;
    }

</style>
<script>
  export default{
    data() {
      return {
        isLoading: true,
      };
    },
  };
</script>
