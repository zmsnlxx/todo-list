<template>
  <section class="setting-box">
    <van-cell-group title="个人设置">
      <van-cell title="头像" value="内容" />
      <van-cell title="性别" value="内容" />
      <van-cell title="生日" value="内容" />
      <van-cell title="所在地" value="内容" />
      <van-cell title="密码" value="内容" />
    </van-cell-group>
    <van-cell-group title="系统">
      <van-cell title="关于我们" value="内容" />
      <van-cell title="当前版本" value="v1.0.0" />
    </van-cell-group>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Setting',

  setup () {
    return {}
  },
})
</script>

<style lang="less" scoped>
  .setting-box {
    background-color: #F4F6F8;
    height: calc(100vh - 50px);
  }
</style>
