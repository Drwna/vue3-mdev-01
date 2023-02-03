<script lang="ts" setup>
  import { defineComponent, reactive, ref } from 'vue';
  import TitleBar from '@/component/TitleBar.vue';
  import { sendRegisterEmail } from '@/api/user';
  import { validator } from '@/utils/verify';
  import Verify from '@/component/Verify.vue';
  import { showFailToast, showSuccessToast } from 'vant';
  import 'vant/lib/toast/style';

  defineComponent({ name: 'eRegister' });

  const showPopup = ref(false);
  const isVerify = ref(false);

  const checkPwdConfirm = (v: string, pwd: string) => v === pwd;
  const formData = reactive({
    userEMail: '',
    userPwd: '',
    confirmPwd: '',
  });
  const ruleList = reactive({
    userEMail: [{ validator, message: '', c: 'email' }],
    userPwd: [{ validator, message: '', c: 'password' }],
    confirmPwd: [{ validator: (v: string) => checkPwdConfirm(v, formData.userPwd), message: '密码不一致' }],
  });

  const onFinished = async (word: string) => {
    console.log('成语: ', word);
    isVerify.value = true;
    await onRegister(word);
  };

  const onRegister = async (word: string) => {
    if (!isVerify.value) {
      showPopup.value = true;
      return;
    }
    const obj = {
      userEMail: formData.userEMail,
      userPwd: formData.userPwd,
      identifyCode: word,
    };
    const response = await sendRegisterEmail(obj);
    console.log('sendRegisterEmail 响应结果：', response, response.message);
    if (response.successTag) {
      showSuccessToast('验证码发送成功');
    } else {
      showFailToast(response.message);
    }
    showPopup.value = false;
    isVerify.value = false;
  };
</script>

<template>
  <TitleBar title="邮箱注册" />
  <van-form @submit="onRegister">
    <van-cell-group inset>
      <van-field v-model="formData.userEMail" :rules="ruleList.userEMail" name="邮箱" label="邮箱" placeholder="邮箱" />
      <!-- TODO-->
      <!--      <div class="form-item" v-if="true">-->
      <!--        <van-field-->
      <!--          v-model="identifyCode"-->
      <!--          :rules="ruleList.code"-->
      <!--          type="number"-->
      <!--          name="验证码"-->
      <!--          label="验证码"-->
      <!--          placeholder="验证码"-->
      <!--          maxlength="6"-->
      <!--        />-->
      <!--        <van-button @click="getIdentifyCodeCode" :disabled="buttonState.disabled" class="btn-code" round type="primary">-->
      <!--          {{ buttonState.text }}-->
      <!--        </van-button>-->
      <!--      </div>-->
      <van-field v-model="formData.userPwd" :rules="ruleList.userPwd" name="password" label="密码" placeholder="密码" />
      <van-field v-model="formData.confirmPwd" :rules="ruleList.confirmPwd" name="password" label="确认密码" placeholder="确认密码" />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">注册</van-button>
    </div>
  </van-form>
  <Verify v-model="showPopup" :phoneOrEmail="formData.userEMail" @finished="onFinished" />
</template>

<style lang="scss" scoped>
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
