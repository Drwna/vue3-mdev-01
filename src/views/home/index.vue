<script lang="ts" setup>
  import { defineComponent } from 'vue';

  defineComponent({
    name: 'HomePage',
  });
</script>

<template>
  <van-cell title="main page" is-link to="/cosmos" />
  <van-cell title="注册" is-link to="/verify" />
  <van-cell title="短信登录" is-link to="/login" />
  <van-cell title="密码登录" is-link to="/passwordLogin" />
  <van-cell title="重置密码" is-link to="/resetPassword" />
  <van-cell title="个人信息" is-link to="/profile" />
  <van-cell title="列表" is-link to="/list" />
</template>

<style lang="scss" scoped>
  .test {
    color: red;
    font-size: 34px;
  }
</style>
