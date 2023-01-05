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
  <van-cell title="人机验证" is-link to="/verify" />
  <van-cell title="选择头像" is-link to="/avatar" />
  <van-cell title="短信登录" is-link to="/login" />
  <div class="test"> vue 3.0 + vite + vue-router + pinia + vant + typescript</div>
</template>

<style lang="scss" scoped>
  .test {
    color: red;
    font-size: 34px;
  }
</style>
