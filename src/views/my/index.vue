<script lang="ts" setup>
  import { defineComponent, provide } from 'vue';
  import MainLayout from '@/component/main/MainLayout.vue';
  import Profile from '@/views/profile/Index.vue';

  defineComponent({
    name: 'My',
  });
  provide('hasBack', false);
</script>

<template>
  <MainLayout>
    <Profile />
  </MainLayout>
</template>

<style lang="scss" scoped></style>
