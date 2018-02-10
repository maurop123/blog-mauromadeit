import Vue from 'vue'
import Vuex from 'vuex'
import { getFeed as getRSSFeed, parseImage } from '@/utils/rss'
import 'rxjs/add/operator/filter'

Vue.use(Vuex)

const state = {
  posts: [],
}

const mutations = {
  pushPost(state, payload) {
    state.posts.push(payload)
  },
}

const actions = {
  init({ dispatch }) {
    dispatch('getMediumPosts')
  },
  getMediumPosts({ commit }) {
    getRSSFeed('https://medium.com/feed/@mauromadeit')
    .filter(item => item.categories.length > 0)
    .subscribe(post => {
      const { title, link } = post
      const img = parseImage(post.description) || null
      
      commit('pushPost', {
        title,
        link,
        img,
        type: 'medium',
      })
    })
  },
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
})

export default store
