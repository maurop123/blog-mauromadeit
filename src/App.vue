<template>
  <v-app>
    <!-- <v&#45;navigation&#45;drawer -->
    <!--   persistent -->
    <!--   :mini&#45;variant="miniVariant" -->
    <!--   :clipped="clipped" -->
    <!--   v&#45;model="drawer" -->
    <!--   enable&#45;resize&#45;watcher -->
    <!--   fixed -->
    <!--   app -->
    <!-- > -->
    <!--   <v&#45;list> -->
    <!--     <v&#45;list&#45;tile -->
    <!--       value="true" -->
    <!--       v&#45;for="(item, i) in items" -->
    <!--       :key="i" -->
    <!--     > -->
    <!--       <v&#45;list&#45;tile&#45;action> -->
    <!--         <v&#45;icon v&#45;html="item.icon"></v&#45;icon> -->
    <!--       </v&#45;list&#45;tile&#45;action> -->
    <!--       <v&#45;list&#45;tile&#45;content> -->
    <!--         <v&#45;list&#45;tile&#45;title v&#45;text="item.title"></v&#45;list&#45;tile&#45;title> -->
    <!--       </v&#45;list&#45;tile&#45;content> -->
    <!--     </v&#45;list&#45;tile> -->
    <!--   </v&#45;list> -->
    <!-- </v&#45;navigation&#45;drawer> -->
    <!-- <v&#45;toolbar -->
    <!--   app -->
    <!--   :clipped&#45;left="clipped" -->
    <!-- > -->
    <!--   <v&#45;toolbar&#45;side&#45;icon @click.stop="drawer = !drawer"></v&#45;toolbar&#45;side&#45;icon> -->
    <!--   <v&#45;btn icon @click.stop="miniVariant = !miniVariant"> -->
    <!--     <v&#45;icon v&#45;html="miniVariant ? 'chevron_right' : 'chevron_left'"></v&#45;icon> -->
    <!--   </v&#45;btn> -->
    <!--   <v&#45;btn icon @click.stop="clipped = !clipped"> -->
    <!--     <v&#45;icon>web</v&#45;icon> -->
    <!--   </v&#45;btn> -->
    <!--   <v&#45;btn icon @click.stop="fixed = !fixed"> -->
    <!--     <v&#45;icon>remove</v&#45;icon> -->
    <!--   </v&#45;btn> -->
    <!--   <v&#45;toolbar&#45;title v&#45;text="title"></v&#45;toolbar&#45;title> -->
    <!--   <v&#45;spacer></v&#45;spacer> -->
    <!--   <v&#45;btn icon @click.stop="rightDrawer = !rightDrawer"> -->
    <!--     <v&#45;icon>menu</v&#45;icon> -->
    <!--   </v&#45;btn> -->
    <!-- </v&#45;toolbar> -->
    <v-content>
      <router-view/>
    </v-content>
    <!-- <v&#45;navigation&#45;drawer -->
    <!--   temporary -->
    <!--   :right="right" -->
    <!--   v&#45;model="rightDrawer" -->
    <!--   fixed -->
    <!--   app -->
    <!-- > -->
    <!--   <v&#45;list> -->
    <!--     <v&#45;list&#45;tile @click="right = !right"> -->
    <!--       <v&#45;list&#45;tile&#45;action> -->
    <!--         <v&#45;icon>compare_arrows</v&#45;icon> -->
    <!--       </v&#45;list&#45;tile&#45;action> -->
    <!--       <v&#45;list&#45;tile&#45;title>Switch drawer (click me)</v&#45;list&#45;tile&#45;title> -->
    <!--     </v&#45;list&#45;tile> -->
    <!--   </v&#45;list> -->
    <!-- </v&#45;navigation&#45;drawer> -->
    <v-footer class="secondary" app>
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="white--text ml-3">
            Theme made with
            <v-icon class="red--text">favorite</v-icon>
            by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
            and <a class="white--text" href="https://github.com/vwxyzjn" target="_blank">Costa Huang</a>
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  name: 'App'
}
</script>
