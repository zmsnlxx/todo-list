<template>
  <section class="add-task">
    <top-bar :title="id ? '编辑任务' : '添加任务'" />
    <div class="header van-hairline--bottom">
      <div />
      <div class="date" @click="show.date = true">{{ form.endTime ? formatDate(form.endTime) : '日期' }}</div>
      <van-icon name="setting-o" color="#C8C9CC" size="24" @click="show.grade = true" />
    </div>
    <div class="content">
      <van-field v-model="form.title" placeholder="请输入任务标题" :border="false" />
      <van-field v-model="form.content" type="textarea" placeholder="请输入任务内容" rows="10" show-word-limit />
    </div>

    <van-popup v-model="show.grade" position="bottom" round :overlay-style="{ 'backgroundColor': 'rgba(0, 0, 0, 0.2)' }">
      <div class="popup-content">
        <div class="title">请选择任务优先级</div>
        <van-radio-group v-model="radio" @change="changeGrade">
          <div v-for="item in grade" :key="item.grade" class="item">
            <span :style="{ color: item.color }">{{ item.label }}</span>
            <van-radio shape="square" :name="item.grade" />
          </div>
        </van-radio-group>
      </div>
    </van-popup>
    <van-calendar v-model="show.date" :default-date="form.endTime ? new Date(form.endTime) : null" @confirm="onConfirm" />

    <div class="footer van-hairline--top">
      <van-button @click="publish">{{ id ? '编辑' : '新增' }}</van-button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from '@vue/composition-api'
import { getListTask, updateListTask } from './api'
import { formatDate } from '@/utils'
import { Toast } from 'vant'

const grade = [
  { label: '高优先级', color: '#D8423A', grade: '3' },
  { label: '中优先级', color: '#F1B754', grade: '2' },
  { label: '低优先级', color: '#6B89D5', grade: '1' },
  { label: '无优先级', color: '#C5C5C5', grade: '0' },
]
export default defineComponent({
  name: 'AddTask',

  setup (p, ctx) {
    const { id, parentId } = ctx.root.$route.params
    const form = reactive<User.TodoListItem>({ endTime: Number(new Date()), id: '', isCarryOut: false, grade: '0', title: '', content: '' })
    const show = reactive({ grade: false, date: false })
    const radio = ref('0')

    onMounted(async () => {
      if (id) {
        const data = await getListTask({ id, parentId })
        radio.value = data.grade
        Object.assign(form, data)
      }
    })

    const changeGrade = (e: string) => {
      form.grade = e
      show.grade = false
    }

    const onConfirm = (date: Date) => {
      show.date = false
      form.endTime = Number(date)
    }

    const publish = () => {
      const params = Object.assign({}, form, { parentId })
      if (!form.title) return Toast.fail('请填写任务标题！')
      updateListTask(params).then(() => {
        Toast.success(`${ id ? '编辑' : '新增' }成功`)
        router.back()
      })
    }

    return { id, form, show, radio, grade, changeGrade, onConfirm, formatDate, publish }
  },
})
</script>

<style lang="less" scoped>
  .add-task {
    .header {
      padding: 0 12px;
      box-sizing: border-box;
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .date {
        font-size: 14px;
        color: #C8C9CC;
      }

      .van-checkbox {
        /deep/ .van-checkbox__icon--checked .van-icon {
          background-color: var(--backgroundColor);
          border-color: var(--border-color);
        }
      }

    }

    .popup-content {
      height: 30%;
      padding: 12px;

      .title {
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 18px;
        color: #111111;
      }

      .item {
        display: flex;
        justify-content: space-between;
        line-height: 40px;
        font-size: 16px;

        .van-radio {
          /deep/ .van-radio__icon--checked .van-icon {
            background-color: var(--backgroundColor);
            border-color: var(--border-color);
          }
        }
      }
    }

    /deep/ .van-calendar {
      .van-calendar__selected-day {
        background: var(--backgroundColor);
      }

      .van-button--danger {
        background: var(--backgroundColor);
        border-color: var(--border-color);
      }
    }

    .content {
      /deep/ .van-field__value {
        line-height: 50px;
      }

      .van-cell {
        padding: 0 12px;
      }

    }

    .footer {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 60px;
      z-index: 100;
      background: #FFFFFF;

      .van-button {
        background-color: var(--backgroundColor);
        color: var(--color);
        width: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 6px;
        transform: translate(-50%, -50%);
      }
    }
  }
</style>
