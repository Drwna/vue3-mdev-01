<script lang="ts" setup>
  import { defineComponent, provide } from 'vue';
  import MainLayout from '@/views/mainPage/MainLayout.vue';

  defineComponent({ name: 'MainPage' });
  provide('hasTitle', false);
  provide('has3D', false);
</script>

<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
</template>

<style lang="scss" scoped></style>
