<script lang="ts" setup>
  import { defineComponent, provide } from 'vue';
  import MainLayout from '@/views/mainPage/MainLayout.vue';
  import List from '@/views/list/index.vue';

  defineComponent({ name: 'Category' });
  provide('hasBack', false);
</script>

<template>
  <MainLayout>
    <List />
  </MainLayout>
</template>

<style lang="scss" scoped></style>
