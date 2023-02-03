<script lang="ts" setup>
  import { defineComponent } from 'vue';
  import GeneralNavBar from '@/component/general/GeneralNavBar.vue';

  defineComponent({ name: 'GeneralLayout' });

  type NavItem = { name: string; path: string; icon: string };
  defineProps<{ navData: NavItem[] }>();
</script>

<template>
  <div class="layout">
    <header class="header">
      <slot name="title" />
    </header>
    <main class="main no-scrollbar">
      <slot name="content" />
    </main>
    <footer class="footer">
      <GeneralNavBar :navData="navData" />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
  .layout {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    > .header {
      //padding: 10px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      h1 {
        position: relative;
        text-align: center;
        font-size: 32px;
        color: #990505;
        .icon {
          color: #000;
          width: 18px;
          height: 18px;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
    > .main {
      flex-grow: 1;
      overflow: auto;
    }
    > .footer {
    }
  }
</style>
