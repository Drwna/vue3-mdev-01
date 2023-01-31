<script lang="ts" setup>
  import { defineComponent, getCurrentInstance, reactive, ref } from 'vue';
  import EditInfoLayout from '@/component/editInfoLayout/Index.vue';
  import { validator } from '@/utils/verify';
  import { showFailToast, showSuccessToast } from 'vant';
  import 'vant/es/toast/style';
  import Verify from '@/component/Verify.vue';
  import { editUserProfile, sendVerifyCodeByEmailAfterLogin } from '@/api/user';

  defineComponent({ name: 'EditEMail' });

  const formData = reactive({
    userEMail: '',
    identifyCode: '',
  });
  const ruleList = reactive({
    userEMail: [{ validator, message: '', c: 'email' }],
    identifyCode: [{ validator, message: '', c: 'code' }],
  });
  const showPopup = ref(false);
  const codeBtn = reactive({
    text: '获取验证码',
    disabled: false,
  });
  const getIdentifyCode = () => {
    if (!formData.userEMail) {
      showFailToast('请输入邮箱地址！');
      return;
    }
    showPopup.value = true;
  };
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
    const response = await sendVerifyCodeByEmailAfterLogin(formData);
    console.log('sendVerifyCodeByEmail 响应结果：', response);
    if (!response.successTag) {
      showFailToast(response.message);
      return;
    } else {
      showSuccessToast('验证码发送成功');
    }
    showPopup.value = false;
    countDown();
  };
  const onSubmit = async () => {
    const response = await editUserProfile(formData);
    console.log('updateUserInfo 响应结果：', response);
  };
</script>

<template>
  <EditInfoLayout title="修改邮箱" :has-save-btn="false">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="formData.userEMail" :rules="ruleList.userEMail" name="phone" label="邮箱地址" placeholder="邮箱地址" />
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
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <Verify v-model="showPopup" :phoneOrEmail="formData.userEMail" @finished="onFinished" />
  </EditInfoLayout>
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
