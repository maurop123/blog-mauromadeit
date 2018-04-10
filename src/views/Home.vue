<template>
  <vert-split-posts>
    <intro-side slot="side" />
    <div slot="posts">
      <scrolling-section :items="writing" title="Writing" />
      <hr />
      <scrolling-section :items="speaking" title="Speaking" />
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
    layouts,
  } = components
  const {
    GridList,
    VertSplitPosts,
    HorizontalScroller: XScroller,
  } = layouts

  const ScrollingSection = Vue.extend({
    name: 'scrolling-section',
    template: `
      <section :id="name" class="my-5">
        <h3 class="display-1">{{ title }}</h3>
        <x-scroller class="my-4">
          <grid-list class="my-3">
            <flex-card v-for="item in items"
              v-bind="item"
            />
          </grid-list>
        </x-scroller>
      </section>
    `,
    components: {
      FlexCard,
      GridList,
      XScroller,
    },
    props: {
      items: Array,
      title: String,
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
      FlexCard,
      GridList,
      XScroller,
      IntroSide,
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
