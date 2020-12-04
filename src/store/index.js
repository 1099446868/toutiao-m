import { createStore } from 'vuex'
import { setItem, getItem } from '@/utils/func'

const USER_KEY = 'toutiao-user'

export default createStore({
  state: {
    user: getItem(USER_KEY) // 当前登录用户的登录状态  (token等数据)
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      // 持久化数据
      // window.localStorage.setItem('user', JSON.stringify(data))
      setItem(USER_KEY, data)
    }
  },
  actions: {
  },
  modules: {
  }
})
