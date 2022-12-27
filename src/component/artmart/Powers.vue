<script lang="ts" setup>
  import { defineComponent } from 'vue';

  defineComponent({
    name: 'Powers',
  });

  defineProps({
    powerList: {
      type: Array,
      default: () => [],
    },
  });
</script>

<template>
  <div class="powers">
    <div v-for="power in powerList" :key="power.name" class="power">
      <img src="@/assets/images/artmart/icon1.png" alt="icon1" />
      <span class="text">{{ power.name }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .powers {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 64px;

    > .power {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 32px;

      img {
        width: 52px;
      }

      .text {
        font-size: 20px;
      }
    }
  }
</style>
