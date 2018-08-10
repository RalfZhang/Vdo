<template>
    <div id='search'>
        <mu-paper class="demo-paper" :zDepth="1">
            <mu-appbar title="Title" class='search-bar'>
                <mu-icon-button class='bar-icon' icon='arrow_back' slot="left" @click="gotoTab()"/>
                <input v-model.trim="q" @keyup.enter="search" autofocus=true :underlineShow='false' class="bar-text" hintText="请输入关键字"/>
                <mu-icon-button class='bar-icon' icon='close' slot="right" />
            </mu-appbar>
        </mu-paper>

        <div class="result">
          <router-link :to="{name: 'MovieSubject', params: {id: subject.id}}" v-for="subject in subjects"  :key="subject.id">
            <mu-paper class="elem" :zDepth="1">
                <div class="image" :style="'background-image: url('+subject.images.large+')'"></div>
                <div class="text">
                    <div class="name">
                      <span class="title">{{subject.title}}</span>
                      <span class="year">{{subject.year}}</span>
                    </div>
                    <div class="star">
                    <!--
                      <span class='star-box' v-if="subject.rating.average > 0">
                        <mu-icon class='star-icon' :size='14' value="star" v-for="n in ratingStar(subject.rating.average).star"/>
                        <mu-icon class='star-icon' :size='14' value="star_half" v-for="n in ratingStar(subject.rating.average).half"/>
                        <mu-icon class='star-icon' :size='14' value="star_border" v-for="n in ratingStar(subject.rating.average).left"/>
                      </span>
                      -->
                      <Star class='star-box' :rating="subject.rating.average" v-if="subject.rating.average > 0"></Star>
                      <div class="star-num">{{subject.rating.average | fixNum}}</div>
                    </div>
                    <div class="genres">类型：{{subject.genres | arr2string}}</div>
                    <div class="director">导演：{{subject.directors.map(e=>e.name) | arr2string}}</div>
                    <div class="cast">主演：{{subject.casts.map(e=>e.name) | arr2string}}</div>
                </div>
            </mu-paper>
          </router-link>
        </div>

    </div>

</template>

<script>
import { mapState } from 'vuex';
import Star from 'components/Star';
import * as type from './../../store/movies/type';

export default {
  name: 'movieSearch',
  components: {
    Star,
  },
  data() {
    return {
      count: 20,
      start: 0,
      total: 0,
      q: '',
    };
  },
  computed: mapState({
    subjects: state => state.movie.movieQuery.subjects,
    text: state => state.movie.movieQuery.q,
  }),
  created() {
    this.q = this.text;
  },
  mounted() {
    console.log(`search mounted-------${Math.random()}`);
    this.getQuery();
  },
  watch: {
    $route: 'getQuery',
  },
  methods: {
    ratingStar(item) {
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
    gotoTab() {
      this.$router.go(-this.$store.state.movie.searchStep);
      this.$store.dispatch(type.UPDATE_MOVIE_SEARCH_STEP, 1);
      this.$store.dispatch(type.CLEAR_MOVIES_QUERY);
    },
    search() {
      console.log('q', this.q);
      if ((`${this.q}`).length === 0) {
        return;
      }
      this.$store.dispatch(
        type.UPDATE_MOVIE_SEARCH_STEP, this.$store.state.movie.searchStep + 1,
        );
      this.$router.push({ name: 'MovieSearch', query: { q: this.q } });
    },
    getQuery() {
      if (!this.$route.query.q) { return; }
      if (this.$route.query.q !== this.$store.state.movie.movieQuery.q) {
        console.log('dispatch...');
        this.$store.dispatch(type.FETCH_MOVIES_QUERY, { q: this.$route.query.q });
      }
    },
  },
};
</script>


<style lang="less" scoped>
#search{
  top: 0;
  width: 100%;
  left: 0;
}
.search-bar{
    background: #fff;
    position: relative;
}
.bar-icon{
    color:#757575;
}
.bar-text{
    font-size: 16px;
    height: 100%;
    position: relative;
    margin-bottom: 0px;
    border: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    &:focus{
      border: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      outline: none;
    }
}
.bar-test{
    background: #ddd;
}
.result{
    position: relative;
    box-sizing: border-box;
    width: 100%;
    min-height: 400px;
    .elem{
        position: relative;
        box-sizing: border-box;
        margin: 10px 15px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: 30%;
        overflow: hidden;
        .image{
            top: 0;
            left: 0;
            width: 30%;
            height: 0;
            background: #ccc;
            padding-top: 42%;
            background-size: cover;
            -moz-background-size: cover;
        }
        .text{
            overflow: hidden;
            top: 0;
            position: absolute;
            display: block;
            width: 70%;
            height: 100%;
            margin: 0;
            padding: 10px;
            font-size: 14px;
            right: 0;
            box-sizing: border-box;
            .name{
              height:20px;
              line-height: 20px;
              .title{
                font-size: 16px;
                font-weight: 800;
              }
              .year{
                color: #999;
              }
            }
            .star{
              display:-webkit-box;
              display:-ms-flexbox;
              display:flex;
              padding-top: 2px;
              color: #ff6f00;
              .star-box{
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                margin-right: 4px;
                letter-spacing: -3px;
                .star-icon{
                  margin-right: -3px;
                  padding: 2px 0;
                }
              }
              .star-num{
                margin-left: 0px;
              }
            }
            .cast{
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
        }
    }
}
</style>
