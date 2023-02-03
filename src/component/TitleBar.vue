<script lang="ts" setup>
  import { defineComponent } from 'vue';
  import Icon from '@/component/Icon.vue';
  import router from '@/router';

  defineComponent({ name: 'TitleBar' });
  const props = withDefaults(
    defineProps<{
      title: string;
      border?: boolean;
      hasBack?: boolean;
      onClick?: () => void;
    }>(),
    {
      border: true,
      hasBack: true,
    },
  );
  const onClick = () => (props.onClick ? props.onClick() : router.back());
</script>

<template>
  <div class="title">
    <h1>
      <Icon @click="onClick" name="leftArrow" v-if="hasBack" />
      {{ title }}
    </h1>
    <hr v-if="border" />
  </div>
</template>

<style lang="scss" scoped>
  .title {
    text-align: center;
    padding: 16px;
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
