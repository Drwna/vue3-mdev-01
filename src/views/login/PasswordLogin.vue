<script lang="ts" setup>
  import { defineComponent, reactive } from 'vue';
  import { showFailToast, showSuccessToast } from 'vant';
  import 'vant/es/toast/style';
  import { getCurrUserInfo, loginByPwd } from '@/api/user';
  import { validator } from '@/utils/verify';
  import { useUserStore } from '@/stores/modules/user';
  import router from '@/router';
  import Icon from '@/component/Icon.vue';

  defineComponent({
    name: 'PasswordLogin',
  });

  const formData = reactive({
    userNo: '',
    userPwd: '',
  });
  const ruleList = reactive({
    userNo: [{ validator, message: '', c: 'mobile' }],
    userPwd: [{ validator, message: '', c: 'password' }],
  });

  const storeUser = useUserStore();
  const userInfo = reactive<Record<string, string>>({});
  const getInfo = async () => {
    const response = await getCurrUserInfo();
    console.log('getInfo', response);
    Object.assign(userInfo, response);
    const { avatarUrl, nickName, userEMail } = response.rtnObj1;
    storeUser.setUserInfo({
      avatarUrl,
      nickName,
      userEMail,
    });
    await router.push('/cosmos');
  };

  const onLogin = async () => {
    console.log('登录数据：', formData);
    const response = await loginByPwd(formData);
    console.log('loginByShortMsg 响应结果：', response);
    if (response.successTag) {
      showSuccessToast(response.message);
    } else {
      showFailToast(response.message);
    }
  };
</script>

<template>
  <h1>
    <Icon name="leftArrow" @click="router.back" />
    登录
  </h1>
  <hr />

  <van-form @submit="onLogin">
    <van-cell-group inset>
      <van-field
        v-model="formData.userNo"
        :rules="ruleList.userNo"
        type="number"
        name="phone"
        label="手机号"
        placeholder="手机号"
        maxlength="11"
      />
      <van-field v-model="formData.userPwd" :rules="ruleList.userPwd" name="密码" label="密码" placeholder="密码" />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">登录</van-button>
    </div>
  </van-form>

  <hr />
  <van-button type="primary" @click="getInfo">获取当前用户信息</van-button>
  <div>{{ userInfo }}</div>
</template>

<style lang="scss" scoped>
  h1 {
    padding-top: 20px;
    text-align: center;
    font-size: 24px;
    .icon {
      width: 16px;
      height: 16px;
      position: absolute;
      left: 10px;
    }
  }

  .form-item {
    position: relative;

    .btn-code {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      height: 32px;

      &:disabled {
        background-color: #a8a5a5;
        border-color: #a8a5a5;
        color: #fff;
      }
    }
  }
</style>
