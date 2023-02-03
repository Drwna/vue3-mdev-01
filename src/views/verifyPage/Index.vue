<script lang="ts" setup>
  import { defineComponent, ref } from 'vue';
  import Verify from '@/component/Verify.vue';
  import { showFailToast, showSuccessToast } from 'vant';
  import 'vant/es/toast/style';
  import { checkAndSendShortMsg, registerByPhone } from '@/api/user';
  import { formData, ruleList } from '@/views/verifyPage/verifyPage';
  import TitleBar from '@/component/TitleBar.vue';
  import { useCountDown } from '@/hooks/useCountDown';
  import router from '@/router';

  defineComponent({
    name: 'VerifyPage',
  });

  const confirmPwd = ref('');
  const showPopup = ref(false);

  const { buttonState, startCount } = useCountDown(3);

  const onFinished = async (word: string) => {
    console.log('完成', word);
    formData.identifyCode = word;
    const response = await checkAndSendShortMsg(formData);
    console.log('checkAndSendShortMsg 响应结果：', response);
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
    const response = await registerByPhone(formData);
    console.log('registerByPhone 响应结果：', response);
    if (response.successTag) {
      showSuccessToast(response.message);
      await router.push('/');
    } else {
      showFailToast(response.message);
    }
  };
  const getIdentifyCodeCode = async () => {
    if (!formData.mobilePhoneNo) {
      showFailToast('请输入手机号');
      return;
    }
    showPopup.value = true;
    console.log('getIdentifyCodeCode', showPopup.value);
  };
</script>

<template>
  <TitleBar title="手机号注册" />
  <van-form @submit="onRegister">
    <van-cell-group inset>
      <van-field v-model="formData.mobilePhoneNo" :rules="ruleList.phone" name="phone" label="手机号" placeholder="手机号" maxlength="11" />
      <div class="form-item">
        <van-field
          v-model="formData.identifyCode"
          :rules="ruleList.code"
          type="number"
          name="验证码"
          label="验证码"
          placeholder="验证码"
          maxlength="6"
        />
        <van-button @click="getIdentifyCodeCode" :disabled="buttonState.disabled" class="btn-code" round type="primary">
          {{ buttonState.text }}
        </van-button>
      </div>
      <van-field v-model="formData.userPwd" :rules="ruleList.password" name="password" label="密码" placeholder="密码" />
      <van-field v-model="confirmPwd" name="password" label="确认密码" placeholder="确认密码" />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">注册</van-button>
    </div>
  </van-form>

  <verify v-model="showPopup" :phoneOrEmail="formData.mobilePhoneNo" @finished="onFinished" />
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
