<!--
 * @Description: 
 * @version: 
 * @Author: dlyan.ding
 * @Date: 2021-11-15 15:45:07
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2022-01-03 01:42:45
-->
<template>
  <router-view v-slot="{ Component }">
      <component :is="Component" />
  </router-view>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  components: {
    // ColumnList,
  },
  setup() {
   
  },
});
</script>
<style lang="less">
#app{
  background:#fbfcfc;
}
.slide-left-enter {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-enter-active {
  transition: all 0.5s ease;
}
.slide-left-leave-to {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
.slide-left-leave-active {
  transition: all 0.5s ease;
}
</style>
