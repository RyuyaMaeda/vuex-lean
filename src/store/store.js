import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 0,
        name: '牛乳を買う',
        done: false
      },
      {
        id: 1,
        name: 'vueの学習をする',
        done: false
      }
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
