<script lang="ts" setup>
  import { defineComponent, reactive, ref } from 'vue';
  import Verify from '@/component/Verify.vue';
  import { showFailToast, showSuccessToast } from 'vant';
  import { checkAndSendShortMsg, resetPwd } from '@/api/user';
  import { validator } from '@/utils/verify';
  import TitleBar from '@/component/TitleBar.vue';

  defineComponent({ name: 'ResetPassword' });

  const formData = reactive({
    mobilePhoneNo: '',
    userPwd: '',
    identifyCode: '',
  });
  const confirmPwd = ref('');
  const ruleList = reactive({
    mobilePhoneNo: [{ validator, message: '', c: 'mobile' }],
    userPwd: [{ validator, message: '', c: 'password' }],
    identifyCode: [{ validator, message: '', c: 'code' }],
  });
  const codeBtn = reactive({
    text: '获取验证码',
    disabled: false,
  });
  const showPopup = ref(false);

  const countDown = (time = 60) => {
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
    countDown(3);
  };
  const onSubmit = async () => {
    console.log('reset password数据：', formData);
    const response = await resetPwd(formData);
    console.log('响应结果：', response);
    if (response.successTag) {
      showSuccessToast(response.message);
    } else {
      showFailToast(response.message);
    }
  };
  const getIdentifyCode = () => {
    console.log('get identify code', showPopup.value);
    console.log('formData ', formData);
    if (!formData.mobilePhoneNo) {
      showFailToast('请输入手机号');
      return;
    }
    showPopup.value = true;
    console.log('getIdentifyCode', showPopup.value);
  };
</script>

<template>
  <TitleBar title="重置密码" />
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="formData.mobilePhoneNo"
        :rules="ruleList.mobilePhoneNo"
        name="phone"
        label="手机号"
        placeholder="手机号"
        maxlength="11"
      />
      <div class="form-item">
        <van-field
          v-model="formData.identifyCode"
          :rules="ruleList.identifyCode"
          type="number"
          name="验证码"
          label="验证码"
          placeholder="验证码"
          maxlength="6"
        />
        <van-button @click="getIdentifyCode" :disabled="codeBtn.disabled" class="btn-code" round type="primary">
          {{ codeBtn.text }}
        </van-button>
      </div>
      <van-field v-model="formData.userPwd" :rules="ruleList.userPwd" name="password" label="密码" placeholder="密码" />
      <van-field v-model="confirmPwd" :rules="ruleList.userPwd" name="password" label="确认密码" placeholder="确认密码" />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">提交</van-button>
    </div>
  </van-form>

  <verify v-model="showPopup" :phoneOrEmail="formData.mobilePhoneNo" @finished="onFinished" />
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
