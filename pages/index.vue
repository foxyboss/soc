<template>
  <v-container class="container py-0 fill-height">
    <article>
      <nuxt-content :document="article" />
    </article>
  </v-container>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const article = await $content('index').fetch()

    return { article }
  }
}
</script>
