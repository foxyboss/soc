<template>
  <v-container class="container py-0 fill-height">
    <article>
      <nuxt-content :document="article" />
    </article>
  </v-container>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  }
}
</script>
