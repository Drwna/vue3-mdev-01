<script lang="ts" setup>
  import { defineComponent, provide } from 'vue';
  import ProfileList from '@/views/profileList/ProfileList.vue';

  defineComponent({ name: 'My' });
  provide('hasBack', false);
  provide('hasTitle', false);
</script>

<template>
  <ProfileList />
</template>

<style lang="scss" scoped></style>
