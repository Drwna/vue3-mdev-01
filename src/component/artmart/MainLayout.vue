<script lang="ts" setup>
  import { defineComponent } from 'vue';
  import NavBar from '@/component/artmart/NavBar.vue';

  defineComponent({
    name: 'MainLayout',
  });
</script>

<template>
  <div class="layout">
    <header class="header">
      <h1>artmart.</h1>
    </header>
    <main class="main">
      <slot />
    </main>
    <footer class="nav">
      <NavBar />
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
      padding: 12px 0 12px 52px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      h1 {
        font-size: 60px;
      }
      @media screen and (min-width: 768px) {
        padding: 8px 0 8px 32px;
        h1 {
          font-size: 38px;
          color: red;
        }
      }
    }

    > .main {
      flex-grow: 1;
      overflow: auto;
    }
    > .nav {
    }
  }
</style>
