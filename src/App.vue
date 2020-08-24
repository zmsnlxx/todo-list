<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { isWechat } from '@/util/wechat'
export default defineComponent({
  setup() {
    if (!isWechat()) {
      console.log('---')
      // getRegionByBrowser()
    }
  }
})
</script>
