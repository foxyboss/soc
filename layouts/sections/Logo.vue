<template>
  <div class="logo" width="1020px">
    <NLink to="/">
      <ul class="navbar-nav">
        <li>
          <img
            class="mr-5"
            width="60px"
            :src="require('@/assets/images/logos/soc-logo.png')"
            alt="CannaSociety Logo"
          >
        </li>
      </ul>
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
