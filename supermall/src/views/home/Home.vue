<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <scroll class="content"
            ref="scroll">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
    </scroll>
  </div>
</template>
  
<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import HomeSwiper from "./childComps/HomeSwiper"
import {getHomeMultidata, getHomeGoods} from "../../network/home.js"

export default {
  name: "Home",
  components: {
    NavBar,
    Scroll,
    HomeSwiper
  },
  data () {
    return {
      banners: [],
      recommends: []
    }
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        console.log(res)
        
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    swiperImageLoad() {

    }
  },
  created() {
    this.getHomeMultidata()
  }
};
</script>

<style>

#home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}

.content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>