<template>
    <div>
        <mu-paper class="demo-paper" :zDepth="1">
            <mu-appbar title="Title" class='search-bar'>
                <mu-icon-button class='bar-icon' icon='arrow_back' slot="left" @click="gotoTab()"/>
                <mu-text-field :underlineShow='false' class="bar-text" hintText="" />
                <mu-icon-button class='bar-icon' icon='close' slot="right" />
            </mu-appbar>
        </mu-paper>

        <div class="result">
          <router-link :to="{name: 'MovieSubject', params: {id: 321}}" v-for="subject in subjects">
            <mu-paper class="elem" :zDepth="1">
                <div class="image" :style="'background-image: url('+subject.images.large+')'"></div>
                <div class="text">
                    <div class="name">
                      <span class="title">{{subject.title}}</span>
                      <span class="year">{{subject.year}}</span>
                    </div>
                    <div class="star">
                      <span class='star-box' v-if="subject.rating.average > 0">
                        <mu-icon class='star-icon' :size='14' value="star" v-for="n in ratingStar(subject.rating.average).star"/>
                        <mu-icon class='star-icon' :size='14' value="star_half" v-for="n in ratingStar(subject.rating.average).half"/>
                        <mu-icon class='star-icon' :size='14' value="star_border" v-for="n in ratingStar(subject.rating.average).left"/>
                      </span>
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
	import router from './../../router';

const data =
  {
    count: 20,
    start: 0,
    total: 2,
    subjects: [
      {
        rating: {
          max: 10,
          average: 7.9,
          stars: '40',
          min: 0,
        },
        genres: [
          '剧情',
          '喜剧',
        ],
        title: '有话好好说',
        casts: [
          {
            alt: 'https://movie.douban.com/celebrity/1021999/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/17197.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/17197.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/17197.jpg',
            },
            name: '姜文',
            id: '1021999',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1038193/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/1358596116.28.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/1358596116.28.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/1358596116.28.jpg',
            },
            name: '李保田',
            id: '1038193',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1011112/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/1421302138.86.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/1421302138.86.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/1421302138.86.jpg',
            },
            name: '瞿颖',
            id: '1011112',
          },
        ],
        collect_count: 98722,
        original_title: '有话好好说',
        subtype: 'movie',
        directors: [
          {
            alt: 'https://movie.douban.com/celebrity/1054398/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/568.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/568.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/568.jpg',
            },
            name: '张艺谋',
            id: '1054398',
          },
        ],
        year: '1997',
        images: {
          small: 'http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p1194789230.jpg',
          large: 'http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p1194789230.jpg',
          medium: 'http://img7.doubanio.com/view/movie_poster_cover/spst/public/p1194789230.jpg',
        },
        alt: 'https://movie.douban.com/subject/1296436/',
        id: '1296436',
      },
      {
        rating: {
          max: 10,
          average: 0,
          stars: '00',
          min: 0,
        },
        genres: [
          '喜剧',
          '爱情',
          '短片',
        ],
        title: '没法好好说',
        casts: [
          {
            alt: 'https://movie.douban.com/celebrity/1348115/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/RaMVo8F0TRwcel_avatar_uploaded1424856687.16.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/RaMVo8F0TRwcel_avatar_uploaded1424856687.16.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/RaMVo8F0TRwcel_avatar_uploaded1424856687.16.jpg',
            },
            name: '任思扬',
            id: '1348115',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1326628/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/1449624604.41.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/1449624604.41.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/1449624604.41.jpg',
            },
            name: '应岱臻',
            id: '1326628',
          },
          {
            alt: null,
            avatars: null,
            name: '杜佳妮',
            id: null,
          },
        ],
        collect_count: 1,
        original_title: '没法好好说',
        subtype: 'movie',
        directors: [
          {
            alt: null,
            avatars: null,
            name: '章雪岩',
            id: null,
          },
        ],
        year: '2012',
        images: {
          small: 'http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2435717275.jpg',
          large: 'http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2435717275.jpg',
          medium: 'http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2435717275.jpg',
        },
        alt: 'https://movie.douban.com/subject/26984394/',
        id: '26984394',
      },
    ],
    title: '搜索 "有话好好说" 的结果',
  };

export default {
  name: 'movieSearch',
  data() {
    return data;
  },
  mounted() {
    console.log(`mmmmmm-------${Math.random()}`);
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
      router.go(-1);
    },
  },
};
</script>


<style lang="less" scoped>
.search-bar{
    background: #fff;
    position: relative;
}
.bar-icon{
    color:#757575;
}
.bar-text{
    height: 100%;
    position: relative;
    margin-bottom: 0px;
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
              display:flex;
              padding-top: 2px;
              color: #ff6f00;
              .star-box{
                display: flex;
                margin-right: 4px;
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
