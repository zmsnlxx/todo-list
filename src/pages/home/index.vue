<template>
  <section class="home-page">
    <top-bar :title="currentList && currentList.label" show-action :left-arrow="false" @click-right="$router.push({ name: 'HomeCheckList' })" />
    <van-tabs v-model="active" swipeable>
      <van-tab v-for="(item, index) in checkList" :key="index" :title="item.label" />
    </van-tabs>
    <van-notice-bar left-icon="volume-o" text="点击右上角图标可编辑清单列表" />
    <van-radio-group v-if="currentList && currentList.list.length" v-model="radio" @change="changeTheme">
      <div v-for="item in currentList.list" :key="item.id" class="item">
        <van-radio shape="square" :name="item.id" />
        <span @click.stop="$router.push({ name: 'AddTask', params: { id: item.id, parentId: currentList.id } })">{{ item.label }}</span>
      </div>
    </van-radio-group>
    <van-empty v-else description="点击右下角按钮快速创建任务" />
    <div class="add-btn" @click="$router.push({ name: 'AddTask', params: { parentId: currentList.id } })">
      <van-icon name="plus" size="20" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from '@vue/composition-api'
import { getUserCheckList } from '@/pages/home/api'

export default defineComponent({
  name: 'HomePage',

  setup () {
    const active = ref<number>(0)
    const radio = ref('')
    const checkList = ref<User.TodoItem[]>([])

    onMounted(async () => { checkList.value = await getUserCheckList() })

    const currentList = computed(() => checkList.value[active.value] || null)
    console.log(currentList)

    const changeTheme = (id: string) => {
      console.log(id)
      console.log(radio.value)
    }

    return { active, checkList, changeTheme, radio, currentList }
  },
})
</script>

<style lang="less" scoped>
  .home-page {
    /deep/ .van-tabs {
      .van-tabs__wrap {
        height: 50px;
        line-height: 50px;

        .van-tab {
          width: 120px;
        }

        .van-tabs__line {
          background-color: var(--backgroundColor);
        }
      }
    }

    /deep/ .van-notice-bar {
      height: 50px;
      padding: 0 12px;

      .van-icon {
        margin-right: 5px;
      }
    }

    .van-radio-group {
      padding: 0 12px;

      .item {
        display: flex;
        height: 50px;
        line-height: 50px;
        color: #666666;
        font-size: 14px;

        .van-radio {
          margin-right: 10px;

          /deep/ .van-radio__icon--checked .van-icon {
            background-color: var(--backgroundColor);
            border-color: var(--border-color);
          }
        }
      }
    }

    .van-empty {
      padding: 40px 0;
    }

    .add-btn {
      position: fixed;
      bottom: 80px;
      right: 20px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid var(--border-color);
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .2);

      .van-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--border-color);
      }
    }
  }
</style>
