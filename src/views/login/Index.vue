<script lang="ts" setup>
  import { defineComponent, reactive, ref } from 'vue';
  import Verify from '@/component/verify.vue';
  import { showFailToast, showSuccessToast } from 'vant';
  import 'vant/es/toast/style';
  import { checkAndSendShortMsg, getCurrUserInfo, loginByShortMsg } from "@/api/user";
  import { validator } from '@/utils/verify';

  defineComponent({
    name: 'Login',
  });

  const formData = reactive({
    mobilePhoneNo: '',
    identifyCode: '',
  });
  const ruleList = reactive({
    phone: [{ validator, message: '', c: 'mobile' }],
    code: [{ validator, message: '', c: 'code' }],
  });

  const userInfo = reactive<Record<string, string>>({});
  const getInfo = async () => {
    const response = await getCurrUserInfo();
    console.log('getCurrUserInfo 响应结果：', response);
    Object.assign(userInfo, response);
  };

  const codeBtn = reactive({
    text: '获取验证码',
    disabled: false,
  });
  const showPopup = ref(false);

  const countDown = () => {
    let time = 3;
    codeBtn.text = time + 's后重试';
    codeBtn.disabled = true;
    const timer = setInterval(() => {
      time--;
      codeBtn.text = time + 's后重试';
      if (time <= 0) {
        clearInterval(timer);
        showPopup.value = false;
        codeBtn.text = '获取验证码';
        codeBtn.disabled = false;
      }
    }, 1000);
  };
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
    countDown();
  };
  const onLogin = async () => {
    console.log('登录数据：', formData);
    const response = await loginByShortMsg(formData);
    console.log('loginByShortMsg 响应结果：', response);
    if (response.successTag) {
      showSuccessToast(response.message);
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
  <h1>登录</h1>
  <hr />

  <van-form @submit="onLogin">
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
        <van-button @click="getIdentifyCodeCode" :disabled="codeBtn.disabled" class="btn-code" round type="primary">
          {{ codeBtn.text }}
        </van-button>
      </div>
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">登录</van-button>
    </div>
  </van-form>
  <verify v-model="showPopup" :phone="formData.mobilePhoneNo" @finished="onFinished" />

  <hr />
  <van-button type="primary" @click="getInfo">获取当前用户信息</van-button>
  <div>{{ userInfo }}</div>

</template>

<style lang="scss" scoped>
  h1 {
    padding-top: 20px;
    text-align: center;
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
