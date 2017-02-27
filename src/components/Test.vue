<template> 

  
  <div class="star">
    <mu-icon class='star-icon' :size='32' value="star" v-for="n in 2"/><mu-icon class='star-icon' :size='32' value="star_half" v-for="n in 1"/><mu-icon class='star-icon' :size='32' value="star_border" v-for="n in 2"/>
  </div>

</template>
<style lang="css" scoped>
    

.star{
  width: 100%; 
  height: 20px; 
  z-index: 10; 
  background: #CCC;
  text-align: center;
  vertical-align: middle;
  height: 80px;
  line-height: 80px;
}


</style>
