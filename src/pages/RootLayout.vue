<template>
  <section class="app-container">
    <router-view />
  
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'RootLayout',

  setup () {
    return { active: ref(0) }
  },
})
</script>

<style lang="less" scoped>
  .app-container {
    
  }
</style>
