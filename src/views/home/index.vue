<script lang="ts" setup>
  import { defineComponent } from 'vue';

  defineComponent({
    name: 'HomePage',
  });
</script>

<template>
  <van-sticky>
    <h1 class="title"> 硕亦科技 移动端 </h1>
  </van-sticky>
  <van-cell title="主界面（通用）" is-link to="/mainPage" />
  <van-cell title="主界面（art）" is-link to="/artPage" />
  <van-cell title="列表" is-link to="/list" />
  <van-cell title="tab 切换" is-link to="/tab" />
  <van-cell title="图表" is-link to="/echarts" />
  <van-cell title="二维码" is-link to="/qrcode" />
  <van-cell title="投票" is-link to="/vote" />
  <van-cell title="图片展示" is-link to="/images" />
  <van-cell title="多选" is-link to="/select" />
  <van-cell title="手机号注册及登录" is-link to="/registerAndLoginWithMobile" />
  <van-cell title="邮箱注册及登录" is-link to="/registerAndLoginWithEMail" />
  <van-cell title="个人信息" is-link to="/profile" />
  <van-cell title="联系客服" is-link url="https://www.livechat.ship-film.net/chatIndex?kefu_id=s011&ent_id=2&lang=zh" />
</template>

<style lang="scss" scoped>
  .title {
    padding: 10px 4px;
    text-align: center;
    background-color: #fff;
    color: #990505;
    font-size: 32px;
  }
</style>
