<template lang="pug">
  vert-split-posts
    intro-side(slot="side")
    masonry(slot="posts" :items="posts")
      template(slot-scope="post")
        post(v-bind="post" :key="post.id")
</template>

<script>
  import { mapState } from 'vuex'
  import IntroSide from '@/components/IntroSide'
  import { components } from 'mauromadeit-vue-commons'
  const {
    PostCard: Post,
    layouts,
  } = components

  const { MasonryGrid: Masonry, VertSplitPosts } = layouts

  export default {
    name: 'home-page',
    components: {
      IntroSide,
      Masonry,
      Post,
      VertSplitPosts,
    },
    computed: {
      posts() {
        return this.$store.getters.getPublishedPosts
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
