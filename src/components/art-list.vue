<!--
 * @Description: 
 * @version: 
 * @Author: dlyan.ding
 * @Date: 2021-11-15 15:48:21
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2022-01-02 23:58:03
-->
<template>
  <div class="recommoned-wrapper">
    <img class="art-img" :src="artItem.avatar" />
    <div class="wrapper-info">
      <div class="wrapper-title">{{ artItem.title }}</div>
      <div class="wrapper-content">
        {{ artItem.desc }}
      </div>
    </div>
    <div class="wrapper-about">2,703人关注｜580篇plog</div>
    <div class="wrapper-action">
      <a-button @click="enterArt(artItem.id)" type="primary" ghost
        >进入专栏</a-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useRouter } from "vue-router";
import { ColumProps } from "@/interface/user";
export default defineComponent({
  name: "ColumnList",
  props: {
    artItem: {
      type: Object as PropType<ColumProps>,
      required: true,
    },
  },
  setup() {
    const router = useRouter();
    const enterArt = (id: number) => {
      router.push({
        name: "art",
        params: {
          id,
        },
      });
    };
    return { enterArt };
  },
});
</script>

<style lang="less" scoped>
.recommoned-wrapper {
  background: #fff;
  width: 210px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 26px 0 23px;
  transition: box-shadow 0.3s, border-color 0.3s;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin: 0 0 20px 0;
  .art-img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
  }
  .wrapper-info {
    padding: 0px 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    .wrapper-title {
      text-align: center;
      margin-top: 12px;
      font-size: 18px;
    }
    .wrapper-content {
      font-size: 13px;
      text-align: center;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      word-break: break-all;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  .wrapper-about {
    font-size: 14px;
    color: #808080;
    margin-top: 20px;
  }
  .wrapper-action {
    margin-top: 20px;
  }
}
</style>
