<template>
  <section class="not-found">
    <div class="wrapper">
      <div class="content">
        <div class="title">404</div>
        <div class="text">很抱歉，您访问的页面去漂流了……</div>
        <div class="links">
          <div class="back-level" @click="$router.back()">返回上一级</div>
          <div class="back-home" @click="$router.push('/')">返回首页</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>

<style lang="less" scoped>
  .not-found {
    display: flex;
    height: 100vh;
    background: url('/img/404.png') no-repeat center;
    background-size: cover;
    
    .wrapper {
      width: 100%;
      height: calc(50vh + 30px);
      margin-left: 40px;
      display: flex;
      align-items: flex-end;
      
      .title {
        font-size: 60px;
        color: #109179;
        font-weight: bold;
        font-family: 'Source Han Sans', sans-serif;
        margin-bottom: 20px;
        letter-spacing: 10px;
      }
      
      .text {
        font-size: 16px;
        color: #333333;
        margin-bottom: 60px;
      }
      
      .links {
        display: flex;
        text-align: center;
        
        div {
          width: 105px;
          height: 30px;
          line-height: 30px;
          border: 2px solid #109179;
          border-radius: 30px;
          font-size: 16px;
          color: #109179;
        }
        
        .back-home {
          color: white;
          background: #109179;
          margin-left: 20px;
        }
      }
    }
  }
</style>
