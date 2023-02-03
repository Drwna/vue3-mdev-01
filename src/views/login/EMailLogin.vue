<script lang="ts" setup>
  import { defineComponent, reactive } from 'vue';
  import 'vant/es/toast/style';
  import { validator } from '@/utils/verify';
  import TitleBar from '@/component/TitleBar.vue';
  import { loginByEMail } from '@/api/user';
  import { showFailToast, showSuccessToast } from 'vant';

  defineComponent({ name: 'EMailLogin' });

  type FormData = {
    userEMail: string;
    userPwd: string;
  };
  const formData = reactive<FormData>({
    userEMail: '',
    userPwd: '',
  });
  const ruleList = reactive({
    userEMail: [{ validator, message: '', c: 'email' }],
    userPwd: [{ validator, message: '', c: 'password' }],
  });
  const onLogin = async () => {
    console.log('登录数据：', formData);
    const response = await loginByEMail({
      userNo: formData.userEMail,
      userPwd: formData.userPwd,
    });
    console.log('loginByEMail 响应结果：', response);
    response?.successTag ? showSuccessToast('登录成功') : showFailToast('登录失败');
  };
</script>

<template>
  <TitleBar title="邮箱+密码登录" />
  <van-form @submit="onLogin">
    <van-cell-group inset>
      <van-field v-model="formData.userEMail" :rules="ruleList.userEMail" name="邮箱" label="邮箱" placeholder="邮箱" />
      <van-field v-model="formData.userPwd" :rules="ruleList.userPwd" name="密码" label="密码" placeholder="密码" />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">登录</van-button>
    </div>
  </van-form>
</template>

<style lang="scss" scoped></style>
