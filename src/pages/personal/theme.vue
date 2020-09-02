<template>
  <section class="theme">
    <van-radio-group v-model="radio" @change="changeTheme">
      <div v-for="(item, index) in theme" :key="index" class="item" :style="{ 'background': item.background }">
        <van-radio :name="index" />
      </div>
    </van-radio-group>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'Theme',

  setup () {
    const radio = ref(0)
    const theme = [
      { background: '#1296db', className: 'theme_default' },
      { background: '#d4237a', className: 'theme_default_roseRed' },
      { background: '#f39c12', className: 'theme_default_yellow' },
      { background: '#2ecc71', className: 'theme_default_green' },
    ]

    onMounted(() => {
      const className = window.localStorage.getItem('className')
      if (className) {
        radio.value = theme.findIndex(item => item.className === className)
      }
    })

    const changeTheme = (e: number) => {
      const currentClassName = _.chain(theme).find((item, index) => index === e).get('className').value()
      document.body.className = currentClassName
      window.localStorage.setItem('className', currentClassName)
    }

    return { theme, radio, changeTheme }
  },
})
</script>

<style lang="less" scoped>
  .theme {
    padding: 12px;
    box-sizing: border-box;

    .item {
      width: 100%;
      height: 70px;
      margin-bottom: 10px;
      border-radius: 6px;
      position: relative;
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .2);

      .van-radio {
        margin-left: 10px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        /deep/ .van-radio__icon .van-icon {
          border-color: @grey-1;
        }
      }
    }
  }
</style>
