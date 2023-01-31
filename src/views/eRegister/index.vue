<script lang="ts" setup>
  import { defineComponent, reactive, ref } from 'vue';
  import TitleBar from '@/component/TitleBar.vue';
  import { checkVerifyCodeByEmail, sendRegisterEmail } from '@/api/user';
  import { validator } from '@/utils/verify';
  import Verify from '@/component/Verify.vue';
  import { showFailToast, showSuccessToast } from 'vant';
  import { useCountDown } from '@/hooks/useCountDown';

  defineComponent({
    name: 'eRegister',
  });

  const showPopup = ref(false);

  const checkPwdConfirm = (v: string, pwd: string) => v === pwd;
  const formData = reactive({
    userEMail: '',
    userPwd: '',
    confirmPwd: '',
  });
  const ruleList = reactive({
    userEMail: [{ validator, message: '', c: 'email' }],
    code: [{ validator, message: '', c: 'code' }],
    userPwd: [{ validator, message: '', c: 'password' }],
    confirmPwd: [{ validator: (v: string) => checkPwdConfirm(v, formData.userPwd), message: '密码不一致' }],
  });
  const { buttonState, startCount } = useCountDown(3);

  const onFinished = async (word: string) => {
    console.log('完成', word);
    const response = await checkVerifyCodeByEmail({ userEMail: formData.userEMail, identifyCode: word });
    console.log('checkVerifyCodeByEmail 响应结果：', response);
    if (!response.successTag) {
      showFailToast(response.message);
      return;
    } else {
      showSuccessToast('验证码发送成功');
    }
    showPopup.value = false;
    startCount();
  };

  const onRegister = async () => {
    console.log('注册数据：', formData);
    const response = await sendRegisterEmail(formData);
    console.log('sendRegisterEmail 响应结果：', response);
  };
  const getIdentifyCodeCode = () => {
    showPopup.value = true;
    console.log('getIdentifyCodeCode', showPopup.value);
  };
</script>

<template>
  <TitleBar title="邮箱注册" />
  <van-form @submit="onRegister">
    <van-cell-group inset>
      <van-field v-model="formData.userEMail" :rules="ruleList.userEMail" name="邮箱" label="邮箱" placeholder="邮箱" />
      <!--      <div class="form-item" v-if="true">-->
      <!--        <van-field-->
      <!--          v-model="formData.identifyCode"-->
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

  <verify v-model="showPopup" :phoneOrEmail="formData.userEMail" @finished="onFinished" />
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
