<!--
 * @Description: 
 * @version: 
 * @Author: dlyan.ding
 * @Date: 2022-01-02 17:29:13
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2022-01-02 21:31:30
-->
<template>
  <div class="home">
    <div class="homeHeader">
      <div class="header-logo">🌈 Plog's✨</div>
      <div class="header-title">记录生活，分享快乐</div>
    <div class="record-btn">
      <a-button type="primary" ghost>
        <template #icon>
          <FormOutlined />
        </template>
        开始记录你的plog‘s
      </a-button>
    </div>
      <a-button class="apply-btn" type="link">
       <span style="font-size:15px">🎆</span>创建一个主题<RightOutlined :style="{ fontSize: '10px' }"
      />
      </a-button>
    </div>
    <div class="home-recommoned">
      <h3 class="recommoned-title">plog · 发现</h3>
      <div>
        <a-row :gutter="16">
          <a-col
            :span="6"
            v-for="(item, index) in homeCommonendCard"
            :key="index"
          >
            <!-- @ts-ignore -->
            <ColumnList :artItem="item"></ColumnList>
          </a-col>
        </a-row>
      </div>
      <div class="search-data">
        <a-button class="change-btn" type="primary">
          <SyncOutlined />换一换</a-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  FormOutlined,
  RightOutlined,
  SyncOutlined,
} from "@ant-design/icons-vue";
import ColumnList from "@/components/art-list.vue";
import { homeCommonendCardList } from "@/interface/user";
import { log } from "console";

export default defineComponent({
  components: {
    FormOutlined,
    RightOutlined,
    ColumnList,
    SyncOutlined,
  },
  setup() {
    const homeCommonendCard = ref();
    homeCommonendCard.value = homeCommonendCardList;
    return {
      homeCommonendCard,
    };
  },
});
</script>

<style lang="less" scoped>
.home {
  background: #fbfcfc;
  .homeHeader {
    height: 470px;
    position: relative;
    &::before {
      background: url(https://static.zhihu.com/heifetz/assets/bg@2x.033e5b2d.png)
        repeat-x;
      background-size: 20px 450px;
      content: "";
      height: 100%;
      left: 0;
      position: absolute;
      width: 100%;
    }
  }
  .header-logo {
    font-size: 40px;
    text-align: center;
    padding-top: 205px;
  }
  .header-title {
    margin-top: 35px;
    text-align: center;
    font-size: 20px;
    letter-spacing: 0.5em;
    line-height: 20px;
  }
  .record-btn {
    // position: absolute;
    // top: 400px;
    text-align: center;
    margin-top: 40px;
  }
  .apply-btn {
    position: absolute;
    top: 420px;
    left: 50%;
    margin-left: -60px;
  }
  .home-recommoned {
    display: flex;
    width: 888px;
    margin: 48px auto 0;
    align-items: center;
    flex-direction: column;
    .recommoned-title {
      margin-bottom: 20px;
    }
  }
}
</style>
