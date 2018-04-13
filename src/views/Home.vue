<template>
  <vert-split-posts>
    <intro-side slot="side" />
    <div slot="posts">
      <scrolling-section :items="writing" title="Writing" />
      <scrolling-section :items="speaking" title="Speaking" />
      <!-- <scrolling&#45;section :items="posts" title="Blog" post /> -->
      <!-- <section id="blog" class="my&#45;5"> -->
      <!--   <h2 class="display&#45;1">Blog</h2> -->
      <!--   <v&#45;layout row wrap> -->
      <!--     <v&#45;flex xs12 sm8 offset&#45;sm2 md6 offset&#45;md3 lg4 offset&#45;lg4 -->
      <!--      v&#45;for="post in posts" :key="post.id" -->
      <!--     > -->
      <!--       <post&#45;card :post="post" /> -->
      <!--     </v&#45;flex> -->
      <!--   </v&#45;layout> -->
      <!-- </section> -->
    </div>
  </vert-split-posts>
</template>

<script>
  import Vue from 'vue'
  import { mapState } from 'vuex'
  import homeData from './home-content'
  import IntroSide from '@/components/IntroSide'

  import { components } from 'mauromadeit-vue-commons'
  const {
    FlexCard,
    PostCard,
    layouts,
  } = components
  const {
    GridList,
    MasonryGrid,
    VertSplitPosts,
    HorizontalScroller: XScroller,
  } = layouts

  const ScrollingSection = Vue.extend({
    name: 'scrolling-section',
    template: `
      <section :id="name" class="my-5">
        <h2 class="display-1">{{ title }}</h2>
        <x-scroller class="my-4">
          <grid-list class="my-3">
            <template v-for="item in items">
              <post-card v-if="post" :post="item" />
              <flex-card v-else v-bind="item" />
            </template>
          </grid-list>
        </x-scroller>
      </section>
    `,
    components: {
      FlexCard,
      GridList,
      PostCard,
      XScroller,
    },
    props: {
      items: Array,
      title: String,
      post: Boolean,
    },
    computed: {
      name() {
        return this.title ? this.title.toLowerCase() : ''
      },
    },
  })

  export default {
    name: 'home-page',
    components: {
      PostCard,
      IntroSide,
      MasonryGrid,
      ScrollingSection,
      VertSplitPosts,
    },
    data () {
      return {
        postsPage: 1,
        postsPageSize: 3,
        columns: 2,
        ...homeData,
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
