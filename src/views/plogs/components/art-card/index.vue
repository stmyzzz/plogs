<!--
 * @Description: 
 * @version: 
 * @Author: dlyan.ding
 * @Date: 2021-11-19 14:29:36
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2022-01-03 11:33:15
-->
<template>
  <div class="art-card card">
    <h3>{{ contentItem.title }}</h3>
    <div class="card-inner">
      <div class="img-cover-inner">
        <div class="img-inner">
          <img
            src="https://pic4.zhimg.com/v2-964298be9c0ed470b02e17777d91c8c1_400x224.jpg"
            alt
          />
        </div>
      </div>
      <div class="card-content">
        国际邀请赛的最大魔力不在于它每年都能刷新电子竞技历史上的奖金记录，而是在于它每年都能给观众们留下终生难忘的回忆。但每当我们回顾过去几年的TI时，却总会有种“缺了些什么”
        的感觉。从一个方面来说，我们缺...<span
          ><a>阅读全文<CaretDownFilled></CaretDownFilled></a
        ></span>
      </div>
    </div>
    <div class="content-actions">
        <span>
          <a-button class="agree" type="primary">
            <HeartOutlined class="mr-10" />
            <!-- <HeartFilled class="mr-10" /> -->
            喜欢 30
          </a-button>
        </span>
      <div class="comment aciton-button">
        <FireFilled class="mr-10"></FireFilled>11条评论
      </div>
      <div class="comment aciton-button">
        <StarFilled class="mr-10"></StarFilled>收藏
      </div>
      <div class="comment aciton-button">
        <FlagFilled class="mr-10"></FlagFilled>举报
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import {
  CloudFilled,
  CaretUpFilled,
  CaretDownFilled,
  FlagFilled,
  StarFilled,
  FireFilled,
  HeartOutlined,
  HeartFilled
} from "@ant-design/icons-vue";
import { plogContentProps } from "@/interface/user";
export default defineComponent({
  name: "art-card",
  components: {
    CloudFilled,
    CaretUpFilled,
    CaretDownFilled,
    FlagFilled,
    StarFilled,
    FireFilled,
    HeartOutlined,
    HeartFilled
  },
  props: {
    contentItem: {
      require: true,
      type: Object as PropType<plogContentProps>,
    },
  },
  setup(props) {
    console.log(`props`, props);
  },
});
</script>

<style lang="less" scoped>
.card {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 16px 20px;
  background-color: #fff;
  cursor: pointer;
}
.img-inner {
  width: 190px;
  height: 105px;
  img {
    width: 100%;
    height: 100%;
  }
}
.card-inner {
  .card-content {
    margin-right: 10px;
    margin-top: 12px;
    font-size: 15px;
  }
  .img-cover-inner {
    position: relative;
    width: 180px;
    height: 105px;
    float: left;
    overflow: hidden;
    background-position: 50%;
    background-size: cover;
    border-radius: 5px;
    margin-right: 10px;
    .img-inner {
      position: absolute;
    }
  }
}
.content-actions {
  display: flex;
  align-items: center;
  clear: both;
  background-color: #fff;
  padding: 10px 0px 0px 0px;
  .reAgree {
    margin-left: 10px;
  }
  .aciton-button {
    color: #8590a6;
  }
  .comment {
    margin-left: 15px;
  }
  .mr-10 {
    margin-right: 5px;
  }
}
</style>
