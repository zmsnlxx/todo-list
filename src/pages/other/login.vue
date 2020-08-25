<template>
  <section class="login-box">
    <div class="header">
      <div class="title">欢迎{{ isLogin ? '登录' : '注册' }}</div>
      <div class="info">
        <div v-if="isLogin" @click="isLogin = false">
          <span>还没账号，立即</span>
          <span class="color">注册</span>
        </div>
        <div v-else @click="isLogin = true">
          <van-icon name="arrow-left" />
          <span>返回登录</span>
        </div>
      </div>
    </div>
    <van-form class="content" @submit="onSubmit">
      <van-field v-model="form.name" :border="false" label-width="60" maxlength="6" name="用户名" label="用户名" placeholder="请输入用户名" />
      <van-field v-model="form.password" :border="false" label-width="60" type="password" name="密码" label="密码" placeholder="请输入密码" />
      <van-field v-if="!isLogin" v-model="form.psw" :border="false" label-width="60" type="password" name="验证密码" label="验证密码" placeholder="请再次输入密码" />
      <van-button round color="#FE9C01" block type="info" native-type="submit">{{ isLogin ? '登录' : '注册' }}</van-button>
    </van-form>
    <div class="footer">
      <div>第三方登录</div>
      <div class="icon-box">
        <icon name="#wechat" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from '@vue/composition-api'

const loginForm = () => ({ name: '', password: '' })
const registerForm = () => ({ name: '', password: '', psw: '' })
export default defineComponent({
  name: 'Login',

  setup () {
    const isLogin = ref<boolean>(true)
    const form = computed(() => isLogin.value ? loginForm() : registerForm())
    console.log(form.value)
    const onSubmit = () => {
    
    }

    return { form, onSubmit, isLogin }
  },
})
</script>

<style lang="less" scoped>
  .login-box {
    height: 100vh;
    position: relative;
    padding: 0 20px;
    box-sizing: border-box;
    
    .header {
      padding: 90px 0;
      
      .title {
        font-size: 26px;
        font-weight: 600;
      }
      
      .info {
        margin-top: 10px;
        font-size: 14px;
        color: @grey-6;
        display: flex;
        align-items: center;
        
        .van-icon {
          width: 16px;
          height: 16px;
          margin-right: 10px;
        }
        
        .color {
          color: #FE9C01
        }
      }
    }
    
    .content {
      .van-cell {
        padding: 16px 0;
      }
      
      .van-button {
        margin-top: 20px;
      }
    }
    
    .footer {
      width: calc(100% - 40px);
      position: fixed;
      bottom: 10px;
      height: 40px;
      line-height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: @grey-6;
      
      .icon-box {
        height: 30px;
        border-radius: 50%;
        border: 1px solid @grey-6;
        
        .icon {
          width: 30px;
          height: 30px;
          line-height: 30px;
          display: inherit;
        }
      }
      
      
    }
  }
</style>
