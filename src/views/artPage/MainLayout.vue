<script lang="ts" setup>
  import { defineComponent } from 'vue';
  import GeneralLayout from '@/component/general/GeneralLayout.vue';
  import TitleBar from '@/component/TitleBar.vue';
  import router from '@/router';

  defineComponent({ name: 'MainLayout' });

  const navData = [
    {
      name: '首页',
      path: '/artPage',
      icon: 'artmart-home',
    },
    {
      name: '分类',
      path: '/artPage/category',
      icon: 'artmart-category',
    },
    {
      name: '图表',
      path: '/artPage/chart',
      icon: 'artmart-like',
    },
    {
      name: '我的',
      path: '/artPage/my',
      icon: 'artmart-my',
    },
  ];
  const onClick = () => router.replace('/');
</script>

<template>
  <GeneralLayout :navData="navData">
    <template #title>
      <TitleBar title="硕亦科技" :border="false" :onClick="onClick" />
    </template>
    <template #content>
      <slot />
    </template>
  </GeneralLayout>
</template>

<style lang="scss" scoped></style>
