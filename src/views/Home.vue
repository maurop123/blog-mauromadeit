<template>
  <vert-split-posts>
    <intro-side slot="side" />
    <masonry
      slot="posts"
      :items="posts"
      :columns="dynamicColumns"
    >
      <div slot-scope="{ item }" :key="item.title">
        <template v-if="item.type === 'medium'">
          <v-card class="my-4">
            <v-card-media v-if="item.img"
              class="white--text"
              height="300px"
              :src="item.img"
            />
            <v-card-title>
              <h2>{{ item.title }}</h2>
            </v-card-title>
            <v-card-text v-if="item.description && !item.img"
              class="truncate"
            >
              <div>
                {{ item.description }}
                <!-- <span class="ellipses"></span> -->
              </div>
              <div class="fade"></div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat block class="green--text"
                :href="item.link"
              >
                Read More on Medium
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
        <template v-else>
          <post :post="item" />
        </template>
      </div>
    </masonry>
  </vert-split-posts>
</template>

<script>
  import { mapState } from 'vuex'
  import IntroSide from '@/components/IntroSide'
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
      Masonry,
      Post,
      VertSplitPosts,
    },
    data () {
      return {
        postsPage: 1,
        postsPageSize: 3,
        columns: 2,
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
