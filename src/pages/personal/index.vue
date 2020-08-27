<template>
  <section class="personal-container">
    个人中心
    <span>{{ user.name }}</span>
    <van-button @click="$router.push({ name: 'SetStyle' })">换肤</van-button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Personal',

  setup () {
    return { user: store.getters.user }
  },
})
</script>

<style lang="less" scoped>
  .personal-container {
    
  }
</style>
