<script lang="ts" setup>
  import { defineComponent } from 'vue';
  import Icon from '@/component/Icon.vue';

  defineComponent({ name: 'GeneralNavBar' });

  type NavItem = {
    name: string;
    path: string;
    icon: string;
  };
  defineProps<{ navData: NavItem[] }>();
</script>

<template>
  <nav class="nav">
    <router-link v-for="item in navData" :key="item.path" :to="item.path">
      <Icon :name="item.icon" />
      <span>{{ item.name }}</span>
    </router-link>
  </nav>
</template>

<style lang="scss" scoped>
  .nav {
    display: flex;
    > a {
      flex: 1;
      font-size: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
      padding: 8px 0;
      color: #707070;
      .icon {
        width: 28px;
        height: 28px;
      }
      &.router-link-exact-active {
        color: #4243e8;
      }
    }
  }
</style>
