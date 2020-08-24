<template>
  <section class="layout">
    <router-view />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'StatisticsLayout',

  setup () {

    const name = "lxh";

    return { name: ref('lxh') }
  },
})
</script>

<style lang="less" scoped>
  .layout {
    
  }
</style>
