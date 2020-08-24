<template>
  <section class="layout">
    <router-view />
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'PersonalLayout',

  setup () {
    return {}
  },
})
</script>

<style lang="less" scoped>
  .layout {
    
  }
</style>
