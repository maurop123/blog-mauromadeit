<template>
  <vert-split-posts>
    <intro-side slot="side" />
    <div
      slot="posts"
    >
      <section id="speaking">
        <h3 class="display-1">Speaking</h3>
        <x-scroller class="my-4">
          <grid-list class="my-3">
            <flex-card v-for="item in speaking"
              v-bind="item"
            />
          </grid-list>
        </x-scroller>
      </section>
      <hr />
      <section id="writing">
        <h3 class="display-1">Writing</h3>
        <x-scroller class="my-4">
          <grid-list class="my-3">
            <flex-card v-for="item in writing"
              v-bind="item"
            />
          </grid-list>
        </x-scroller>
      </section>
      <!-- <masonry -->
      <!--   :items="posts" -->
      <!--   :columns="dynamicColumns" -->
      <!-- > -->
      <!--   <div slot&#45;scope="{ item }" :key="item.title"> -->
      <!--     <template v&#45;if="item.type === 'medium'"> -->
      <!--       <v&#45;card class="my&#45;4"> -->
      <!--         <v&#45;card&#45;media v&#45;if="item.img" -->
      <!--           class="white&#45;&#45;text" -->
      <!--           height="300px" -->
      <!--           :src="item.img" -->
      <!--         /> -->
      <!--         <v&#45;card&#45;title> -->
      <!--           <h2>{{ item.title }}</h2> -->
      <!--         </v&#45;card&#45;title> -->
      <!--         <v&#45;card&#45;text v&#45;if="item.description &#38;&#38; !item.img" -->
      <!--           class="truncate" -->
      <!--         > -->
      <!--           <div> -->
      <!--             {{ item.description }} -->
      <!--             <!&#45;&#45; <span class="ellipses"></span> &#45;&#45;> -->
      <!--           </div> -->
      <!--           <div class="fade"></div> -->
      <!--         </v&#45;card&#45;text> -->
      <!--         <v&#45;card&#45;actions> -->
      <!--           <v&#45;btn flat block class="green&#45;&#45;text" -->
      <!--             :href="item.link" -->
      <!--           > -->
      <!--             Read More on Medium -->
      <!--           </v&#45;btn> -->
      <!--         </v&#45;card&#45;actions> -->
      <!--       </v&#45;card> -->
      <!--     </template> -->
      <!--     <template v&#45;else> -->
      <!--       <post :post="item" /> -->
      <!--     </template> -->
      <!--   </div> -->
      <!-- </masonry> -->
    </div>
  </vert-split-posts>
</template>

<script>
  import { mapState } from 'vuex'
  import IntroSide from '@/components/IntroSide'
  import XScroller from '@/components/HorizontalScroller'
  import FlexCard from '@/components/FlexCard'
  import GridList from '@/components/GridList'
  // import Masonry from 'mauromadeit/components/MasonryLayout'
  import { components } from 'mauromadeit-vue-commons'
  const {
    MasonryGrid: Masonry,
    PostCard: Post,
    layouts,
  } = components

  const { VertSplitPosts } = layouts

  export default {
    name: 'home-page',
    components: {
      IntroSide,
      FlexCard,
      GridList,
      Masonry,
      Post,
      VertSplitPosts,
      XScroller,
    },
    data () {
      return {
        postsPage: 1,
        postsPageSize: 3,
        columns: 2,
        writing: [{
          title: 'How Vue-Cli 3 Will Shape Our Future',
          img: {
            src: 'https://cdn-images-1.medium.com/max/600/1*asPu5VlOK4iQlNcvqD7w6Q.gif',
            classes: ['contain'],
          },
          link: {
            url: 'https://medium.com/vuetify/how-vue-cli-3-will-shape-our-future-eb7c01f4a241',
            source: 'medium',
          },
        }, {
          title: 'Passing methods as props in Vue.js',
          img: {
            src: 'https://cdn-images-1.medium.com/max/1024/1*fTV_1UOGZf60Oo-zC7O66w.jpeg',
          },
          link: {
            url: 'https://medium.com/front-end-hacking/passing-methods-as-props-in-vue-js-d65805bccee',
            source: 'medium',
          },
        }, {
          title: 'Vue’s new and improved prop.sync',
          img: {
            src: 'https://cdn-images-1.medium.com/max/599/1*EeFpBMlA7kPCKjfb6sMY9w.png',
          },
          link: {
            url: 'https://medium.com/front-end-hacking/vues-v-model-directive-vs-sync-modifier-d1f83957c57c',
            source: 'medium',
          },
        }, {
          title: 'Keeping props DRY in Vue.js',
          img: {
            src: 'https://cdn-images-1.medium.com/max/632/1*SLrxuR7nE37KfEmee2YXAQ.jpeg',
          },
          link: {
            url: 'https://medium.com/front-end-hacking/keeping-props-dry-in-vue-js-9d8294fa708f',
            source: 'medium',
          },
        }, {
          title: 'Avoid 80% of Git merge conflicts',
          img: {
            src: 'https://media.giphy.com/media/bEjLIhTDqJRaE/giphy.gif',
          },
          link: {
            url: 'https://medium.com/front-end-hacking/avoid-80-of-merge-conflicts-with-git-rebase-b5d755a082a6',
            source: 'medium',
          },
        }],
        speaking: [{
          title: 'Vuenos Aires',
          img: {
            src: '/static/vuenosaires_animated.svg',
            classes: ['animate', 'contain'],
          },
        }, {
          title: 'MiamiJS',
          img: {
            src: '/static/miamijs_logo.jpeg',
          },
        }, {
          title: 'FL Vocational Institute',
          img: {
            src: '/static/fvi_logo.jpg',
          },
        }],
      }
    },
    computed: {
      ...mapState(['posts']),
      postsPages() {
        return Math.ceil( this.posts.length / this.postsPageSize )
      },
      postsSlice() {
        const start = (this.postsPage - 1) * this.postsPageSize
        const end = start + this.postsPageSize
        return this.posts.slice(start, end)
      },
      dynamicColumns() {
        const { $vuetify } = this
        return ($vuetify.breakpoint.lgAndUp) ? 3
        : ($vuetify.breakpoint.smAndUp) ? 2
        : 1
      },
    },
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  .ellipses {
    float: right;
    position: relative;
    top: -50px;
    left: 300px;
    width: 100px;
    margin-left: -100px;
    padding-right: 5px;
  }
</style>
