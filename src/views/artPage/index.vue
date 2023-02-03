<script lang="ts" setup>
  import { defineComponent } from 'vue';
  import MainLayout from '@/views/artPage/MainLayout.vue';

  defineComponent({ name: 'index' });
</script>

<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
</template>

<style lang="scss" scoped></style>
