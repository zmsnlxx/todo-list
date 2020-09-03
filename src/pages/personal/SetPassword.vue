<template>
  <section class="set-password">
    <van-form @submit="onSubmit">
      <van-field v-model="form.old" type="password" label="旧密码" placeholder="请输入旧密码" />
      <van-field v-model="form.newValue" type="password" label="新密码" placeholder="请输入新密码" />
      <van-field v-model="form.repeat" type="password" label="确认密码" placeholder="请再次输入新密码" />
      <div style="margin: 16px;">
        <van-button round block type="info" :disabled="disabled" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from '@vue/composition-api'
import { Toast } from 'vant'
import { updatePersonalInfo } from '@/pages/personal/api'
import { removeToken } from '@/utils/token'

interface FormType {[key: string]: string}

export default defineComponent({
  name: 'SetPassword',

  setup () {
    const form = reactive<FormType>({ old: '', newValue: '', repeat: '' })
    const disabled = ref(true)
    const onSubmit = async () => {
      if (form.newValue !== form.repeat) return Toast.fail('两次密码不一致，请重新输入!')
      updatePersonalInfo({ password: form.old, newValue: form.newValue }).then(() => {
        Toast.success('修改密码成功, 请重新登录！')
        setTimeout(() => {
          removeToken()
          router.push({ name: 'Login' })
        }, 1000)
      })
    }
    
    watch(() => form, val => {
      const keys = Object.keys(val)
      let num = 0
      keys.forEach(key => { if (form[key]) num++ })
      disabled.value = num !== 3
    }, { deep: true })
    
    return { form, onSubmit, disabled }
  },
})
</script>

<style lang="less" scoped>
  .set-password {
    
  }
</style>
