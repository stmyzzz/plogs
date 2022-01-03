/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-11-15 15:45:07
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2022-01-03 01:34:23
 */
import { createStore } from "vuex";
import { mockRequest } from "@/api/mockRequest";

export default createStore({
  state: {
    user: {},
    list: [],
  },
  mutations: {
    getList(state, newState) {
      state.list = newState.data;
    },
    setUserInfo(state, newState) {
      state.user = newState;
    }
  },
  actions: {
    handleLogin(context) {
      mockRequest({}, {
        ret: 0, data: [{
          isLogin: true,
          name: "stmy",
          avatarUrl:
            "https://pic4.zhimg.com/v2-798eec71376070846e6a13646c779b76_is.jpg",
        }]
      }).then((res: any) => {
        context.commit("setUserInfo", res.data[0]);
      });
    },
  },
  modules: {},
});
