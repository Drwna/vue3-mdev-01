<script lang="ts" setup>
  import { defineComponent, provide } from 'vue';
  import List from '@/views/list/index.vue';

  defineComponent({ name: 'Category' });
  provide('hasBack', false);
</script>

<template>
  <List />
</template>

<style lang="scss" scoped></style>
