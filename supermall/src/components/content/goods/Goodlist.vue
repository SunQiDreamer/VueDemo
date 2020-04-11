<template>
<div class="goods">
  <goods-list-item v-for="item in goods" :goodsItem="item"/>
</div>
  
</template>

<script>
import GoodsListItem from './GoodListItem.vue'

export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      defalt() {
        return []
      }
    }
  }
}
</script>

<style>
  .goods {
    display: flex;
    /* flex布局超出一行可以换行 */
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }

</style>