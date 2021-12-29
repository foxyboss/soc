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

        <!-- Desktop view Navigation -->
        <div>
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
        </div>
        
        <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer
      class="d-md-none"
      v-model="drawer"
      absolute
      right
      temporary
    >
      <v-list>
        <v-list-group
          v-for="(menu, i) in menus"
          :key="i"
          active-class="deep-purple--text text--accent-4"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-title>
              {{ menu.title }}
            </v-list-item-title>
          </template>
          <!-- <v-list-item-title></v-list-item-title> -->
          <!-- <v-list-item>
          </v-list-item> -->
            
          <v-list-item
            v-for="(item, index) in menu.items"
            :key="index"
            :to="item.url"
          >
            <v-list-item-title v-text="item.title" />
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
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
    drawer: false,
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
