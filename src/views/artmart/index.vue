<script lang="ts" setup>
  import { defineComponent, provide } from 'vue';
  import Search from '@/component/main/Search.vue';
  import MainLayout from '@/component/main/MainLayout.vue';
  import TabList from '@/views/tab/index.vue';

  defineComponent({ name: 'artmartView' });
  provide('hasBack', false);
</script>

<template>
  <MainLayout>
    <Search />
    <TabList />
  </MainLayout>
</template>

<style lang="scss" scoped>
  .swiper-wrapper {
    padding: 8px 32px;
  }

  .powers-wrapper {
    //padding: 32px 32px 0 32px;
    padding: 20px;
  }

  .today-artwork-wrapper {
    //padding: 92px 32px 32px 32px;
    padding: 30px 20px;
  }
</style>
