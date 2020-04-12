<template>
  <div class="toast" v-show="isShow">
    <span class="info">{{message}}</span>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      isShow: false,
      message: "我是默认文字"
    };
  }
};
</script>

<style>
.toast {
  position: fixed;
  top: 50px;
  transform: translate(0, -50%);
  text-align: center;
  z-index: 999;
  width: 100%;
}

.info {
  background-color: rgba(0, 0, 0, .8);
  color: #eee;
  padding: 10px;
  border-radius: 8px;
}
</style>