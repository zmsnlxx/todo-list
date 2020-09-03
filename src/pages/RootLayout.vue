<template>
  <div class="app-container">
    <section class="root-layout" :class="{ 'is-root': $route.meta.root }">
      <top-bar v-if="!$route.meta.root && !$route.meta.custom" />
      <router-view />
    </section>

    <van-tabbar v-if="$route.meta.root" v-model="active">
      <van-tabbar-item v-for="(item, index) in rootNavs" :key="item.to" :to="item.to">
        <template #icon="props">
          <icon :name="`#${item.icon}`" :class="props.active ? 'icon_active' : ''" />
        </template>
        <span :class="active === index ? 'icon_active' : ''">{{ item.label }}</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from '@vue/composition-api'
import router from '@/router'

const rootNavs = [
  { label: '首页', icon: 'list', to: '/' },
  { label: '统计', icon: 'statistics', to: '/statistics' },
  { label: '我的', icon: 'my', to: '/personal' },
]
export default defineComponent({
  name: 'RootLayout',

  setup (p, ctx) {
    const active = ref(rootNavs.findIndex(e => e.to === router.currentRoute.path) || 0)

    watch(() => ctx.root.$route, val => {
      active.value = rootNavs.findIndex(e => e.to === val.path) || 0
    })
    
    return { active, rootNavs }
  },
})
</script>

<style lang="less" scoped>
  .root-layout {
    min-height: 100vh;
    box-sizing: border-box;
    
    &.is-root {
      padding-bottom: 50px;
    }
  }
  .icon_active {
    color: var(--backgroundColor);
  }
</style>
