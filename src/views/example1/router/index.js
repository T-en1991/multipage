import Vue from 'vue'
import VueRouter from 'vue-router'
import ex1 from '../pages/ex.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/example1',
    redirect:'/example1/ex1'
  },
  {
    path: '/example1/ex1',
    name: 'ex1',
    component: ex1
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes
})

export default router
