<template>
  <v-container>
    <v-layout row wrap align-center>
      <v-flex xs12 md4>
        <div class="text-xs-center">
          <v-avatar size="225px">
            <img
              class="img-circle elevation-7 mb-1"
              src="/static/author_mauromadeit.png"
            >
          </v-avatar>
          <div class="headline">Mauro Made It</div>
          <div class="subheading text-xs-center grey--text pt-1 pb-3">Vue Specialist &middot; Digital Nomad</div>
          <!-- <v&#45;layout justify&#45;space&#45;around> -->
          <!--   <a href="javascript:;" class="body&#45;2">Home</a> -->
          <!--   <a href="javascript:;" class="body&#45;2">About</a> -->
          <!--   <a href="javascript:;" class="body&#45;2">Github</a> -->
          <!--   <a href="javascript:;" class="body&#45;2">Other</a> -->
          <!-- </v&#45;layout> -->
        </div>
      </v-flex>
      <v-flex xs12 md5 offset-md2>
        <v-layout column justify-space-between fill-height class="page-height">
          <v-flex v-for="post in postsSlice" :key="post.title">
            <v-card class="my-3" hover>
              <v-card-media v-if="post.img"
                class="white--text"
                height="170px"
                :src="post.img"
              />
              <v-card-title>
                <h2>
                  {{ post.title }}
                </h2>
              </v-card-title>
              <v-card-actions>
                <v-btn v-if="post.type === 'medium'"
                  flat block class="green--text"
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
          </v-flex>
        </v-layout>
        <v-flex class="text-xs-center">
          <v-pagination v-model="postsPage" :length="postsPages" circle />
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        postsPage:  1,
        postsPageSize: 3,
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
</style>
