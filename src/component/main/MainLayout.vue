<script lang="ts" setup>
  import { defineComponent } from 'vue';
  import GeneralLayout from '@/component/general/GeneralLayout.vue';
  import TitleBar from '@/component/TitleBar.vue';

  // 通用
  defineComponent({ name: 'MainLayout' });

  const navData = [
    {
      name: '首页',
      path: '/mainPage',
      icon: 'artmart-home',
    },
    {
      name: '分类',
      path: '/mainPage/category',
      icon: 'artmart-category',
    },
    {
      name: '图表',
      path: '/mainPage/wishlist',
      icon: 'artmart-like',
    },
    {
      name: '我的',
      path: '/mainPage/my',
      icon: 'artmart-my',
    },
  ];
</script>

<template>
  <GeneralLayout :navData="navData">
    <template #title>
      <TitleBar title="硕亦科技 hello" :border="false" />
    </template>
    <template #content>
      <slot />
    </template>
  </GeneralLayout>
</template>

<style lang="scss" scoped></style>
