<template>
  <div class='wrap'>
    <mu-row class='paper-row'>
      <mu-col class='paper-elem' width="33" tablet="25" desktop="20" v-for="subject in subjects">
        <mu-paper>
          <div class='paper-border'>          
            <div class='paper-img' :style="'background-image: url('+subject.images.large+')'">
            </div>
          </div>
          <div class='paper-text'>
            <p> {{subject.title}} </p>
            <p>
              <span class="paper-star">
                <mu-icon class='star-icon' value="star" v-for="n in ratingStar(subject.rating.average).star"/>
                <mu-icon class='star-icon' value="star_half" v-for="n in ratingStar(subject.rating.average).half"/>
                <mu-icon class='star-icon' value="star_border" v-for="n in ratingStar(subject.rating.average).left"/>
              </span>

             <span class='paper-rating'>{{new Number(subject.rating.average).toFixed(1)}} <span>
             </p>
          </div>
        </mu-paper>
      </mu-col>
    </mu-row>
  </div>
</template>
<script>
  const data = {
    subjects: [
      {
        rating: {
          max: 10,
          average: 6.9,
          stars: '35',
          min: 0,
        },
        genres: [
          '动作',
          '科幻',
          '惊悚',
        ],
        title: '生化危机：终章',
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
        ],
        collect_count: 14826,
        original_title: 'Resident Evil: The Final Chapter',
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
        year: '2016',
        images: {
          small: 'http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2429713841.jpg',
          large: 'http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2429713841.jpg',
          medium: 'http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2429713841.jpg',
        },
        alt: 'https://movie.douban.com/subject/20471852/',
        id: '20471852',
      },
      {
        rating: {
          max: 10,
          average: 5.5,
          stars: '30',
          min: 0,
        },
        genres: [
          '动作',
          '历史',
          '科幻',
        ],
        title: '刺客信条',
        casts: [
          {
            alt: 'https://movie.douban.com/celebrity/1000010/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/32214.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/32214.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/32214.jpg',
            },
            name: '迈克尔·法斯宾德',
            id: '1000010',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1006955/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/36117.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/36117.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/36117.jpg',
            },
            name: '玛丽昂·歌迪亚',
            id: '1006955',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1031216/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/336.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/336.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/336.jpg',
            },
            name: '杰瑞米·艾恩斯',
            id: '1031216',
          },
        ],
        collect_count: 9386,
        original_title: "Assassin's Creed",
        subtype: 'movie',
        directors: [
          {
            alt: 'https://movie.douban.com/celebrity/1325342/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/1398850505.5.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/1398850505.5.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/1398850505.5.jpg',
            },
            name: '贾斯汀·库泽尔 ',
            id: '1325342',
          },
        ],
        year: '2016',
        images: {
          small: 'http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2432597986.jpg',
          large: 'http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2432597986.jpg',
          medium: 'http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2432597986.jpg',
        },
        alt: 'https://movie.douban.com/subject/11526817/',
        id: '11526817',
      },
      {
        rating: {
          max: 10,
          average: 0,
          stars: '00',
          min: 0,
        },
        genres: [
          '剧情',
          '爱情',
        ],
        title: '三缺一',
        casts: [
          {
            alt: 'https://movie.douban.com/celebrity/1312976/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/1472973050.37.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/1472973050.37.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/1472973050.37.jpg',
            },
            name: '谭卓',
            id: '1312976',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1368159/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/1486914497.3.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/1486914497.3.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/1486914497.3.jpg',
            },
            name: '葛兆美',
            id: '1368159',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1351625/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/Ybuz3639jccel_avatar_uploaded1441477700.58.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/Ybuz3639jccel_avatar_uploaded1441477700.58.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/Ybuz3639jccel_avatar_uploaded1441477700.58.jpg',
            },
            name: '詹姆斯·奥夫斯',
            id: '1351625',
          },
        ],
        collect_count: 69,
        original_title: '三缺一',
        subtype: 'movie',
        directors: [
          {
            alt: 'https://movie.douban.com/celebrity/1325442/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/1354594241.3.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/1354594241.3.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/1354594241.3.jpg',
            },
            name: '高飞',
            id: '1325442',
          },
        ],
        year: '2017',
        images: {
          small: 'http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2428494681.jpg',
          large: 'http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2428494681.jpg',
          medium: 'http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2428494681.jpg',
        },
        alt: 'https://movie.douban.com/subject/26712258/',
        id: '26712258',
      },
      {
        rating: {
          max: 10,
          average: 5.8,
          stars: '30',
          min: 0,
        },
        genres: [
          '动作',
          '冒险',
        ],
        title: '极限特工3：终极回归',
        casts: [
          {
            alt: 'https://movie.douban.com/celebrity/1041020/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/53186.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/53186.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/53186.jpg',
            },
            name: '范·迪塞尔',
            id: '1041020',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1025194/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/10695.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/10695.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/10695.jpg',
            },
            name: '甄子丹',
            id: '1025194',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1014002/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/4946.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/4946.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/4946.jpg',
            },
            name: '迪皮卡·帕度柯妮',
            id: '1014002',
          },
        ],
        collect_count: 49142,
        original_title: 'xXx: The Return of Xander Cage',
        subtype: 'movie',
        directors: [
          {
            alt: 'https://movie.douban.com/celebrity/1014019/',
            avatars: {
              small: 'http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png',
              large: 'http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png',
              medium: 'http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png',
            },
            name: 'D·J·卡卢索',
            id: '1014019',
          },
        ],
        year: '2017',
        images: {
          small: 'http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2410569976.jpg',
          large: 'http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2410569976.jpg',
          medium: 'http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2410569976.jpg',
        },
        alt: 'https://movie.douban.com/subject/3230115/',
        id: '3230115',
      },
      {
        rating: {
          max: 10,
          average: 8.3,
          stars: '45',
          min: 0,
        },
        genres: [
          '喜剧',
          '动画',
          '歌舞',
        ],
        title: '欢乐好声音',
        casts: [
          {
            alt: 'https://movie.douban.com/celebrity/1040511/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/1392653727.04.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/1392653727.04.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/1392653727.04.jpg',
            },
            name: '马修·麦康纳',
            id: '1040511',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1031217/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/49827.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/49827.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/49827.jpg',
            },
            name: '瑞茜·威瑟斯彭',
            id: '1031217',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1041123/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/1354381657.24.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/1354381657.24.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/1354381657.24.jpg',
            },
            name: '塞思·麦克法兰',
            id: '1041123',
          },
        ],
        collect_count: 37036,
        original_title: 'Sing',
        subtype: 'movie',
        directors: [
          {
            alt: 'https://movie.douban.com/celebrity/1303814/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/21808.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/21808.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/21808.jpg',
            },
            name: '加斯·詹宁斯',
            id: '1303814',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1366253/',
            avatars: {
              small: 'http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png',
              large: 'http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png',
              medium: 'http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png',
            },
            name: '克里斯托夫·卢尔德莱',
            id: '1366253',
          },
        ],
        year: '2016',
        images: {
          small: 'http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2411622136.jpg',
          large: 'http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2411622136.jpg',
          medium: 'http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2411622136.jpg',
        },
        alt: 'https://movie.douban.com/subject/26354572/',
        id: '26354572',
      },
      {
        rating: {
          max: 10,
          average: 8.5,
          stars: '45',
          min: 0,
        },
        genres: [
          '剧情',
          '爱情',
          '歌舞',
        ],
        title: '爱乐之城',
        casts: [
          {
            alt: 'https://movie.douban.com/celebrity/1012531/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/938.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/938.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/938.jpg',
            },
            name: '瑞恩·高斯林',
            id: '1012531',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1040506/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/1398005949.4.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/1398005949.4.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/1398005949.4.jpg',
            },
            name: '艾玛·斯通',
            id: '1040506',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1014178/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/1487126502.97.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/1487126502.97.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/1487126502.97.jpg',
            },
            name: '约翰·传奇',
            id: '1014178',
          },
        ],
        collect_count: 211386,
        original_title: 'La La Land',
        subtype: 'movie',
        directors: [
          {
            alt: 'https://movie.douban.com/celebrity/1014996/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/1396635244.46.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/1396635244.46.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/1396635244.46.jpg',
            },
            name: '达米恩·查泽雷',
            id: '1014996',
          },
        ],
        year: '2016',
        images: {
          small: 'http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2425658570.jpg',
          large: 'http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2425658570.jpg',
          medium: 'http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2425658570.jpg',
        },
        alt: 'https://movie.douban.com/subject/25934014/',
        id: '25934014',
      },
      {
        rating: {
          max: 10,
          average: 7,
          stars: '35',
          min: 0,
        },
        genres: [
          '剧情',
          '喜剧',
        ],
        title: '乘风破浪',
        casts: [
          {
            alt: 'https://movie.douban.com/celebrity/1274235/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/805.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/805.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/805.jpg',
            },
            name: '邓超',
            id: '1274235',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1013782/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/1368156632.65.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/1368156632.65.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/1368156632.65.jpg',
            },
            name: '彭于晏',
            id: '1013782',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1275620/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/1460551151.6.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/1460551151.6.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/1460551151.6.jpg',
            },
            name: '赵丽颖',
            id: '1275620',
          },
        ],
        collect_count: 197346,
        original_title: '乘风破浪',
        subtype: 'movie',
        directors: [
          {
            alt: 'https://movie.douban.com/celebrity/1275307/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/11673.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/11673.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/11673.jpg',
            },
            name: '韩寒',
            id: '1275307',
          },
        ],
        year: '2017',
        images: {
          small: 'http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2408407697.jpg',
          large: 'http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2408407697.jpg',
          medium: 'http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2408407697.jpg',
        },
        alt: 'https://movie.douban.com/subject/26862259/',
        id: '26862259',
      },
      {
        rating: {
          max: 10,
          average: 5.3,
          stars: '30',
          min: 0,
        },
        genres: [
          '喜剧',
          '动作',
          '冒险',
        ],
        title: '功夫瑜伽',
        casts: [
          {
            alt: 'https://movie.douban.com/celebrity/1054531/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/694.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/694.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/694.jpg',
            },
            name: '成龙',
            id: '1054531',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1274292/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/10300.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/10300.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/10300.jpg',
            },
            name: '李治廷',
            id: '1274292',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1338949/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/1421061916.72.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/1421061916.72.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/1421061916.72.jpg',
            },
            name: '张艺兴',
            id: '1338949',
          },
        ],
        collect_count: 70734,
        original_title: '功夫瑜伽',
        subtype: 'movie',
        directors: [
          {
            alt: 'https://movie.douban.com/celebrity/1299382/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/18712.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/18712.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/18712.jpg',
            },
            name: '唐季礼',
            id: '1299382',
          },
        ],
        year: '2017',
        images: {
          small: 'http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2412371389.jpg',
          large: 'http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2412371389.jpg',
          medium: 'http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2412371389.jpg',
        },
        alt: 'https://movie.douban.com/subject/26182910/',
        id: '26182910',
      },
      {
        rating: {
          max: 10,
          average: 4.5,
          stars: '25',
          min: 0,
        },
        genres: [
          '剧情',
          '动作',
        ],
        title: '游戏规则',
        casts: [
          {
            alt: 'https://movie.douban.com/celebrity/1050590/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/3030.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/3030.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/3030.jpg',
            },
            name: '何润东',
            id: '1050590',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1337445/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/1405266144.28.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/1405266144.28.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/1405266144.28.jpg',
            },
            name: '黄子韬',
            id: '1337445',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1315729/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/1441515551.6.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/1441515551.6.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/1441515551.6.jpg',
            },
            name: '娜扎',
            id: '1315729',
          },
        ],
        collect_count: 3675,
        original_title: '游戏规则',
        subtype: 'movie',
        directors: [
          {
            alt: 'https://movie.douban.com/celebrity/1310336/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/39407.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/39407.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/39407.jpg',
            },
            name: '高希希',
            id: '1310336',
          },
        ],
        year: '2017',
        images: {
          small: 'http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2422372719.jpg',
          large: 'http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2422372719.jpg',
          medium: 'http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2422372719.jpg',
        },
        alt: 'https://movie.douban.com/subject/26745334/',
        id: '26745334',
      },
      {
        rating: {
          max: 10,
          average: 3.5,
          stars: '20',
          min: 0,
        },
        genres: [
          '喜剧',
          '爱情',
        ],
        title: '疯岳撬佳人',
        casts: [
          {
            alt: 'https://movie.douban.com/celebrity/1317663/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/40756.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/40756.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/40756.jpg',
            },
            name: '岳云鹏',
            id: '1317663',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1316067/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/1372668848.86.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/1372668848.86.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/1372668848.86.jpg',
            },
            name: '袁姗姗',
            id: '1316067',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1313285/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/1441793528.59.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/1441793528.59.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/1441793528.59.jpg',
            },
            name: '孙坚',
            id: '1313285',
          },
        ],
        collect_count: 2517,
        original_title: '疯岳撬佳人',
        subtype: 'movie',
        directors: [
          {
            alt: 'https://movie.douban.com/celebrity/1280632/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/57262.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/57262.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/57262.jpg',
            },
            name: '钟少雄',
            id: '1280632',
          },
        ],
        year: '2017',
        images: {
          small: 'http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2426231159.jpg',
          large: 'http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2426231159.jpg',
          medium: 'http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2426231159.jpg',
        },
        alt: 'https://movie.douban.com/subject/26815856/',
        id: '26815856',
      },
      {
        rating: {
          max: 10,
          average: 5.8,
          stars: '30',
          min: 0,
        },
        genres: [
          '喜剧',
          '动作',
          '奇幻',
        ],
        title: '西游伏妖篇',
        casts: [
          {
            alt: 'https://movie.douban.com/celebrity/1337000/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/1401722517.74.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/1401722517.74.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/1401722517.74.jpg',
            },
            name: '吴亦凡',
            id: '1337000',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1314535/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/1398676888.79.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/1398676888.79.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/1398676888.79.jpg',
            },
            name: '林更新',
            id: '1314535',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1029395/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/877.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/877.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/877.jpg',
            },
            name: '姚晨',
            id: '1029395',
          },
        ],
        collect_count: 174417,
        original_title: '西游伏妖篇',
        subtype: 'movie',
        directors: [
          {
            alt: 'https://movie.douban.com/celebrity/1007152/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/1393840734.39.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/1393840734.39.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/1393840734.39.jpg',
            },
            name: '徐克',
            id: '1007152',
          },
        ],
        year: '2017',
        images: {
          small: 'http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2411953504.jpg',
          large: 'http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2411953504.jpg',
          medium: 'http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2411953504.jpg',
        },
        alt: 'https://movie.douban.com/subject/25801066/',
        id: '25801066',
      },
      {
        rating: {
          max: 10,
          average: 6.5,
          stars: '35',
          min: 0,
        },
        genres: [
          '儿童',
          '动画',
        ],
        title: '熊出没·奇幻空间',
        casts: [
          {
            alt: 'https://movie.douban.com/celebrity/1276093/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/13497.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/13497.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/13497.jpg',
            },
            name: '尚雯婕',
            id: '1276093',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1319975/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/48423.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/48423.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/48423.jpg',
            },
            name: '鲍春来',
            id: '1319975',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1358840/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/1465538991.83.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/1465538991.83.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/1465538991.83.jpg',
            },
            name: '孙建弘',
            id: '1358840',
          },
        ],
        collect_count: 6295,
        original_title: '熊出没·奇幻空间',
        subtype: 'movie',
        directors: [
          {
            alt: 'https://movie.douban.com/celebrity/1336904/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/1451195637.94.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/1451195637.94.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/1451195637.94.jpg',
            },
            name: '丁亮',
            id: '1336904',
          },
        ],
        year: '2017',
        images: {
          small: 'http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2414358483.jpg',
          large: 'http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2414358483.jpg',
          medium: 'http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2414358483.jpg',
        },
        alt: 'https://movie.douban.com/subject/26831711/',
        id: '26831711',
      },
      {
        rating: {
          max: 10,
          average: 2.6,
          stars: '15',
          min: 0,
        },
        genres: [
          '爱情',
          '悬疑',
          '惊悚',
        ],
        title: '恐怖理发店',
        casts: [
          {
            alt: 'https://movie.douban.com/celebrity/1340984/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/1403756298.69.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/1403756298.69.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/1403756298.69.jpg',
            },
            name: '殷果儿',
            id: '1340984',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1359164/',
            avatars: {
              small: 'http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png',
              large: 'http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png',
              medium: 'http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png',
            },
            name: '任青安',
            id: '1359164',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1353667/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/1451209491.55.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/1451209491.55.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/1451209491.55.jpg',
            },
            name: '姜星丘',
            id: '1353667',
          },
        ],
        collect_count: 361,
        original_title: '恐怖理发店',
        subtype: 'movie',
        directors: [
          {
            alt: 'https://movie.douban.com/celebrity/1360707/',
            avatars: {
              small: 'http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png',
              large: 'http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png',
              medium: 'http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png',
            },
            name: '陆诗雷',
            id: '1360707',
          },
        ],
        year: '2017',
        images: {
          small: 'http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2406903891.jpg',
          large: 'http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2406903891.jpg',
          medium: 'http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2406903891.jpg',
        },
        alt: 'https://movie.douban.com/subject/26865690/',
        id: '26865690',
      },
      {
        rating: {
          max: 10,
          average: 5.6,
          stars: '30',
          min: 0,
        },
        genres: [
          '喜剧',
          '爱情',
          '奇幻',
        ],
        title: '完美有多美',
        casts: [
          {
            alt: 'https://movie.douban.com/celebrity/1274290/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/27203.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/27203.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/27203.jpg',
            },
            name: '姜武',
            id: '1274290',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1052229/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/2591.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/2591.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/2591.jpg',
            },
            name: '蒋勤勤',
            id: '1052229',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1274530/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/1405392244.19.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/1405392244.19.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/1405392244.19.jpg',
            },
            name: '李乃文',
            id: '1274530',
          },
        ],
        collect_count: 1158,
        original_title: '完美有多美',
        subtype: 'movie',
        directors: [
          {
            alt: 'https://movie.douban.com/celebrity/1359216/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/1479788543.39.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/1479788543.39.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/1479788543.39.jpg',
            },
            name: '梁栋',
            id: '1359216',
          },
        ],
        year: '2017',
        images: {
          small: 'http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2428993870.jpg',
          large: 'http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2428993870.jpg',
          medium: 'http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2428993870.jpg',
        },
        alt: 'https://movie.douban.com/subject/26668750/',
        id: '26668750',
      },
      {
        rating: {
          max: 10,
          average: 0,
          stars: '00',
          min: 0,
        },
        genres: [
          '爱情',
          '惊悚',
        ],
        title: '血伞凶灵',
        casts: [
          {
            alt: 'https://movie.douban.com/celebrity/1368731/',
            avatars: {
              small: 'http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png',
              large: 'http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png',
              medium: 'http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png',
            },
            name: '刘晓婉',
            id: '1368731',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1327487/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/tkt9Jive6AAcel_avatar_uploaded1363769324.21.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/tkt9Jive6AAcel_avatar_uploaded1363769324.21.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/tkt9Jive6AAcel_avatar_uploaded1363769324.21.jpg',
            },
            name: '文卓',
            id: '1327487',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1355105/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/1459422400.46.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/1459422400.46.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/1459422400.46.jpg',
            },
            name: '朱佳希',
            id: '1355105',
          },
        ],
        collect_count: 117,
        original_title: '血伞凶灵',
        subtype: 'movie',
        directors: [
          {
            alt: 'https://movie.douban.com/celebrity/1332935/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/1376538889.8.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/1376538889.8.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/1376538889.8.jpg',
            },
            name: '朱林森',
            id: '1332935',
          },
        ],
        year: '2017',
        images: {
          small: 'http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2428868031.jpg',
          large: 'http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2428868031.jpg',
          medium: 'http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2428868031.jpg',
        },
        alt: 'https://movie.douban.com/subject/26969974/',
        id: '26969974',
      },
      {
        rating: {
          max: 10,
          average: 5.2,
          stars: '30',
          min: 0,
        },
        genres: [
          '剧情',
          '动作',
          '爱情',
        ],
        title: '上海王',
        casts: [
          {
            alt: 'https://movie.douban.com/celebrity/1032540/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/20960.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/20960.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/20960.jpg',
            },
            name: '胡军',
            id: '1032540',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1050430/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/52860.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/52860.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/52860.jpg',
            },
            name: '余男',
            id: '1050430',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1274684/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/1372773609.01.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/1372773609.01.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/1372773609.01.jpg',
            },
            name: '凤小岳',
            id: '1274684',
          },
        ],
        collect_count: 1230,
        original_title: '上海王',
        subtype: 'movie',
        directors: [
          {
            alt: 'https://movie.douban.com/celebrity/1314371/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/34881.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/34881.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/34881.jpg',
            },
            name: '胡雪桦',
            id: '1314371',
          },
        ],
        year: '2016',
        images: {
          small: 'http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2426952758.jpg',
          large: 'http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2426952758.jpg',
          medium: 'http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2426952758.jpg',
        },
        alt: 'https://movie.douban.com/subject/4078592/',
        id: '4078592',
      },
      {
        rating: {
          max: 10,
          average: 5.1,
          stars: '25',
          min: 0,
        },
        genres: [
          '剧情',
          '动作',
        ],
        title: '决战食神',
        casts: [
          {
            alt: 'https://movie.douban.com/celebrity/1000905/',
            avatars: {
              small: 'http://img3.doubanio.com/img/celebrity/small/46.jpg',
              large: 'http://img3.doubanio.com/img/celebrity/large/46.jpg',
              medium: 'http://img3.doubanio.com/img/celebrity/medium/46.jpg',
            },
            name: '葛优',
            id: '1000905',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1050053/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/27804.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/27804.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/27804.jpg',
            },
            name: '谢霆锋',
            id: '1050053',
          },
          {
            alt: 'https://movie.douban.com/celebrity/1274479/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/48044.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/48044.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/48044.jpg',
            },
            name: '唐嫣',
            id: '1274479',
          },
        ],
        collect_count: 8927,
        original_title: '决战食神',
        subtype: 'movie',
        directors: [
          {
            alt: 'https://movie.douban.com/celebrity/1275004/',
            avatars: {
              small: 'http://img7.doubanio.com/img/celebrity/small/9015.jpg',
              large: 'http://img7.doubanio.com/img/celebrity/large/9015.jpg',
              medium: 'http://img7.doubanio.com/img/celebrity/medium/9015.jpg',
            },
            name: '叶伟民',
            id: '1275004',
          },
        ],
        year: '2017',
        images: {
          small: 'http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2417948347.jpg',
          large: 'http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2417948347.jpg',
          medium: 'http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2417948347.jpg',
        },
        alt: 'https://movie.douban.com/subject/26711487/',
        id: '26711487',
      },
    ],
  };
  console.log(data);

  export default {
    name: 'movieList',
    data() {
      return data;
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
    },
  };
</script>
<style lang='css' scoped>
.wrap{
  padding: 10px;
}
.wrap>.paper-row{
  justify-content: flex-start;
  flex-flow: row wrap;
}
.paper-elem{
  padding: 10px;
}
.paper-border{
  position: relative;
  border-radius: 2px 2px 0 0;
  overflow: hidden;
}
.paper-img{
  position: relative;
  width: 100%;
  padding-top:141%;
  background-size: cover;
  -moz-background-size: cover;
}
.paper-img-wrap{
  top:0;
  left: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 2px 2px 0px 0px;
  box-sizing: border-box;
}
.paper-img-wrap>img{
  width: 100%;
}
.paper-text{
  padding-top: 1vw;
}
.paper-text>p{
  margin: 0;
  padding: 0 1vw;
  font-size: 2vw;
  height: 3vw+4px;
  line-height: 3vw+4px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.star-icon{
  font-size: 2vw;
  margin-right: -4px;
}
.paper-star{
  margin-right: 4px;
}
.paper-rating{
  position: relative;
  top: -1px;
}
</style>
