<template>
  <div class="wrapper">
    <div class="top-bar">
      <van-nav-bar :title="title" :border="!noBorder" :left-text="backText" :left-arrow="leftArrow" @click-left="back">
        <template v-if="!hideTitle" #title>
          <div class="title van-ellipsis">
            <slot name="title">{{ title || $route.meta.title }}</slot>
          </div>
        </template>
        <template #right>
          <div v-if="showAction" class="right">
            <slot>
              <icon size="16" name="#summary" @click.native="$emit('click-right')" />
            </slot>
          </div>
        </template>
      </van-nav-bar>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'TopBar',

  props: {
    title: { type: String, default: '' },
    backText: { type: String, default: '' },
    showAction: { type: Boolean, default: false },
    hideTitle: { type: Boolean, default: false },
    noBorder: { type: Boolean, default: false },
    leftArrow: { type: Boolean, default: true },
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
  .wrapper {
    height: 50px;
  }
  .top-bar {
    position: fixed;
    width: 100%;
    z-index: 2;

    /deep/ .van-nav-bar {
      height: 50px;
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

          .icon {
            width: 20px;
            height: 20px;
            color: var(--color);
          }
        }
      }
    }
  }
</style>
