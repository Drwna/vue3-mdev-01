<script lang="ts" setup>
  import { defineComponent } from 'vue';
  import GeneralNavBar from '@/component/general/GeneralNavBar.vue';

  defineComponent({ name: 'MainNavBar' });

  const navData = [
    {
      name: '首页',
      path: '/cosmos',
      icon: 'artmart-home',
    },
    {
      name: '分类',
      path: '/cosmos/category',
      icon: 'artmart-category',
    },
    {
      name: '图表',
      path: '/cosmos/wishlist',
      icon: 'artmart-like',
    },
    {
      name: '我的',
      path: '/cosmos/my',
      icon: 'artmart-my',
    },
  ];
</script>

<template>
  <GeneralNavBar :navData="navData" />
</template>

<style lang="scss" scoped></style>
