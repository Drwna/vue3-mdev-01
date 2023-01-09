<script lang="ts" setup>
  import { defineComponent } from 'vue';

  defineComponent({
    name: 'Index',
  });
</script>

<template>
  <div class="wrapper">
    <van-cell center value="" is-link to="profileList">
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <span class="custom-title">
          <img class="avatar" src="@/assets/images/artmart/avatar.png" alt="avatar" />
        </span>
        <span class="nickName">昵称</span>
      </template>
    </van-cell>
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    .custom-title {
      margin-right: 4px;
      vertical-align: middle;
    }
    .avatar {
      width: 64px;
      height: 64px;
    }
    .nickName {
      margin-left: 20px;
      font-size: 24px;
    }
  }
</style>
