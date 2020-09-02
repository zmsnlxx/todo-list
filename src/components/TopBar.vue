<template>
  <div class="top-bar">
    <van-nav-bar v-if="type === 'fill'" :title="title" :border="!noBorder" :left-text="backText" left-arrow @click-left="back">
      <template v-if="!hideTitle" #title>
        <div class="title van-ellipsis">
          <slot name="title">{{ title || $route.meta.title }}</slot>
        </div>
      </template>
    </van-nav-bar>
    <div v-else-if="type === 'icon'" class="header-icon">
      <van-icon name="arrow-left" class="left" size="16" @click="back" />
      <van-icon v-if="showAction" name="ellipsis" class="right" size="16" @click="$emit('click-right')" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'TopBar',
  
  props: {
    title: { type: String, default: '' },
    type: { type: String, default: 'fill' },
    backText: { type: String, default: '' },
    showAction: { type: Boolean, default: false },
    hideTitle: { type: Boolean, default: false },
    noBorder: { type: Boolean, default: false },
  },
  
  setup (props, ctx) {
    const name = ref('lxx')
    function back () {
      if (typeof ctx.listeners.back === 'function') {
        ctx.emit('back')
      } else {
        if (history.length > 1 && !!history.state) {
          router.back()
        } else {
          router.push('/')
        }
      }
    }
    return { name, back }
  },
})
</script>

<style lang="less" scoped>
.top-bar {
  
  /deep/ .van-nav-bar {
    background-size: 100% 100%;
    background: var(--backgroundColor);

    .van-icon, .van-nav-bar__title {
      color: var(--color);
    }
    
    &__left, &__right {
      padding: 0 12px;
      
      .right {
        display: flex;
        align-items: center;
      }
    }
  }
  
  .header-icon {
    position: relative;
    padding-top: 12px;
    
    .left, .right {
      background: rgba(0, 0, 0, .25);
      color: white;
      border-radius: 50%;
      padding: 5px;
    }
    
    .right {
      position: absolute;
      right: 12px;
    }
    
    .left {
      position: absolute;
      left: 12px;
    }
    
    .icon {
      position: absolute;
      left: 12px;
      font-size: 20px;
      line-height: 30px;
      width: 30px;
      height: 30px;
      background-color: rgba(0, 0, 0, .25);
      border-radius: 50%;
      text-align: center;
      color: white;
    }
  }
}
</style>
