<script lang="ts" setup>
  import { defineComponent, reactive, ref } from 'vue';
  import Verify from '@/component/verify.vue';
  import { showFailToast, showSuccessToast } from 'vant';
  import 'vant/es/toast/style';

  defineComponent({
    name: 'Index',
  });

  const getRandomByRange = (start: number, end: number) => {
    return Math.round(Math.random() * (end - start) + start);
  };

  const formData = reactive({
    phone: '',
    code: '',
  });

  const v = ref();
  const wordList = ['一成不变', '张冠李戴', '为所欲为', '欣欣向荣'];
  const words = ref(wordList[getRandomByRange(0, wordList.length - 1)]);

  const onRefresh = () => {
    words.value = wordList[getRandomByRange(0, wordList.length - 1)];
  };

  const onSuccess = () => {
    console.log('验证成功');
    showSuccessToast('验证成功');
  };

  const onFail = () => {
    console.log('验证失败');
    showFailToast('验证失败\n请重新验证');
    v.value.refresh();
  };

  const x = ref('');
  const updateX = (v: string) => {
    x.value = v;
  };
</script>

<template>
  <h1>人机验证</h1>
  {{ v }}
  <hr />
  <verify v-model="x" @update:model-value="updateX" ref="v" :words="words" @refresh="onRefresh" @success="onSuccess" @fail="onFail" />
</template>

<style lang="scss" scoped>
  h1 {
    text-align: center;
  }
</style>
