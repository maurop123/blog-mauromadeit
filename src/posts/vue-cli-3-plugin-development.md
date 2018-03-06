# Vue-cli 3.0 Plugin Development

The new vue-cli is a total overhaul of 2.x, and for good reasons. The main difference is that now you vue-cli downloads a core vue template which you can extend with plugins. Realize in the middle of a project that you want to try PWA on your app? No problem! Just install `@vue/cli-plugin-pwa` and apply it with `vue invoke pwa`. Not only is this nice for developing apps with Vue, but it's great for devs maintaining their own forks of the vuejs-templates.

In this post I'll go through how I made [vue-cli-plugin-vuetify]() and how the new vue-cli makes life a lot more wonderful for everyone.

## New Features

- presets
