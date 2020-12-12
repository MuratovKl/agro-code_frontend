import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { wsManager } from './utils/WsManager'

Vue.config.productionTip = false

// connect to ws
wsManager.connect()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
