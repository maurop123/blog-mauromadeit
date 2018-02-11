<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 md3 class="mt-8">
        <div class="text-xs-center">
          <v-avatar size="225px">
            <img
              class="img-circle elevation-7 mb-5"
              src="/static/author_mauromadeit.png"
            >
          </v-avatar>
          <div class="headline">Mauro Made It</div>
          <div class="subheading text-xs-center grey--text pt-1 pb-3">
            Digital Nomad &middot; Vue Specialist
          </div>
          <v-layout justify-space-around>
            <v-tooltip bottom>
              <v-btn slot="activator"
                flat icon color="grey"
                href="https://twitter.com/mauromadeit"
              >
                <v-icon>fa-twitter</v-icon>
              </v-btn>
              <span>tweet tweet</span>
            </v-tooltip>
            <v-tooltip bottom>
              <v-btn slot="activator"
                flat icon color="grey"
                href="https://medium.com/@mauromadeit"
              >
                <v-icon>fa-medium</v-icon>
              </v-btn>
              <span>mostly Vue posts</span>
            </v-tooltip>
            <v-tooltip bottom>
              <v-btn slot="activator"
                flat icon color="grey"
                href="https://stackoverflow.com/users/story/1387472"
              >
                <v-icon>fa-stack-overflow</v-icon>
              </v-btn>
              <span>developer story</span>
            </v-tooltip>
            <v-tooltip bottom>
              <v-btn slot="activator"
                flat icon color="grey"
                href="https://github.com/maurop123/"
              >
                <v-icon>fa-github</v-icon>
              </v-btn>
              <span>lots of code</span>
            </v-tooltip>
            <v-tooltip bottom>
              <v-btn slot="activator"
                flat icon color="grey"
                href="https://github.com/maurop123/"
              >
                <v-icon>fa-envelope</v-icon>
              </v-btn>
              <span>maurop123@gmail.com</span>
            </v-tooltip>
          </v-layout>
        </div>
      </v-flex>
      <!-- <v&#45;flex xs12 md4 offset&#45;md3> -->
      <!-- <v&#45;flex xs12 md8 offset&#45;md1> -->
      <masonry xs12 md8 offset-md1 :items="posts">
          <!-- <v&#45;layout column justify&#45;space&#45;between fill&#45;height class="page&#45;height"> -->
          <!-- <v&#45;layout column v&#45;for="n in columns"> -->
            <!-- <v&#45;flex v&#45;for="post in postsSlice" :key="post.title"> -->
            <!-- <v&#45;flex slot&#45;scope="item" :key="item.title" xs12 md6> -->
            <v-card slot-scope="{ item }" :key="item.title" class="my-3" hover>
                <v-card-media v-if="item.img"
                  class="white--text"
                  height="300px"
                  :src="item.img"
                />
                <v-card-title>
                  <h2>
                    {{ item.title }}
                  </h2>
                </v-card-title>
                <v-card-actions>
                  <v-btn v-if="item.type === 'medium'"
                    flat block class="green--text"
                    :href="item.url"
                  >
                    Read More on Medium
                  </v-btn>
                  <v-btn v-else
                    flat block class="blue--text"
                  >
                    Read More
                  </v-btn>
                </v-card-actions>
              </v-card>
            <!-- </v&#45;flex> -->
          <!-- </v&#45;layout> -->
          <!-- <v&#45;flex class="text&#45;xs&#45;center"> -->
          <!--   <v&#45;pagination v&#45;model="postsPage" :length="postsPages" circle /> -->
          <!-- </v&#45;flex> -->
        <!-- </v&#45;flex> -->
      </masonry>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'
  import Masonry from './MasonryLayout'

  export default {
    name: 'home-page',
    components: {
      Masonry,
    },
    data () {
      return {
        postsPage:  1,
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
    },
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  .page-height {
    min-height: 864px;
  }

  .mt-8 {
    margin-top: 160px !important;
  }
</style>
