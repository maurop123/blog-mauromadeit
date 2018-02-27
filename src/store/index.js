import Vue from 'vue'
import Vuex from 'vuex'
import 'rxjs/add/operator/filter'
import { parseImage, parseDescription } from '@/utils/rss'
import MediumXml from '~Static/medium.xml'
import Posts from '@/posts'

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
    dispatch('getLocalPosts')
    dispatch('getMediumPosts')
  },
  getLocalPosts({ commit }) {
    Posts.filter(({ publish }) => publish)
    .forEach(post => commit('pushPost', post))
  },
  getMediumPosts({ commit }) {
    MediumXml.rss.channel[0].item
    .filter(item => item.category && item.category.length > 0)
    .map(post => {
      const { title, link, 'content:encoded': desc } = post
      const description = parseDescription(desc[0]) || null
      const img = parseImage(desc[0]) || null

      commit('pushPost', {
        title: title[0],
        description,
        link: link[0],
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
