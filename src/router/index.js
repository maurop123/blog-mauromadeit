import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HomePage'
import Post from '@/components/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/blog/:postTitle',
      name: 'post',
      component: Post,
    },
  ]
})
