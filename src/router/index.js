import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/smile-tiles',
    name: 'SmileTiles',
    component: () =>
      import(/* webpackChunkName: "SmileTiles" */ '../views/SmileTiles.vue')
  },
  {
    path: '/youtube360',
    name: 'YouTube360',
    component: () =>
      import(/* webpackChunkName: "YouTube360" */ '../views/YouTube360.vue')
  },
  {
    path: '/emojify',
    name: 'Emojify',
    component: () =>
      import(/* webpackChunkName: "Emojify" */ '../views/Emojify.vue')
  },
  {
    path: '/1st-person',
    name: '1stPerson',
    component: () =>
      import(/* webpackChunkName: "1stPerson" */ '../views/1stPerson.vue')
  },
  {
    path: '/face-paint',
    name: 'FacePaint',
    component: () =>
      import(/* webpackChunkName: "FacePaint" */ '../views/FacePaint.vue')
  },
  {
    path: '/keyboard',
    name: 'VirtualKeyboard',
    component: () =>
      import(
        /* webpackChunkName: "VirtualKeyboard" */ '../views/VirtualKeyboard.vue'
      )
  },
  {
    path: '/desktop',
    name: 'Desktop',
    component: () =>
      import(/* webpackChunkName: "Desktop" */ '../views/Desktop.vue')
  },

  {
    path: '/chrome',
    name: 'Chrome',
    component: () =>
      import(/* webpackChunkName: "Chrome" */ '../views/Chrome.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () =>
      import(/* webpackChunkName: "Settings" */ '../views/Settings.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
