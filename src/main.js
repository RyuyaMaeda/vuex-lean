import Vue from 'vue'
import App from './App.vue'
import store from './store/store'

Vue.config.productionTip = false

//コンポーネントからstoreを利用できるようにする
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
