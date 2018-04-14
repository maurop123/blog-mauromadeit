// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { vBlog } from 'mauromadeit-vue-commons'

Vue.use(Vuetify)
Vue.use(vBlog, {
  router,
})

Vue.config.productionTip = false

store.dispatch('init')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
