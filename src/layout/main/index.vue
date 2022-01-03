<!--
 * @Description: 
 * @version: 
 * @Author: dlyan.ding
 * @Date: 2022-01-03 01:41:57
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2022-01-03 02:06:17
-->

<template>
    <a-layout>
    <SubHeader :user="user"></SubHeader>
    <a-layout-content :style="{ marginTop: '51px' }">
      <router-view v-slot="{ Component }">
        <transition name="slide-left">
          <component :is="Component" />
        </transition>
      </router-view>
    </a-layout-content>
    <SubFooter></SubFooter>
  </a-layout>
</template>

<script>
import SubHeader from '@/common/sub-header.vue'
import SubFooter from '@/common/sub-footer.vue'
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
  export default defineComponent({
    name: '',
    components:{
      SubHeader,
      SubFooter
    },
     setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("handleLogin");
    });
    console.log(`store.state`, store.state);
    const user = computed(() => store.state.user);
    return {
      user
    };  
  },
  })
</script>

<style lang="less" scoped>
  
</style>  