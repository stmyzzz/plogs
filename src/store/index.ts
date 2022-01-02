/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2022-01-02 16:10:34
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2022-01-02 16:16:11
 */
import { createStore } from 'vuex'
const defaultState = {
  count: 0
}
export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count++
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    }
  }
})