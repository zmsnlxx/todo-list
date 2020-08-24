<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="id" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
  name: 'IconFont',

  props: {
    name: { type: String, default: '' },
  },

  setup (props) {
    return {
      id: computed(() => '#icon' + props.name.slice(1))
    }
  },
})
</script>

<style lang="less" scoped>
  .icon {
    width: 1em; height: 1em;
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
  }
</style>
