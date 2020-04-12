<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" :index="currentIndex" />
    <scroll class="content" ref="scroll" :probe-type="3">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-param-info :param-info="paramInfo" ref="param" />
      <detail-comment-info :comment-info="commentInfo" ref="comment" />
      <detail-recommend-info :recommends="recommends" ref="recommend" />
    </scroll>
    <detail-bottom-bar @addCartClick="addToCart" />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import Scroll from "../../components/common/scroll/Scroll";
import DetailSwiper from "./childComps/DetailSwiper";
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam
} from "../../network/detail";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailRecommendInfo from "./childComps/DetailRecommendInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import { mapActions } from "vuex";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    Scroll,
    DetailSwiper,
    DetailBaseInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailBottomBar
  },
  data() {
    return {
      iid: null,
      currentIndex: 0,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTops: []
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      this.shop = new Shop(data.shopInfo);

      this.detailInfo = data.detailInfo;

      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });

    getRecommend().then(res => {
      this.recommends = res.data.list;
    });
  },
  methods: {
    ...mapActions(["addCart"]),
    titleClick(index) {},

    addToCart() {
      const obj = {};
      obj.iid = this.iid;
      obj.title = this.goods.title;
      obj.desc = this.goods.desc;
      obj.price = this.goods.realPrice;
      obj.image = this.topImages[0];

      this.addCart(obj).then(res => {
        this.$toast(res);
      });
    }
  }
};
</script>

<style>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  height: calc(100% - 44px - 58px);
}
</style>