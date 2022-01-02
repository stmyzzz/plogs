/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2022-01-02 16:03:58
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2022-01-02 16:08:54
 */
import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'
import Home from '@/views/home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/antd',
    name: 'antd',
    component: () => import('@/views/antd.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router