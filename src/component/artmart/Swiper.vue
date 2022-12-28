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
    <van-swipe autoplay="3000">
      <van-swipe-item v-for="image in imageList" :key="image">
        <img class="img" :src="baseImgURL + image.img" :alt="image.name" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<style lang="scss" scoped>
  .swiper {
    :deep(.van-swipe-item) {
      display: flex;
      justify-content: center;
      align-items: center;
      .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>
