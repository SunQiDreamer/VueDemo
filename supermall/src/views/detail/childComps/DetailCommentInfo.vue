<template>
  <div>
    <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
      <div class="info-header">
        <div class="header-title">用户评价</div>
        <div class="header-more">
          更多
          <i class="arrow-right"></i>
        </div>
      </div>
      <div class="info-user">
        <img :src="commentInfo.user.avatar" alt />
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="info-detail">
        <p>{{commentInfo.content}}</p>
        <div class="info-other">
          <span class="date">{{commentInfo.created | showDate}}</span>
          <span>{{commentInfo.style}}</span>
        </div>
        <div class="info-imgs">
          <img :src="item" v-for="(item, index) in commentInfo.images" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "../../../common/untils";
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    showDate(value) {
      const date = new Date(value * 1000);
      return formatDate(date, "yyyy/MM/dd");
    }
  }
};
</script>

<style>
.comment-info {
  padding: 5px 12px;
  color: pink;
  border-bottom: 5px solid black;
}

.info-header {
  height: 50px;
  background-color: blue;
  line-height: 50px;
  border-bottom: 5px solid black;
}

.header-title {
  float: left;
  font-size: 15px;
}

.header-more {
  float: right;
  margin-right: 10px;
  font-size: 13px;
}

.info-user {
  background-color: yellow;
  padding: 10px 0 5px;
}

.info-user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}

.info-user span {
  position: relative;
  top: -15px;
  margin-left: 10px;
}

.info-detail {
  padding: 0 5px 15px;
  /* background-color: burlywood; */
}

.info-detail p {
  font-size: 14px;
  /* color: orange; */
  line-height: 1.5;
}

.info-detail .info-other {
  font-size: 12px;
  color: red;
  margin-top: 10px;
}

.info-other .date {
  margin-right: 8px;
}

.info-imgs {
  margin-top: 10px;
}

.info-imgs img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>