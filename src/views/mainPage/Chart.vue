<script lang="ts" setup>
  import { defineComponent, provide } from 'vue';
  import EchartsPage from '@/views/echarts/Index.vue';

  defineComponent({ name: 'Chart' });
  provide('hasBack', false);
</script>

<template>
  <EchartsPage :has3D="false" />
</template>

<style lang="scss" scoped></style>
