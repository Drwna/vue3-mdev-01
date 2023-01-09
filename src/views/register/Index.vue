<script lang="ts" setup>
  import { defineComponent, reactive, ref } from 'vue';
  import SlideVerify from 'vue3-slide-verify';
  import type { SlideVerifyInstance } from 'vue3-slide-verify';
  import 'vue3-slide-verify/dist/style.css';
  import img01 from '@/assets/images/sliderVerify/verify01.jpg';
  import img02 from '@/assets/images/sliderVerify/verify02.jpg';
  import img03 from '@/assets/images/sliderVerify/verify03.jpg';
  import { formData, ruleList } from '@/views/register/index.ts';

  defineComponent({
    name: 'Index',
  });

  const countDown = () => {
    let time = 60;
    codeBtn.text = time + 's';
    const timer = setInterval(() => {
      time--;
      codeBtn.text = time + 's';
      if (time <= 0) {
        clearInterval(timer);
        show.value = false;
        codeBtn.text = '获取验证码';
        codeBtn.disabled = false;
      }
    }, 1000);
  };

  const codeBtn = reactive({
    text: '获取验证码',
    disabled: false,
  });
  const show = ref(false);
  const sliderMsg = ref('');
  const sliderBlock = ref<SlideVerifyInstance>();
  const sliderImgList = [img01, img02, img03];
  const onAgain = () => {
    sliderMsg.value = '检测到您的操作异常，请重新验证';
    sliderBlock.value?.refresh();
  };
  const onSuccess = () => {
    console.log('success!');
    sliderMsg.value = '验证成功';
    codeBtn.disabled = true;
    show.value = false;
    countDown();
  };
  const onFail = () => {
    console.log('fail!');
    sliderMsg.value = '验证失败，请重试！';
  };

  const getPhoneCode = () => {
    show.value = true;
  };

  const onRegister = () => {
    console.log(formData);
  };
</script>

<template>
  <div>
    <van-form @submit="onRegister">
      <van-cell-group inset>
        <van-field v-model="formData.phone" name="phone" label="手机号" placeholder="手机号" :rules="ruleList.phone" />
        <div class="form-item">
          <van-field v-model="formData.code" type="number" name="验证码" label="验证码" placeholder="验证码" :rules="ruleList.code" />
          <van-button @click="getPhoneCode" :disabled="codeBtn.disabled" class="btn-code" round type="primary">
            {{ codeBtn.text }}
          </van-button>
        </div>
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 提交</van-button>
      </div>
    </van-form>
    <van-popup v-model:show="show">
      <div class="popup">
        <SlideVerify :accuracy="5" :imgs="sliderImgList" ref="sliderBlock" slider-text="向右滑动！" @again="onAgain" @success="onSuccess" @fail="onFail"></SlideVerify>
        <div class="message">{{ sliderMsg ? sliderMsg : '&nbsp;' }}</div>
      </div>
    </van-popup>

    <router-link to="login">登录</router-link>
  </div>
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

  :deep(.slide-verify-slider) {
    display: flex;
    justify-content: center;
    .slide-verify-slider-text {
      font-size: 20px;
    }
  }

  .popup {
    .message {
      text-align: center;
      margin-top: 20px;
      font-size: 14px;
      line-height: 1.5;
    }
  }
</style>
