import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
console.log(11)
console.log(process.env);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
