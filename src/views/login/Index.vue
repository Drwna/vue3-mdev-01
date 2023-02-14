<script lang="ts" setup>
  import { defineComponent, reactive, ref } from 'vue';
  import Verify from '@/component/Verify.vue';
  import { showFailToast, showSuccessToast } from 'vant';
  import 'vant/es/toast/style';
  import { checkAndSendShortMsg, loginByShortMsg } from '@/api/user';
  import { validator } from '@/utils/verify';
  import { useUserStore } from '@/stores/modules/user';
  import TitleBar from '@/component/TitleBar.vue';
  import { useCountDown } from '@/hooks/useCountDown';
  import router from '@/router';

  defineComponent({ name: 'Login' });

  type FormData = {
    mobilePhoneNo: string;
    identifyCode: string;
  };
  const formData = reactive<FormData>({ mobilePhoneNo: '', identifyCode: '' });
  const ruleList = reactive({
    phone: [{ validator, message: '', c: 'mobile' }],
    code: [{ validator, message: '', c: 'code' }],
  });
  const showPopup = ref(false);

  const storeUser = useUserStore();
  const { buttonState, startCount } = useCountDown();
  const onFinished = async (word: string) => {
    formData.identifyCode = word;
    const response = await checkAndSendShortMsg(formData);
    console.log('checkAndSendShortMsg 响应结果：', response, response.rtnobj1);
    if (!response.successTag) {
      showFailToast(response.message);
      return;
    } else {
      showSuccessToast('验证码发送成功');
    }
    showPopup.value = false;
    startCount();
  };
  const onLogin = async () => {
    console.log('登录数据：', formData);
    const response = await loginByShortMsg(formData);
    console.log('loginByShortMsg 响应结果：', response);
    if (response.successTag) {
      showSuccessToast(response.message);
      const res = await storeUser.getUserInfo();
      if (res) {
        await router.replace('/');
      }
    } else {
      showFailToast(response.message);
    }
  };
  const getIdentifyCode = async () => {
    if (!formData.mobilePhoneNo) {
      showFailToast('请输入手机号');
      return;
    }
    showPopup.value = true;
    console.log('getIdentifyCodeCode', showPopup.value);
  };
  const onClick = () => router.push('/');
</script>

<template>
  <TitleBar title="验证码登录" :onClick="onClick" />
  <van-form @submit="onLogin">
    <van-cell-group inset>
      <van-field
        v-model="formData.mobilePhoneNo"
        :rules="ruleList.phone"
        type="number"
        name="phone"
        label="手机号"
        placeholder="手机号"
        maxlength="11"
      />
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
        <van-button @click="getIdentifyCode" :disabled="buttonState.disabled" class="btn-code" round type="primary">
          {{ buttonState.text }}
        </van-button>
      </div>
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">登录</van-button>
    </div>
  </van-form>
  <RouterLink class="reg" to="register">注册</RouterLink>
  <verify v-model="showPopup" :phoneOrEmail="formData.mobilePhoneNo" @finished="onFinished" />
</template>

<style lang="scss" scoped>
  .reg {
    float: right;
    font-size: 20px;
    text-decoration: underline;
    margin: var(--van-cell-group-inset-padding);
    text-align: right;
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
