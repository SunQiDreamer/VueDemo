<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table v-for="(table, index) in paramInfo.sizes" class="info-size" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paramInfo.infos">
        <td class="info-param-key">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style>
.param-info {
  font-size: 14px;
  border-bottom: 5px solid red;
  padding: 20px 15px;
}

.param-info table {
  width: 100%;
  border-collapse: collapse;
}
.param-info table tr {
  height: 42px;
  /* border-bottom: 1px solid rgba(100, 100, 100, .1); */
}

.param-info table tr td {
  border-bottom: 1px solid blue;
}

.info-param {
  border-top: 1px solid yellow;
}

.info-param-key {
  width: 90px;
}

.param-value {
  color: red;
}

.info-img img {
  width: 100%;
}

</style>