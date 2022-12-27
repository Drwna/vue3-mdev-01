<script lang="ts" setup>
  import { defineComponent } from 'vue';

  defineComponent({
    name: 'NavBar',
  });
</script>

<template>
  <van-tabbar route class="van-tabbar">
    <van-tabbar-item replace to="/artmart" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/search" icon="search">分类</van-tabbar-item>
    <van-tabbar-item replace to="/friends" icon="like-o">心愿单</van-tabbar-item>
    <van-tabbar-item replace to="/setting" icon="user-circle-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<style lang="scss" scoped>
  :deep(.van-tabbar-item--active) {
    color: #4243e8;
  }
</style>
