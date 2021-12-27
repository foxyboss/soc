<template>
  <div>
    <v-app-bar
      dense
      dark
    >
      <template v-slot:extension>
        <tabs>
          <v-tabs>Home</v-tabs>
        </tabs>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
import Logo from '@/layouts/sections/Logo'

export default {
  name: 'Header',

  components: {
    Logo
  },
  data () {
    return {
      isActive: false,
      menus: []
    }
  },
  mounted () {
    this.getMenu()
  },
  methods: {
    toggleClass (event) {
      this.isActive = !this.isActive
    },
    getMenu () {
      // const menus = await this.$axios.$get('menu')
      const menus = [
        {
          title: 'Home',
          url: '/'
        },
        {
          title: 'Blog',
          url: '/blog/my-first-blog-post'
        },
        {
          title: 'About',
          url: '/about'
        }
      ]
      this.menus = menus
    }
  }
}
</script>
