<template>
  <section class="add-task">
    <top-bar :title="id ? '编辑任务' : '添加任务'" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'AddTask',

  setup (p, ctx) {
    return { id: ctx.root.$route.params.id }
  },
})
</script>

<style lang="less" scoped>
  .add-task {

  }
</style>
