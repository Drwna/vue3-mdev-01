<script lang="ts" setup>
  import { defineComponent, provide } from 'vue';
  import MainLayout from '@/views/mainPage/MainLayout.vue';
  import TabList from '@/views/tab/index.vue';

  defineComponent({ name: 'homePage' });

  provide('hasBack', false);
</script>

<template>
  <MainLayout>
    <TabList />
  </MainLayout>
</template>

<style lang="scss" scoped></style>
