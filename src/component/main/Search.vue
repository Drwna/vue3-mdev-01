<script lang="ts" setup>
  import { defineComponent, ref } from 'vue';

  defineComponent({ name: 'Search' });

  const value = ref('');

  const onClick = () => {
    console.log('跳转页面');
  };
</script>

<template>
  <div class="search" @click="onClick">
    <van-search v-model="value" disabled placeholder="搜索艺术品 / 艺术家" />
  </div>
</template>

<style lang="scss" scoped>
  .search {
  }
</style>
