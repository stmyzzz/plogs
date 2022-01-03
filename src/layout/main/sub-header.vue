<!--
 * @Description: 
 * @version: 
 * @Author: dlyan.ding
 * @Date: 2021-11-15 16:48:37
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2022-01-02 20:44:16
-->
<template>
  <a-layout-header
    :style="{
      position: 'fixed',
      zIndex: 1,
      height: '50px',
      padding: '0 20px',
      lineHeight: '52px',
      width: '100%',
      background: '#fff',
      boxShadow: '0 1px 3px rgb(18 18 18 / 10%)',
    }"
  >
    <a-row
      :style="{
        width: '1000px',
        margin: '0 auto',
      }"
      justify="space-between"
    >
      <div @click="goHome" class="logo">
        <!-- <img class="img" src="@/assets/logo.png" alt="" /> -->
        <span style="font-size:30px">🌈</span>
      </div>
      <a-row class="info">
        <div v-if="user.isLogin" class="extra" :style="{ marginRight: '20px' }">
          <a-dropdown>
            <a class="ant-dropdown-link" @click.prevent>
              <div>更多</div>
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item key="0">
                  <span> 我的文章 </span>
                </a-menu-item>
                <a-menu-item key="1">
                  <span> 我的专栏 </span>
                </a-menu-item>
                <a-menu-item key="1">
                  <router-link to="/about"> 关于 </router-link>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
        <div class="edit">
          <a-button :style="{ marginRight: '20px' }" type="primary" ghost>
            <template #icon> <FormOutlined /></template>写plog</a-button
          >
        </div>
        <div class="avatar">
          <div v-if="user.isLogin">
            <a-avatar :src="user.avatarUrl" shape="square"> </a-avatar>
            <span>{{ user.name }}</span>
          </div>
          <a-button v-if="!user.isLogin" type="primary">登录/注册</a-button>
        </div>
      </a-row>
    </a-row>
  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { FormOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
import { UserProps } from "@/interface/user";
export default defineComponent({
  components: {
    FormOutlined,
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true,
    },
  },
  setup() {
    const router = useRouter();
    const goHome = () => {
      router.push("/");
    };
    return { goHome };
  },
});
</script>

<style lang="less" scoped>
.img {
  width: 40px;
  height: 40px;
}
</style>
