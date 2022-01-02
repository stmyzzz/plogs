/*
 * @Description: 
 * @version: 
 * @Author: dlyan.ding
 * @Date: 2022-01-02 15:55:30
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2022-01-02 15:59:51
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  base: './',
  server: {
    port: 8080,
    open: true,
    cors: true,
    // proxy: { //设置代理
    //   '/api': {
    //     target: '',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // }
  }
})
