<template>
  <section class="home-page">
    <top-bar title="个人清单" :left-arrow="false" />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'HomePage',

  setup () {
    return {}
  },
})
</script>

<style lang="less" scoped>
  .home-page {
    
  }
</style>
