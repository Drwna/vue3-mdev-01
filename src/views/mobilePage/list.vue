<script lang="ts" setup>
  import { defineComponent } from 'vue';
  import TitleBar from '@/component/TitleBar.vue';

  defineComponent({ name: 'MobilePage' });
</script>

<template>
  <TitleBar title="移动端" />
  <van-cell title="手机号注册" is-link to="/registerAndLoginWithMobile/register" />
  <van-cell title="手机号+验证码 登录" is-link to="/registerAndLoginWithMobile/login" />
  <van-cell title="手机号+密码 登录" is-link to="/registerAndLoginWithMobile/loginByPassword" />
  <van-cell title="手机号重置密码" is-link to="/registerAndLoginWithMobile/resetPassword" />
</template>

<style lang="scss" scoped></style>
