<!--
评分数量
@authors RalfZ (ralfz.zhang@gmail.com)
@date    2017-04-06 00:03:11
@version 1.0.0
-->
<template>
  <span class='star'>
    <mu-icon class='star-icon' value="star" v-for="n in ratingObj.star" :key="'star'+n"/>
    <mu-icon class='star-icon' value="star_half" v-for="n in ratingObj.half" :key="'half'+n"/>
    <mu-icon class='star-icon' value="star_border" v-for="n in ratingObj.left" :key="'left'+n"/>
  </span>
</template>

<script>
  export default {
    props: ['rating'],
    computed: {
      ratingObj() {
        const intNum = Math.round(this.rating);
        const star = Math.floor(intNum / 2);
        const half = intNum % 2;
        const left = 5 - star - half;
        console.log(this.rating, star, half, left);
        return {
          star,
          half,
          left,
        };
      },
    },
  };
</script>

<style lang="css" scoped>
  .star{
    display: flex;
  }
  .star-icon{
    font-size: inherit;
    letter-spacing: inherit;
  }
</style>
