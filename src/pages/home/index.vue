<template>
  <section class="home-page">
    <top-bar :title="currentList && currentList.label" show-action :left-arrow="false" @click-right="$router.push({ name: 'HomeCheckList' })" />
    <van-tabs v-model="active" swipeable>
      <van-tab v-for="(item, index) in checkList" :key="index" :title="item.title" />
    </van-tabs>
    <van-notice-bar left-icon="volume-o" text="点击右上角图标可编辑清单列表" />
    <van-radio-group v-if="currentList && currentList.list && currentList.list.length" v-model="radio" @change="carryOut">
      <van-swipe-cell v-for="item in currentList.list" :key="item.id">
        <transition name="van-fade">
          <div v-if="carryOutData.includes(item.id)">
            <div class="item">
              <van-radio shape="square" :name="item.id" />
              <span :style="{ color: ['#C5C5C5', '#6B89D5', '#F1B754', '#D8423A'][item.grade] }" @click.stop="$router.push({ name: 'AddTask', params: { id: item.id, parentId: currentList.id } })">{{ item.title }}</span>
            </div>
          </div>
        </transition>
        <template #right>
          <van-button square type="danger" text="删除" @click="deleteItem(item)" />
        </template>
      </van-swipe-cell>
    </van-radio-group>
    <van-empty v-else description="点击右下角按钮快速创建清单任务" />
    <div class="add-btn" @click="$router.push({ name: 'AddTask', params: { parentId: currentList.id } })">
      <van-icon name="plus" size="20" />
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from '@vue/composition-api'
import { deleteListTask, getUserCheckList, updateListTask } from '@/pages/home/api'
import { Toast } from 'vant'

interface TodoItem {
  id: string
  title: string
  list: User.TodoListItem[]
}

export default defineComponent({
  name: 'HomePage',

  setup () {
    const active = ref<number>(0)
    const radio = ref('')
    const checkList = ref<TodoItem[]>([])
    const carryOutData = ref<string[]>([])

    onMounted(async () => {
      await getData()
    })

    async function getData () {
      const data: User.TodoItem = await getUserCheckList()
      checkList.value = Object.keys(data).map((item: string) => ({ id: item, ...data[item] }))
    }

    function deleteItem (row: User.TodoListItem) {
      const params = Object.assign({}, _.pick(row, 'id'), { parentId: checkList.value[active.value].id })
      deleteListTask(params).then(() => {
        Toast.success('删除成功')
        getData()
      })
    }

    const currentList = computed((): { list: User.TodoListItem[], title: string, id: string } => {
      if (checkList.value[active.value]) {
        const { title, list, id } = checkList.value[active.value]
        return {
          title, id,
          list: list.sort((a, b) => Number(b.grade) - Number(a.grade)).filter(item => !item.isCarryOut),
        }
      } else {
        return { list: [], title: '', id: '' }
      }
    })

    watch(() => currentList.value, val => {
      carryOutData.value = val.list.map(item => item.id)
    })

    const carryOut = (row: string) => {
      const { list, id } = currentList.value
      const current = list?.find(item => item.id === row) as User.TodoListItem
      const params = Object.assign({}, current, { parentId: id, isCarryOut: true })
      updateListTask(params).then(() => {
        const index = carryOutData.value.findIndex(item => item === row)
        if (index !== -1) {
          carryOutData.value.splice(index,1)
        }
      })
    }

    return { active, checkList, carryOut, radio, currentList, deleteItem, carryOutData }
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
      padding: 0 0 0 12px;

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
