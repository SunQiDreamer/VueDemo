<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <scroll class="content" ref="scroll"></scroll>
  </div>
</template>
  
<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Scroll
  }
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
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