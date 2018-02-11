<template>
  <v-container fluid grid-list-xl>
    <v-layout>
      <v-flex v-for="n in columns" :key="n"
        :md6="columns === 2"
        :md4="columns === 3"
        :md3="columns === 4"
        :md2="columns === 6"
        xs12
      >
        <v-layout column>
          <v-flex>
            <template v-for="item in itemsColumn[n-1]">
              <slot :item="item"></slot>
            </template>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import _range from 'lodash/range'

  export default {
    name: 'masonry-layout',
    props: {
      columns: {
        type: Number,
        default: 2,
        validator(val) {
          return (val === 6
            || val === 4
            || val === 3
            || val === 2
          )
        },
      },
      items: {
        type: Array,
        default: () => [],
      },
    },
    computed: {
      itemsColumn() {
        const newArr = () => _range(this.columns).map(() => [])
        return this.items.reduce((cols, item, i) => {
          const n = i % this.columns
          cols[n].push(item)
          return cols
        }, newArr())
      },
    },
  }
</script>
