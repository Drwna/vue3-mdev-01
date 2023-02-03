<script lang="ts" setup>
  import { defineComponent, provide } from 'vue';
  import MainLayout from '@/component/main/MainLayout.vue';
  import EchartsPage from '@/views/echarts/Index.vue';

  defineComponent({
    name: 'WishList',
  });
  provide('hasBack', false);
</script>

<template>
  <MainLayout>
    <EchartsPage />
  </MainLayout>
</template>

<style lang="scss" scoped></style>
