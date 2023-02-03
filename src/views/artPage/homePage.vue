<script lang="ts" setup>
  import { defineComponent } from 'vue';
  import ArtistRecom from '@/component/main/ArtistRecom.vue';
  import Powers from '@/component/main/Powers.vue';
  import TodayArtwork from '@/component/main/TodayArtwork.vue';

  defineComponent({ name: 'homePage' });

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
  <Powers :powerList="powerList" />
  <TodayArtwork :imageList="imageList" />
  <ArtistRecom />
</template>

<style lang="scss" scoped></style>
