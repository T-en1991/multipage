import Vue from 'vue'
import VueRouter from 'vue-router'
import ex from '../pages/ex.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/ex'
  },
  {
    path: '/ex',
    name: 'ex',
    component: ex
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes
})

export default router
