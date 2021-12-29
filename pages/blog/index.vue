<template>
  <v-container class="container py-0 fill-height">
    <h1>Latest Posts</h1>
    <article>
      <nuxt-content :document="article" />
    </article>
  </v-container>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles').fetch()

    return { article }
  }
}
</script>
