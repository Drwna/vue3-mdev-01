<script setup lang="ts">
  import { showToast } from 'vant';
  import 'vant/es/toast/style';

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (!isMobile) {
    showToast({
      message: '请使用移动端浏览器打开，以获得最佳浏览效果',
      duration: 3000,
    });
  }

  // 路由中添加key解决切换路由时页面不展示内容，刷新后才展示内容问题
  // const route = useRoute();
  // const key = computed(() => route?.path + Math.random());
</script>

<template>
  <!--  <RouterView :key="key" />-->
  <RouterView />
</template>

<style lang="scss">
  #app {
    height: 100vh;
    width: 100vw;
    /* prettier-ignore */
    max-width: $maxWidth;
    border-right: 1px solid #666;
    border-left: 1px solid #666;
    margin: 0 auto;
  }

  @media screen and (max-width: $maxWidth) {
    #app {
      border: none;
    }
  }
</style>
