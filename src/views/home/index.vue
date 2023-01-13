<script lang="ts" setup>
  import { defineComponent } from 'vue';

  defineComponent({
    name: 'HomePage',
  });
</script>

<template>
  <van-cell title="main page" is-link to="/cosmos" />
  <van-cell title="注册" is-link to="/register" />
  <van-cell title="验证码登录" is-link to="/login" />
  <van-cell title="密码登录" is-link to="/login/password" />
  <van-cell title="重置密码" is-link to="/resetPassword" />
  <van-cell title="个人信息" is-link to="/profile" />
  <van-cell title="列表" is-link to="/list" />
  <van-cell title="tab 切换" is-link to="/tab" />
  <van-cell title="二维码" is-link to="/qrcode" />
  <van-cell title="投票" is-link to="/vote" />
  <van-cell title="联系客服" is-link />
</template>

<style lang="scss" scoped>
  .test {
    color: red;
    font-size: 34px;
  }
</style>
