<script lang="ts" setup>
  import { defineComponent, ref } from 'vue';
  import VueQrcode from '@chenfengyuan/vue-qrcode';
  import TitleBar from '@/component/TitleBar.vue';

  defineComponent({
    name: 'index',
  });

  const text = ref('hello world');
  const onInput = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    if (value === '') {
      text.value = 'hello world';
    } else {
      text.value = value;
    }
  };
</script>

<template>
  <TitleBar title="二维码" />
  <div style="padding: 0 20px">
    <input type="text" :value="text" @input="onInput" style="width: 100%; padding: 12px 0" />
    <VueQrcode :value="text" :options="{ color: { dark: '#00ffff', light: '#ffffff' } }" />
    <div style="margin-top: 100px">
      <div style="font-size: 18px">扫码预览当前网站:</div>
      <div style="text-align: center">
        <VueQrcode value="http://www.safereborn.com:8084/" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
