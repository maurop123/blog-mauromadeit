<template>
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
        <span>Tweet! Tweet!</span>
      </v-tooltip>
      <v-tooltip bottom>
        <v-btn slot="activator"
          flat icon color="grey"
          href="https://medium.com/@mauromadeit"
        >
          <v-icon>fa-medium</v-icon>
        </v-btn>
        <span>Medium posts</span>
      </v-tooltip>
      <v-tooltip bottom>
        <v-btn slot="activator"
          flat icon color="grey"
          href="https://stackoverflow.com/users/story/1387472"
        >
          <v-icon>fa-stack-overflow</v-icon>
        </v-btn>
        <span>Developer story</span>
      </v-tooltip>
      <v-tooltip bottom>
        <v-btn slot="activator"
          flat icon color="grey"
          href="https://github.com/maurop123/"
        >
          <v-icon>fa-github</v-icon>
        </v-btn>
        <span>Lots of code</span>
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
</template>
