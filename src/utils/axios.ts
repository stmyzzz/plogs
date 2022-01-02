/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2022-01-02 16:50:00
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2022-01-02 16:51:18
 */
import Axios from 'axios'
import { message } from 'ant-design-vue'

const baseURL = 'https://api.github.com'

const axios = Axios.create({
  baseURL,
  timeout: 20000 // 请求超时 20s
})
// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      message.error(`Code: ${code}, message: ${msg}`)
      console.error(`[Axios Error]`, error.response)
    } else {
      message.error(`${error}`)
    }
    return Promise.reject(error)
  }
)

export default axios
