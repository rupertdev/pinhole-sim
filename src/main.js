import Vue from 'vue'
import App from './App.vue'
import FishUI from 'fish-ui'

Vue.config.productionTip = false
Vue.use(FishUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
