<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" :index="currentIndex" />
    <scroll>
      
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import Scroll from "../../components/common/scroll/Scroll"

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    Scroll
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    titleClick(index) {

    }
  }
};
</script>

<style>

</style>