<template>
  <v-app dark>
    <Header />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/layouts/sections/Header'

export default {
  components: {
    Header
  },
  mounted () {
    // this.getMenu()
  },
  methods: {
    async getMenu () {
      console.log('getMenu')
      // const menus = await this.$axios.$get('menu')
      // this.menus = menus
    }
  }
}
</script>
