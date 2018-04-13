import Vue from 'vue'
import Vuex from 'vuex'
import 'rxjs/add/operator/filter'
import { parseImage, parseImageFromDescrip, parseDescription } from '@/utils/rss'
import MediumXml from '~Static/mediumClean.xml'
import { db, posterDB } from '@/database'

Vue.use(Vuex)

const state = {
  posts: [],
}

const getters = {
  getPostByLink: state => link => state.posts.find(p => p.link === link)
}

const mutations = {
  pushPost(state, payload) {
    state.posts.push(payload)
  },
  unshiftPost(state, payload) {
    state.posts.unshift(payload)
  },
}

const actions = {
  init({ dispatch }) {
    dispatch('getFirebasePosts')
    // dispatch('getLocalPosts')
  },
  getFirebasePosts({ commit }) {
    return new Promise((resolve, reject) => {
      const path = `destinations/mauromadeit/posts`
      posterDB.get(path).subscribe(col => {
        if (col) {
          resolve(col)

          col.filter(p => p.published)
          .forEach(post => commit('unshiftPost', post))
        } else {
          reject(col)
        }
      })
    })
  },
  getLocalPosts({ commit }) {
    MediumXml.rss.channel[0].item
    .filter(item => item.category && item.category.length > 0)
    .map(post => {
      const { title, link, 'content:encoded': desc, image } = post
      const description = parseDescription(desc[0]) || null
      const img = (image) ? parseImage(image)
      : parseImageFromDescrip(desc[0]) || null

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
  getters,
  mutations,
  actions,
})

export default store
