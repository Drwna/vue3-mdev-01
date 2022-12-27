<script lang="ts" setup>
  import { defineComponent } from 'vue';

  defineComponent({
    name: 'Swiper',
  });
  defineProps({
    imageList: {
      type: Array,
      required: true,
      default: () => [],
    },
  });
  const baseImgURL = 'src/assets/images/artmart/';
</script>

<template>
  <div class="swiper">
    <van-swipe>
      <van-swipe-item v-for="image in imageList" :key="image">
        <img :src="baseImgURL + image.img" :alt="image.name" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<style lang="scss" scoped></style>
