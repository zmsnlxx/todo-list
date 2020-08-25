<template>
  <div id="app">
    <top-bar v-if="!$route.meta.root && !$route.meta.custom" />
    <router-view />
    <van-tabbar v-if="$route.meta.root" v-model="active">
      <van-tabbar-item icon="home-o" to="/">
        <template #icon="props">
          <icon v-if="props.active" name="#list-blue" />
          <icon v-else name="#list" />
        </template>
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/statistics">
        <template #icon="props">
          <icon v-if="props.active" name="#statistics-blue" />
          <icon v-else name="#statistics" />
        </template>
        <span>统计</span>
      </van-tabbar-item>
      <van-tabbar-item to="/personal">
        <template #icon="props">
          <icon v-if="props.active" name="#my-blue" />
          <icon v-else name="#my" />
        </template>
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { isWechat } from '@/util/wechat'
export default defineComponent({
  setup() {
    if (!isWechat()) {
      console.log('---')
      // getRegionByBrowser()
    }

    return { active: ref(0) }
  }
})
</script>
