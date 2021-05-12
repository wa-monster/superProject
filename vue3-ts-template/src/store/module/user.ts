import { Module } from "vuex"
// import { clearCookie, getCookie, setCookie } from "utils/auth"
export interface UserState {
  token: string | null
}

const user: Module<UserState, any> = {
  // namespaced: true, // 防止模块命名冲突 设置后调用mutations和action需要'模块名/方法' 例如  user/getToken
  mutations: {
    // 登陆成功存储token
    SET_TOKEN(state, token) {
      state.token = token
      // setCookie("token", state.token)
    },
    // 退出登录
    OUT_LOGIN() {
      // clearCookie("token")
    },
  },
  actions: {},
}
export default user
