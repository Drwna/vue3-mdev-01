<script lang="ts" setup>
import router from '@/router';

const goHome = () => router.replace('/');

</script>

<template>
  <div class="wrapper">
    <p class="text">Not Found</p>
    <div class="button" @click="goHome"> go home</div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > .text {
    font-size: 34px;
    color: #333;
    padding: 100px 0;
  }
  > .button {
    padding: 20px 40px;
    background-color: #409eff;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    margin-top: 20px;
  }
}

</style>
