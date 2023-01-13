<script lang="ts" setup>
  import { defineComponent } from 'vue';
  import Icon from '@/component/Icon.vue';
  import router from '@/router';

  defineComponent({
    name: 'TitleBar',
  });
  defineProps<{ title: string }>();
</script>

<template>
  <div class="title">
    <h1>
      <Icon @click="router.back()" name="leftArrow" />
      {{ title }}
    </h1>
    <hr />
  </div>
</template>

<style lang="scss" scoped>
  .title {
    text-align: center;
    padding: 20px 16px 10px 16px;
    h1 {
      text-align: center;
      font-size: 24px;
      position: relative;
      .icon {
        width: 18px;
        height: 18px;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
</style>
