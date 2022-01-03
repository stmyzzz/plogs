/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2022-01-02 16:03:58
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2022-01-03 02:00:37
 */
import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router'
import Main from '@/layout/main/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {
        path: "/",
        name: "/",
        meta: { transition: "slide-left" },
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/home/index.vue"),
      },
      {
        path: "/home",
        name: "home",
        meta: { transition: "slide-left" },
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/home/index.vue"),
      },
      {
        path: "/art/:id",
        name: "art",
        meta: { transition: "slide-left" },
        component: () =>
          import(/* webpackChunkName: "plogs" */ "../views/plogs/index.vue"),
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router