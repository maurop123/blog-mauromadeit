<template>
  <div v-html="content">
  </div>
</template>

<script>
  import { markdown } from 'markdown'

  export default {
    name: 'post-page',
    props: ['postLink'],
    computed: {
      post() {
        return this.$store.getters.getPostByLink(this.postLink)
      },
      content() {
        return markdown.toHTML(this.post.content) || null
      },
    },
  }
</script>
