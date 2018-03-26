<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 md3 class="mt-8">
        <home-static-side />
      </v-flex>
      <v-flex xs12 md9>
        <masonry :items="posts" :columns="dynamicColumns">
          <v-card slot-scope="{ item }" :key="item.title" class="my-4">
          <template v-if="item.type === 'medium'">
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
            </template>
            <template v-else>
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
              <v-card-text v-else>
                <div v-html="item.content">
                  <!-- <span class="ellipses"></span> -->
                </div>
              </v-card-text>
              <v-card-actions v-if="item.link">
                <v-btn flat block class="blue--text"
                  :to="`blog/${item.link}`"
                >
                  Read More
                </v-btn>
              </v-card-actions>
            </template>
          </v-card>
        </masonry>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'
  import HomeStaticSide from '@/components/HomeStaticSide'
  import Masonry from '@/components/MasonryLayout'

  export default {
    name: 'home-page',
    components: {
      HomeStaticSide,
      Masonry,
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

  .mt-8 {
    margin-top: 160px !important;
  }

  .page-height {
    min-height: 864px;
  }

  .truncate {
    /* max-height: 150px; */
    max-height: 9em;
    overflow: hidden;
    /* doesn't work
    text-overflow: ellipsis; */
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

  .fade {
    position: absolute;
    bottom: 52px;
    left: 0;
    height: 50px;
    width: 100%;
    background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1));
  }
</style>
