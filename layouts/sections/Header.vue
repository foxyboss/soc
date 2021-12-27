<template>
  <div>
    <v-app-bar
      app
      class="app-header position-relative bg-dark header2"
      flat
    >
      <v-container class="py-0 fill-height">
          <!-- Logo -->
          <Logo />

          <v-spacer />

          <!-- Menu for small devices -->
          <client-only>
            <v-btn
              class="d-block d-md-none"
              color="white"
              text
              @click="toggleClass()"
            >
              <v-app-bar-nav-icon class="white--text" />
            </v-btn>
          </client-only>

          <!-- Desktop view Navigation -->
          <div
            class="navigation"
            :class="[isActive ? 'd-block' : '']"
            @click="isActive = !isActive"
          >
            <ul class="navbar-nav">
              <li
                v-for="(menu, i) in menus"
                :key="i"
                class="nav-item"
                text
              >
                <NuxtLink
                  class="nav-link"
                  :to="menu.url"
                >
                  {{ menu.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
      </v-container>
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
          title: 'About',
          url: '/about'
        }
      ]
      this.menus = menus
    }
  }
}
</script>
