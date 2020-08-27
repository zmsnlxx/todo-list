<template>
  <div id="app">
    <router-view />
    
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { isWechat } from '@/utils/wechat'
export default defineComponent({
  setup() {
    if (!isWechat()) {
      console.log('---')
      // getRegionByBrowser()
    }
  }
})
</script>
