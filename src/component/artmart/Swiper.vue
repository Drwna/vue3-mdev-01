<script lang="ts" setup>
  import { defineComponent } from 'vue';

  defineComponent({
    name: 'Swiper',
  });

  defineProps<{
    imageList: {
      img: string;
      name: string;
    }[];
  }>();

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
    width: 100%;
    max-height: 400px;
    :deep(.van-swipe-item) {
      display: flex;
      justify-content: center;
      align-items: center;
      .img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    }
  }
</style>
