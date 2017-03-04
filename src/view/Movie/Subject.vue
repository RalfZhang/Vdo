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
      <mu-icon class='star-icon' :size='36' value="star" v-for="n in ratingStar(movie.rating.average).star" />
      <mu-icon class='star-icon' :size='36' value="star_half" v-for="n in ratingStar(movie.rating.average).half" />
      <mu-icon class='star-icon' :size='36' value="star_border" v-for="n in ratingStar(movie.rating.average).left" />
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
        <mu-col class='author-elem' width="50" tablet="33" desktop="25" v-for="subject in movie.directors">
          <mu-paper>
            <div class='author-wrap'>
              <div class="author-image">
                <div class='author-padding' :style="'background-image: url('+subject.avatars.large+')'"></div>
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
        <mu-col class='author-elem' width="50" tablet="33" desktop="25" v-for="subject in movie.casts">
          <mu-paper>
            <div class='author-wrap'>
              <div class="author-image">
                <div class='author-padding' :style="'background-image: url('+subject.avatars.large+')'"></div>
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

  import router from './../../router';
  import { fetchMovieSubject } from './../../store/movies/api';

  const data =
    {
      rating: {
        max: 10,
        average: 6.9,
        stars: '35',
        min: 0,
      },
      reviews_count: 547,
      wish_count: 33053,
      douban_site: '',
      year: '2016',
      images: {
        small: 'http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2429713841.jpg',
        large: 'http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2429713841.jpg',
        medium: 'http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2429713841.jpg',
      },
      alt: 'https://movie.douban.com/subject/20471852/',
      id: '20471852',
      mobile_url: 'https://movie.douban.com/subject/20471852/mobile',
      title: '生化危机：终章',
      do_count: null,
      share_url: 'http://m.douban.com/movie/subject/20471852',
      seasons_count: null,
      schedule_url: 'https://movie.douban.com/subject/20471852/cinema/',
      episodes_count: null,
      countries: [
        '美国',
      ],
      genres: [
        '动作',
        '科幻',
        '惊悚',
      ],
      collect_count: 44208,
      casts: [
        {
          alt: 'https://movie.douban.com/celebrity/1025154/',
          avatars: {
            small: 'http://img7.doubanio.com/img/celebrity/small/2431.jpg',
            large: 'http://img7.doubanio.com/img/celebrity/large/2431.jpg',
            medium: 'http://img7.doubanio.com/img/celebrity/medium/2431.jpg',
          },
          name: '米拉·乔沃维奇',
          id: '1025154',
        },
        {
          alt: 'https://movie.douban.com/celebrity/1009367/',
          avatars: {
            small: 'http://img7.doubanio.com/img/celebrity/small/1416757467.73.jpg',
            large: 'http://img7.doubanio.com/img/celebrity/large/1416757467.73.jpg',
            medium: 'http://img7.doubanio.com/img/celebrity/medium/1416757467.73.jpg',
          },
          name: '伊恩·格雷',
          id: '1009367',
        },
        {
          alt: 'https://movie.douban.com/celebrity/1018978/',
          avatars: {
            small: 'http://img3.doubanio.com/img/celebrity/small/187.jpg',
            large: 'http://img3.doubanio.com/img/celebrity/large/187.jpg',
            medium: 'http://img3.doubanio.com/img/celebrity/medium/187.jpg',
          },
          name: '艾丽·拉特',
          id: '1018978',
        },
        {
          alt: 'https://movie.douban.com/celebrity/1344655/',
          avatars: {
            small: 'http://img7.doubanio.com/img/celebrity/small/1468578204.83.jpg',
            large: 'http://img7.doubanio.com/img/celebrity/large/1468578204.83.jpg',
            medium: 'http://img7.doubanio.com/img/celebrity/medium/1468578204.83.jpg',
          },
          name: '鲁比·罗丝',
          id: '1344655',
        },
      ],
      current_season: null,
      original_title: 'Resident Evil: The Final Chapter',
      summary: '爱丽丝在华盛顿特区被威斯克背叛后身陷险境，人类几乎要失去最后的希望。作为唯一的幸存者，也是人类对抗僵尸大军的最后防线，爱丽丝必须回到噩梦开始的地方——浣熊市，才能完成拯救世界救赎人类的正义使命。回归故事发生的起点浣熊市，爱丽丝将和昔日的朋友一起对抗僵尸和最新变种怪物，与保护伞公司展开了一场惊心动魄的终极决战。',
      subtype: 'movie',
      directors: [
        {
          alt: 'https://movie.douban.com/celebrity/1031921/',
          avatars: {
            small: 'http://img3.doubanio.com/img/celebrity/small/11288.jpg',
            large: 'http://img3.doubanio.com/img/celebrity/large/11288.jpg',
            medium: 'http://img3.doubanio.com/img/celebrity/medium/11288.jpg',
          },
          name: '保罗·安德森',
          id: '1031921',
        },
      ],
      comments_count: 21681,
      ratings_count: 41736,
      aka: [
        '恶灵古堡6：最终章(台)',
        '生化危机6',
        'Resident Evil: Rising',
        'Resident Evil 6',
      ],
    };
  console.log('data', data);
  export default {
    name: 'movieSubject',
    data() {
      return {
        movie: {
          rating: {},
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
