<script lang="ts" setup>
  import { defineComponent, ref } from 'vue';
  import { useUserStore } from '@/stores/modules/user';
  import { useRouter } from 'vue-router';
  import Icon from '@/component/Icon.vue';

  defineComponent({
    name: 'Index',
  });

  const storeUser = useUserStore();
  const router = useRouter();
  const goAuth = () => router.push('/auth');

  const logout = () => {
    // TODO
    storeUser.setUserInfo({
      isLogin: false,
      avatarUrl: '',
      nickName: '',
      userEMail: '',
    });
    router.replace('/');
  };
</script>

<template>
  <div class="wrapper">
    <h1>
      <Icon name="leftArrow" @click="router.back" />
      个人中心
    </h1>
    <van-cell center value="" is-link to="profileList">
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <span class="custom-title">
          <img class="avatar" :src="storeUser.avatarUrl" alt="avatar" />
        </span>
        <div class="info">
          <span class="nickName">{{ storeUser.nickName }}</span>
          <span @click.stop="goAuth">未认证</span>
        </div>
      </template>
    </van-cell>
    <van-cell title="申购记录" is-link />
    <van-cell title="我的订单" is-link />
    <van-cell title="提货记录" is-link />
    <van-cell title="关于我们" is-link />
    <van-cell title="当前版本" is-link />
    <van-cell title="退出登录" is-link @click="logout" />
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    h1 {
      padding-top: 20px;
      padding-bottom: 20px;
      text-align: center;
      font-size: 24px;
      .icon {
        width: 16px;
        height: 16px;
        position: absolute;
        left: 10px;
      }
    }
    :deep(.van-cell__title) {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .custom-title {
      margin-right: 4px;
      vertical-align: middle;
    }
    .avatar {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    .info {
      display: flex;
      flex-direction: column;
      .nickName {
        font-size: 24px;
      }
    }
    //.nickName {
    //  margin-left: 20px;
    //  font-size: 24px;
    //}
  }
</style>
