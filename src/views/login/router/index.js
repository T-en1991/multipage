import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../pages/login.vue'
import register from '../pages/register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login'
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_REGISTER,
  routes
})

export default router
