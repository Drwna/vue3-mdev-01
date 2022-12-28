<script lang="ts" setup>
  import { defineComponent } from 'vue';
  import Icon from '@/component/Icon.vue';

  defineComponent({
    name: 'NavBar',
  });
</script>

<template>
  <nav class="nav">
    <router-link to="/artmart">
      <Icon name="artmart-home" />
      <span>首页</span>
    </router-link>
    <router-link to="/category">
      <Icon name="artmart-category" />
      <span>分类</span>
    </router-link>
    <router-link to="/wishlist">
      <Icon name="artmart-like" />
      <span>心愿单</span>
    </router-link>
    <router-link to="/mine">
      <Icon name="artmart-my" />
      <span>我的</span>
    </router-link>
  </nav>
</template>

<style lang="scss" scoped>
  .nav {
    display: flex;
    > a {
      width: 25%;
      font-size: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      padding: 12px 0;
      color: #707070;
      .icon {
        width: 64px;
        height: 64px;
      }
      &.router-link-exact-active {
        color: #4243e8;
      }
    }
  }
</style>
