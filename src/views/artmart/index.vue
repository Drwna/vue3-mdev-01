<script lang="ts" setup>
  import { defineComponent } from 'vue';
  import Search from '@/component/artmart/Search.vue';
  import Swiper from '@/component/artmart/Swiper.vue';
  import Powers from '@/component/artmart/Powers.vue';
  import TodayArtwork from '@/component/artmart/TodayArtwork.vue';
  import ArtistRecom from '@/component/artmart/ArtistRecom.vue';
  import MainLayout from '@/component/artmart/MainLayout.vue';

  defineComponent({
    name: 'artmartView',
  });

  const imageList = [
    { img: 'a1.png', name: '艺术品-1' },
    { img: 'a2.png', name: '艺术品-2' },
    { img: 'a3.png', name: '艺术品-3' },
    { img: 'a4.png', name: '艺术品-4' },
  ];
  const powerList = [
    { icon: 'icon1.png', name: '新品' },
    { icon: 'icon1.png', name: '全部作品' },
    { icon: 'icon1.png', name: '艺届纵览' },
    { icon: 'icon1.png', name: '油画' },
    { icon: 'icon1.png', name: '摄影' },
    { icon: 'icon1.png', name: '独家版画' },
    { icon: 'icon1.png', name: '海外艺术家' },
    { icon: 'icon1.png', name: '风格' },
    { icon: 'icon1.png', name: '丙烯画' },
    { icon: 'icon1.png', name: '其他作品' },
  ];
</script>

<template>
  <MainLayout>
    <Search />
    <Swiper :imageList="imageList" class="swiper-wrapper" />
    <Powers :powerList="powerList" class="powers-wrapper" />
    <TodayArtwork class="today-artwork-wrapper" />
    <ArtistRecom />
  </MainLayout>
</template>

<style lang="scss" scoped>
  .swiper-wrapper {
    padding: 8px 32px;
  }

  .powers-wrapper {
    //padding: 32px 32px 0 32px;
    padding: 20px;
  }

  .today-artwork-wrapper {
    //padding: 92px 32px 32px 32px;
    padding: 30px 20px;
  }
</style>
