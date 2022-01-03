<!--
 * @Description: 
 * @version: 
 * @Author: dlyan.ding
 * @Date: 2021-11-16 17:53:42
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-24 14:57:21
-->
<template>
  <div class="art-main">
    <div class="Card">
      <div class="art-header">
        <div class="art-title">{{ plogHeader[0].title }}</div>
        <div class="art-bufen">{{ plogHeader[0].desc }}</div>
        <div class="art-author">
          <img :src="plogHeader[0].avatar" />
          <div class="authorInfoContent">
            <div>{{ plogHeader[0].title }}</div>
            <div>· 689 篇内容</div>
            <a-dropdown class="dropdown">
              <a class="ant-dropdown-link" @click.prevent>
                <EllipsisOutlined style="font-size: 30px" />
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item>
                    <a>举报</a>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <art-card
        v-for="item in plogList"
        :key="item.id"
        :contentItem="item"
      ></art-card>
    </div>
    <!-- <img :src="col[0].image" alt="" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import {
  homeCommonendCardList,
  plogContentList,
  ColumProps,
  plogContentProps,
} from "@/interface/user";
import { EllipsisOutlined } from "@ant-design/icons-vue";
import artCard from "./components/art-card/index.vue";
export default defineComponent({
  components: {
    EllipsisOutlined,
    artCard,
  },
  setup() {
    const route = useRoute();
    const currentId = Number(route.params.id);
    const handleButtonClick = () => {
      console.log("ok");
    };
    const handleMenuClick = () => {
      console.log("jubao");
    };
    const plogHeader = homeCommonendCardList.filter(
      (art: ColumProps): boolean => art.id === currentId
    );
    const plogList = plogContentList.filter(
      (art: plogContentProps): boolean => art.artId === currentId
    );
    return {
      currentId,
      plogHeader,
      handleButtonClick,
      handleMenuClick,
      plogList,
    };
  },
});
</script>

<style lang="less" scoped>
.art-main {
  .card {
    width: 694px;
    margin: 10px auto 0;
  }
  .Card {
    background-color: #fff;
    margin: 0;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    .art-header {
      display: flex;
      flex-direction: column;
      width: 100vw;
      margin: 24px auto;
      max-width: 720px;
      padding-left: 16px;
      padding-right: 16px;
    }
  }

  .art-title {
    font-size: 25px;
    font-weight: 700;
  }
  .art-bufen {
    margin-top: 8px;
  }
  .art-author {
    display: flex;
    align-items: center;
    margin-top: 10px;
    img {
      width: 30px;
      height: 30px;
      margin-right: 5px;
    }
    .authorInfoContent {
      display: flex;
      align-items: center;
      .dropdown {
        margin-left: 5px;
      }
    }
  }
}
</style>
