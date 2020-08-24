<template>
  <section class="home-page">
    <p>{{ name }}</p>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'HomePage',

  setup () {
    return { name: ref('lxx') }
  },
})
</script>

<style lang="less" scoped>
  .home-page {
    
  }
</style>
