<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer class="secondary" app>
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="white--text ml-3">
            Theme made with
            <v-icon class="red--text">favorite</v-icon>
            by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>,
            <a class="white--text" href="https://github.com/vwxyzjn" target="_blank">Costa Huang</a>,
            and Mauro too ;-)
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>
