<script lang="ts" setup>
  import { defineComponent, ref } from 'vue';
  import VueQrcode from '@chenfengyuan/vue-qrcode';

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
  <h1 style="text-align: center">二维码</h1>
  <hr />
  <input type="text" :value="text" @input="onInput" style="width: 100%; padding: 12px 0" />
  <div>
    <VueQrcode :value="text" :options="{ color: { dark: '#00ffff', light: '#ffffff' } }" />
  </div>
  <div style="margin-top: 100px">
    <div>扫码预览: </div>
    <VueQrcode value="http://www.safereborn.com:8084/" />
  </div>
</template>

<style lang="scss" scoped></style>
