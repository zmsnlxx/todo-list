<template>
  <section class="">
    <top-bar v-if="!$route.meta.root && !$route.meta.custom" />
    <router-view />
    <van-tabbar v-if="$route.meta.root" v-model="active">
      <van-tabbar-item v-for="item in rootNavs" :key="item.to" :to="item.to">
        <template #icon="props">
          <icon v-if="props.active" :name="`#${item.icon}-blue`" />
          <icon v-else :name="`#${item.icon}`" />
        </template>
        <span>{{ item.label }}</span>
      </van-tabbar-item>
    </van-tabbar>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

const rootNavs = [
  { label: '首页', icon: 'list', to: '/' },
  { label: '统计', icon: 'statistics', to: '/statistics' },
  { label: '我的', icon: 'my', to: '/personal' },
]
export default defineComponent({
  name: 'RootLayout',

  setup () {
    const active = ref(rootNavs.findIndex(e => e.to === router.currentRoute.path) || 0)
    
    return { active, rootNavs }
  },
})
</script>

<style lang="less" scoped>
  .root-layout {
    
  }
</style>
