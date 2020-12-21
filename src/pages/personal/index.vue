<template>
  <section class="personal-container">
    <div class="header">
      <div class="user">
        <div class="img">
          <van-image v-if="user.img" :src="user.img" round />
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
      <div v-for="(item, index) in group" :key="index" class="card">
        <div class="title van-hairline--bottom">{{ item.title }}</div>
        <div class="container">
          <div v-for="i in item.children" :key="i.name" class="item" @click="$router.push({ name: i.name })">
            <icon :name="`#${i.icon}`" />
            <span class="label_name">{{ i.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

const group = [
  {
    title: '我的清单',
    children: [
      { label: 'CarryOut', name: 'CarryOut', icon: 'carryOut' },
      { label: 'Delete', name: 'Delete', icon: 'delete' },
      { label: 'Expired', name: 'Expired', icon: 'expired' },
    ]
  },
  {
    title: '个人设置',
    children: [
      { label: 'Theme', name: 'Theme', icon: 'theme' },
    ]
  }
]
export default defineComponent({
  name: 'Personal',

  setup () {
    return { user: store.getters.user, group }
  },
})
</script>

<style lang="less" scoped>
  .personal-container {

    .header {
      height: 200px;
      width: 100%;
      position: relative;
      padding: 0 12px;
      box-sizing: border-box;
      background: var(--backgroundColor);
      color: var(--color);
      
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

      .card:last-child {
        margin-bottom: 70px;
      }

      .card {
        z-index: 100;
        width: calc(100% - 30px);
        margin: 0 auto 20px auto;
        border-radius: 6px;
        padding: 0 12px;
        box-sizing: border-box;
        background-color: @white;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);

        .title {
          height: 50px;
          width: 100%;
          line-height: 50px;
          font-weight: 500;
          color: #111111;
        }

        .container {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          min-height: 80px;

          .item {
            width: 33%;
            height: 70px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            font-size: 14px;

            .icon {
              width: 20px;
              height: 20px;
              margin: 0 auto 10px;
              color: var(--backgroundColor);
            }

            .label_name {
              font-weight: 500;
            }
          }
        }
      }
    }
  }
</style>
