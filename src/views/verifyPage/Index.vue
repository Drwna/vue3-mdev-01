<script lang="ts" setup>
  import { defineComponent, reactive, ref } from 'vue';
  import Verify from '@/component/verify.vue';
  import { showFailToast, showSuccessToast } from 'vant';
  import 'vant/es/toast/style';
  import { formData, ruleList } from '@/views/verifyPage/Index';
  import { checkAndSendShortMsg, registerByPhone } from '@/api/user';

  defineComponent({
    name: 'Index',
  });

  const codeBtn = reactive({
    text: '获取验证码',
    disabled: false,
  });
  const showPopup = ref(false);
  const v = ref();

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
        v.value.refresh();
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
      v.value?.refresh();
      return;
    } else {
      showSuccessToast('验证码发送成功');
    }
    showPopup.value = false;
    countDown();
  };
  const onRegister = async () => {
    console.log('注册数据：', formData);
    const response = await registerByPhone(formData);
    console.log('registerByPhone 响应结果：', response);
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
  };
</script>

<template>
  <h1>人机验证 注册</h1>
  <hr />

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
        <van-button @click="getIdentifyCodeCode" :disabled="codeBtn.disabled" class="btn-code" round type="primary">
          {{ codeBtn.text }}
        </van-button>
      </div>
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">注册</van-button>
    </div>
  </van-form>

  <van-popup v-model:show="showPopup">
    <verify :phone="formData.mobilePhoneNo" ref="v" @finished="onFinished" />
  </van-popup>

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
