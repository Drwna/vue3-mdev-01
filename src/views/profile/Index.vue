<script lang="ts" setup>
  import { defineComponent, ref } from 'vue';
  import { useUserStore } from '@/stores/modules/user';

  defineComponent({
    name: 'Index',
  });

  const storeUser = useUserStore();
</script>

<template>
  <div class="wrapper">
    <van-cell center value="" is-link to="profileList">
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <span class="custom-title">
          <img class="avatar" :src="storeUser.avatarUrl" alt="avatar" />
        </span>
        <span class="nickName">昵称</span>
      </template>
    </van-cell>
    <van-cell title="申购记录" is-link />
    <van-cell title="我的订单" is-link />
    <van-cell title="提货记录" is-link />
    <van-cell title="关于我们" is-link />
    <van-cell title="当前版本" is-link />
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
