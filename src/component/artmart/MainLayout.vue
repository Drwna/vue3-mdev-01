<script lang="ts" setup>
  import { defineComponent } from 'vue';
  import NavBar from '@/component/artmart/NavBar.vue';
  import { useRouter } from 'vue-router';

  defineComponent({
    name: 'MainLayout',
  });
  const router = useRouter();
</script>

<template>
  <div class="layout">
    <header class="header">
      <h1 @click="router.push('/')">Cosmos</h1>
    </header>
    <main class="main">
      <slot />
    </main>
    <footer class="footer">
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
      //padding: 12px 0 12px 52px;
      padding: 6px 0 6px 12px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      h1 {
        font-size: 32px;
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
