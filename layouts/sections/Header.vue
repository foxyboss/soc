<template>
  <div>
    <v-app-bar
      app
      class="app-header position-relative bg-dark header2"
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
            <v-row class="d-none d-md-block">
              <v-menu
                v-for="(menu, i) in menus"
                :key="i"
                open-on-hover
                offset-y
              >
                <!-- Main Menu -->
                <template v-slot:activator="{ attrs, on }">
                  <v-btn
                    class="white--text ma-1"
                    :to="menu.url"
                    text
                    tile
                    plain
                    v-bind="attrs"
                    v-on="on"
                  >
                    {{ menu.title }}
                  </v-btn>
                </template>

                <!-- Submenu -->
                <v-list>
                  <v-list-item
                    v-for="(item, index) in menu.items"
                    :key="index"
                    link
                    :to="item.url"
                  >
                    <v-list-item-title v-text="item.title" />
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-row>
            <ul class="navbar-nav d-md-none">
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
  data: () => ({
    isActive: false,
    menus: [
      {
        title: 'The plant',
        url: '/',
        items: [
          {
            title: 'About cannabis',
            url: '/about-cannabissociety'
          },
          {
            title: 'History of cannabis',
            url: '/history-of-cannabis'
          },
          {
            title: 'Who are the communities',
            url: '/who-are-the-communities'
          },
          {
            title: 'Glossary',
            url: '/glossary'
          }
        ]
      },
      {
        title: 'What we are doing',
        url: '/what-we-are-doing',
        items: [
          {
            title: 'Canonising the community around the world',
            url: '/communities-around-the-world'
          },
          {
            title: 'Strengthen the community',
            url: '/strengthen-the-community'
          },
          {
            title: 'Community Networks',
            url: '/community-networks'
          }
        ]
      },
      {
        title: 'Resources',
        url: '/resources',
        items: [
          {
            title: 'Global Report',
            url: '/global-report'
          },
          {
            title: 'Onlline Trust',
            url: '/online-trust'
          },
          {
            title: 'Policy Briefs',
            url: '/policy-briefs'
          },
          {
            title: 'Publications',
            url: '/publications'
          },
          {
            title: 'Media Assets',
            url: '/media-assets'
          },
          {
            title: 'Archive',
            url: '/archive'
          }
        ]
      },
      {
        title: 'News',
        url: '/news',
        items: [
          {
            title: 'Press Release',
            url: '/news/press-release'
          },
          {
            title: 'Blog',
            url: '/blog'
          }
        ]
      },
      {
        title: 'About',
        url: '/about',
        items: [
          {
            title: 'Members',
            url: '/about/members'
          },
          {
            title: 'Mission',
            url: '/about/mission'
          }
        ]
      }
    ]
  }),
  methods: {
    toggleClass (event) {
      this.isActive = !this.isActive
    }
  }
}
</script>
