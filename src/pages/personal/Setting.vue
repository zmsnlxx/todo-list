<template>
  <section class="setting-box">
    <van-cell-group title="个人设置">
      <van-field label="昵称" center :value="user.name" readonly disabled />
      <van-field label="头像" is-link readonly clickable center @click="upload">
        <van-image v-if="user.img" slot="input" :src="user.img" round width="40px" height="40px" />
        <van-image v-else slot="input" src="/img/head-portrait.jpg" round width="40px" height="40px" />
      </van-field>
      <input ref="input" type="file" name="file" style="display: none" @change="handleFile">
      <van-field label="性别" center :value="user.gender" is-link readonly clickable @click="show.gender = true" />
      <van-field label="生日" center :value="user.birthday" is-link readonly clickable @click="show.birth = true" />
      <van-field label="所在地" center :value="user.regionName" is-link readonly clickable @click="show.area = true" />
      <van-cell title="密码" center is-link readonly clickable @click="$router.push({ name: 'SetPassword' })" />
    </van-cell-group>
    <van-cell-group title="系统">
      <van-cell title="关于我们" center value="假装这里有东西" />
      <van-cell title="当前版本" center value="v1.0.0" />
    </van-cell-group>
    <van-button block @click="logout" class="logout-btn">退出登录</van-button>
  
    <van-action-sheet v-model="show.gender" :actions="[{ name: '男' }, { name: '女' }]" cancel-text="取消" @select="setGender" />
  
    <van-action-sheet v-model="show.birth">
      <van-datetime-picker v-model="birth.value" type="date" title="请选择出生日期" :max-date="birth.max" :min-date="birth.min" @cancel="show.birth = false" @confirm="setBirth" />
    </van-action-sheet>
  
    <van-popup v-model="show.area" position="bottom">
      <van-area v-model="user.region" :area-list="areaList" title="所在地" @confirm="setArea" @cancel="show.area = false" />
    </van-popup>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from '@vue/composition-api'
import { Toast } from 'vant'
import { updatePersonalInfo } from './api'
import areaList from '../../../public/json/area-list.json'
import { removeToken } from '@/utils/token'

export default defineComponent({
  name: 'Setting',

  setup () {
    const user = computed<User.Info>(() => store.getters.user || {})
    const show = reactive({ gender: false, birth: false, area: false })
    
    const birth = { value: new Date(user.value.birthday || '2000/1/1'), min: new Date('1949/1/1'), max: new Date() }
    const input = ref<HTMLElement | null>(null)

    const logout = () => {
      removeToken()
      store.dispatch('setUser', null)
      router.push('/login')
    }

    const setGender = async ({ name }: { name: string }) => {
      await updatePersonalInfo({ gender: name })
      await store.dispatch('mergeUser', { gender: name })
      Toast('修改性别成功')
      show.gender = false
    }

    const setBirth = async (val: Date) => {
      const birthday = val.toLocaleDateString().replace(/\//g, '-')
      await updatePersonalInfo({ birthday })
      await store.dispatch('mergeUser', { birthday })
      Toast('修改生日成功')
      show.birth = false
    }
    
    const setArea = async (areas: Array<{ name: string, code: string }>) => {
      const region = { region: areas[areas.length - 1].code, regionName: _.chain(areas).map(item => item.name).join('/').value() }
      await updatePersonalInfo(region)
      await store.dispatch('mergeUser', region)
      Toast('修改所在地成功')
      show.area = false
    }
    
    const upload = () => { input.value?.click() }
    
    const handleFile = (e: AnyObject) => {
      const file = e.target.files[0];
      const type = file.type.split("/")[0];
      if (type !== "image") return Toast.fail('请选择图片')
      if (Math.round(file.size / 1024 / 1024) > 3) return Toast.fail('图片大小不得超过3M')
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async function(e: AnyObject) {
        await updatePersonalInfo({ img: e.currentTarget.result })
        await store.dispatch('mergeUser', { img: e.currentTarget.result })
        Toast.success('修改头像成功')
      };
    }
    
    return { user, show, setGender, birth, setBirth, setArea, areaList, upload, handleFile, input, logout }
  },
})
</script>

<style lang="less" scoped>
  .setting-box {
    background-color: #F4F6F8;
    height: calc(100vh - 50px);
    
    /deep/ .van-cell-group__title {
      padding: 0 16px;
      line-height: 40px;
    }
    /deep/ .van-cell__value,.van-field__value, .van-cell__title {
      min-height: 40px;
      line-height: 40px;
    }

    .logout-btn {
      position: fixed;
      bottom: 0;
      color: red;
    }
  }
</style>
