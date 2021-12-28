<template>
  <div class="logo">
    <NLink to="/">
      <v-img
        class="mr-5"
        width="60px"
        :src="require('@/assets/images/logos/soc-logo.png')"
        alt="CannaSociety Logo"
      />
    </NLink>
  </div>
</template>

<script>
export default {
  name: 'Logo',

  data () {
    return {}
  }
}
</script>
