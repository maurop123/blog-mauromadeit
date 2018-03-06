## The Problem

The choices that a developer has to make on a project are constantly growing. This is especially daunting for newcomers to a 

### Devs are Users too!

[insert quote from kevlin henley]

### A Problem for 3rd Party Devs Too

While the new breed of Vue developers is certainly the end user group in mind for the core team, another indispensible group are the 3rd party developers. They both serve the same end user, but the core team has also kept the experience 3rd party devs very much in mind with

## The Promise

Every 3rd party will be responsible only for their changes to a project and how those changes may affect other plugins.

In the past, a single 3rd part library had to maintain multiple forks of vuejs-templates. Vuetify had 9.

In the future, you will only need to know how your plugin fits into the ecosystem, intead of having to learn all the other platforms in order to support their forks. Unless their fork is a fork of an original vuejs-template template (which they usually are) because github won't let you make a fork of a fork :-(

This will lead to a much DRYer ecosystem.

The rampup to be a plugin developer will be less than a template developer.

Based on Egoist's Poi
"Poi could handle all the development setups for you, no more configuration hell."

[Kick off Plans](https://github.com/vuejs/vue-cli/issues/589)
