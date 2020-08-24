<template>
  <section class="home-layout">
    <router-view />
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'HomeLayout',

  setup () {
    return {}
  },
})
</script>

<style lang="less" scoped>
  .home-layout {
    
  }
</style>
