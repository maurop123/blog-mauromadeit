import Vue from 'vue'
import Vuex from 'vuex'
// eslint-disable-next-line
import { getFeed as getRSSFeed } from '@/utils/rss'
// eslint-disable-next-line
import { parseImage, parseDescription } from '@/utils/rss'
import 'rxjs/add/operator/filter'
import MediumXml from '~Static/medium.xml'

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
  getLiveMediumPosts({ commit }) {
    getRSSFeed('https://medium.com/feed/@mauromadeit')
    .filter(item => item.categories.length > 0)
    .subscribe(post => {
      const { title, link, description: desc } = post
      const description = parseDescription(desc) || null
      const img = parseImage(desc) || null

      commit('pushPost', {
        title,
        description,
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
