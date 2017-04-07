<template>
  <div style="position: relative">
    <mu-icon-button class='icon-back' icon='arrow_back' slot="left" @click='goBack()' />
    <div class="image-wrap" :style="'background-image: url('+movie.images.large+')'">
    </div>
    <div class="title-border">
      <div class="title-info">
        <div class="title-image">
          <img :src='movie.images.large' />
        </div>
        <div class="title-text">
          <p>{{movie.title}}</p>
          <p>{{movie.rating.average}}</p>
        </div>
      </div>
    </div>

    <div class="star">
    <!--
      <mu-icon class='star-icon' :size='36' value="star" v-for="n in ratingStar(movie.rating.average).star" />
      <mu-icon class='star-icon' :size='36' value="star_half" v-for="n in ratingStar(movie.rating.average).half" />
      <mu-icon class='star-icon' :size='36' value="star_border" v-for="n in ratingStar(movie.rating.average).left" />
      -->
      <Star :rating="movie.rating.average"></Star>
    </div>
    <div class="info">
      <p class="info-content"><span class="info-title">原名</span><span class="info-text">{{movie.original_title}}</span></p>
      <p class="info-content"><span class="info-title">类型</span><span class="info-text">{{movie.genres | arr2string}}</span></p>
      <p class="info-content"><span class="info-title">年代</span><span class="info-text">{{movie.year}}</span></p>
      <p class="info-content"><span class="info-title">地区</span><span class="info-text">{{movie.countries | arr2string}}</span></p>
      <p class="info-content"><span class="info-title">又名</span><span class="info-text">{{movie.aka | arr2string}}</span></p>
      <p class="info-content"><span class="info-title">想看人数</span><span class="info-text">{{movie.wish_count}}</span></p>
      <p class="info-content"><span class="info-title">看过人数</span><span class="info-text">{{movie.collect_count}}</span></p>
      <p class="info-content"><span class="info-title">评分人数</span><span class="info-text">{{movie.ratings_count}}</span></p>
      <p class="info-content"><span class="info-title">短评数量</span><span class="info-text">{{movie.comments_count}}</span></p>
      <p class="info-content"><span class="info-title">影评数量</span><span class="info-text">{{movie.reviews_count}}</span></p>
    </div>
    <div class="summary">{{movie.summary}}</div>
    <div class="author">
      <p class="author-type">导演</p>
      <mu-row>
        <mu-col class='author-elem' width="50" tablet="33" desktop="25" v-for="subject in movie.directors" :key="subject.id">
          <mu-paper>
            <div class='author-wrap'>
              <div class="author-image">
                <div class='author-padding' :style="'background-image: url('+(subject.avatars && subject.avatars.large || '')+')'"></div>
              </div>
              <div class="author-name">{{subject.name}}</div>
            </div>
          </mu-paper>
        </mu-col>
      </mu-row>
    </div>
    <div class="author">
      <p class="author-type">主演</p>
      <mu-row>
        <mu-col class='author-elem' width="50" tablet="33" desktop="25" v-for="subject in movie.casts" :key="subject.id">
          <mu-paper>
            <div class='author-wrap'>
              <div class="author-image">
                <div class='author-padding' :style="'background-image: url('+(subject.avatars && subject.avatars.large || '')+')'"></div>
              </div>
              <div class="author-name">{{subject.name}}</div>
            </div>
          </mu-paper>
        </mu-col>

      </mu-row>
    </div>

  </div>
</template>



<script>
  import Star from 'components/Star';
  import router from './../../router';
  import { fetchMovieSubject } from './../../store/movies/api';

  export default {
    name: 'movieSubject',
    components: {
      Star,
    },
    data() {
      return {
        movie: {
          title: '',
          rating: {
            average: 0,
          },
          images: {},
          countries: [],
          genres: [],
          casts: [],
          directors: [],
          aka: [],
        },
      };
    },
    watch: {
      $route(to) {
        this.setPage(to.params.id);
      },
    },
    mounted() {
      this.setPage(this.$route.params.id);
    },
    methods: {
      ratingStar(item) {
        if (!item) {
          return {
            star: 0,
            half: 0,
            left: 0,
          };
        }
        const intNum = Math.round(item);
        const star = Math.floor(intNum / 2);
        const half = intNum % 2;
        const left = 5 - star - half;
        return {
          star,
          half,
          left,
        };
      },
      goBack() {
        router.go(-1);
      },
      setPage(id) {
        fetchMovieSubject(id).then((res) => {
          this.movie = res;
        });
      },
    },
  };

</script>
<style lang="css" scoped>
.image-wrap{
  width: 100%;
  padding-top: 80%;
  background: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -moz-background-size: cover;
  overflow: hidden;
}
.icon-back{
  position: absolute;
  top: 0;
  color: #fff;
  text-shadow: 0px 0px 3px #ddd;
}
.title-border{
  padding: 20px;
  box-shadow: 0 0px 15px 5px #ccc;
}
.title-info{
  position: relative;
}
.title-image{
  width: 30%;
  position: absolute;
  bottom: 0;
}
.title-image>img{
  width: 100%;
  display: block;
}
.title-text{
  position: relative;
  font-size: 16px;
  font-weight: 600;
  padding: 4px 0 4px 30%;
}
.title-text>p{
  padding-left: 15px;
  margin: 0;
}
.star{
  display: flex;
  justify-content: center;
  background: #eee;
  font-size: 42px;
  color: #ff6f00;
  padding: 8px 0;
}
.star-icon{
  margin: 20px 0;
  color: #ff6f00;
}
.info{
  margin: 30px;
}
.info-content>span{
  display: block;
}
.info-text{
  color: #888;
}
.summary{
  padding: 30px 20px;
  background: #eee;
}
.author{
  margin: 25px;
}
.author-type{
  padding: 0px 5px;
  margin: 0;
}
.author-elem{
  padding:5px;
}
.author-wrap{
  position: relative;
  display: block;
  overflow: hidden;
}
.author-image{
  float: left;
  width: 50%;
  border-radius: 2px  0 0 2px;
  overflow: hidden;
}
.author-padding{
  width: 100%;
  padding-top: 141%;
  background-size: cover;
  -moz-background-size: cover;
}
.author-name{ 
  float: left;
  width: 50%;
  padding: 10px 6px;
}

    
</style>
