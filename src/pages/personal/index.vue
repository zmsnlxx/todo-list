<template>
  <section class="personal-container">
    <div class="header">
      <div class="user">
        <div class="img">
          <van-image v-if="user.headPortrait" :src="user.headPortrait" round />
          <van-image v-else round src="/img/head-portrait.jpg" />
        </div>
        <div class="info">
          <div class="name">{{ user.name }}</div>
          <div class="text" @click="$router.push({ name: 'Setting' })">
            <span>编辑个人资料</span>
            <van-icon name="arrow" />
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="card">
        <div class="title van-hairline--bottom">清单汇总</div>
      </div>
      <div class="card">
        <div class="title van-hairline--bottom">我的设置</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Personal',

  setup () {
    return { user: store.getters.user }
  },
})
</script>

<style lang="less" scoped>
  .personal-container {
    background-color: #F4F6F8;
    height: calc(100vh - 50px);
    
    .header {
      height: 30%;
      width: 100%;
      background-color: #448AFF;
      position: relative;
      padding: 0 12px;
      box-sizing: border-box;
      
      .user {
        position: absolute;
        top: 50%;
        width: calc(100% - 24px);
        transform: translateY(-50%);
        display: flex;
        
        .img {
          width: 80px;
          height: 80px;
          margin-right: 10px;
          
          .van-image {
            height: 100%;
          }
        }
        
        .info {
          color: @white;
          
          .name {
            font-size: 20px;
            line-height: 50px;
          }
          
          .text {
            font-size: 12px;
            color: @grey-1;
            line-height: 30px;
            display: flex;
            align-items: center;
            
            .van-icon {
              margin-left: 5px;
            }
          }
        }
      }
    }
    
    .content {
      position: absolute;
      top: 25%;
      width: 100%;
      
      .card {
        width: calc(100% - 30px);
        margin: 0 auto 20px auto;
        min-height: 150px;
        border-radius: 6px;
        padding: 0 12px;
        box-sizing: border-box;
        background-color: @white;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
        
        .title {
          height: 50px;
          line-height: 50px;
          font-weight: 500;
          color: #111111;
        }
      }
    }
  }
</style>
