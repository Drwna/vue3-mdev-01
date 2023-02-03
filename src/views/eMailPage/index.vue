<script lang="ts" setup>
  import { defineComponent } from 'vue';
  import TitleBar from '@/component/TitleBar.vue';

  defineComponent({ name: 'EMailPage' });
</script>

<template>
  <TitleBar title="使用邮箱" />
  <van-cell title="邮箱 注册" is-link to="registerAndLoginWithEMail/register" />
  <van-cell title="邮箱 登录" is-link to="registerAndLoginWithEMail/login" />
</template>

<style lang="scss" scoped></style>
