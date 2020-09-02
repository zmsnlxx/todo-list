<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
export default defineComponent({
  setup() {
    onMounted(() => {
      const className = window.localStorage.getItem('className')
      document.body.className = className ? className : 'theme_default'
    })
  }
})
</script>
