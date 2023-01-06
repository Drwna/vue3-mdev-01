<script lang="ts" setup>
  import { defineComponent } from 'vue';

  defineComponent({
    name: 'HomePage',
  });
</script>

<template>
  <van-cell title="注册" is-link to="/register" />
  <van-cell title="artmart" is-link to="/artmart" />
  <van-cell title="demo" is-link to="/demo" />
  <van-cell title="register" is-link to="/register" />
  <van-cell title="人机验证 注册" is-link to="/verify" />
  <van-cell title="短信登录" is-link to="/login" />
  <van-cell title="选择头像" is-link to="/avatar" />
</template>

<style lang="scss" scoped>
  .test {
    color: red;
    font-size: 34px;
  }
</style>
