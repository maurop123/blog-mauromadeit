import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
  ]
})

Vue.use(VueAnalytics, {
  id: 'UA-116400276-1',
  router,
  autoTracking: {
    page: process.env.NODE_ENV !== 'development'
  },
  debug: process.env.DEBUG ? {
    enabled: true,
    trace: false,
    sendHitTask: true
  } : false
})

export default router
