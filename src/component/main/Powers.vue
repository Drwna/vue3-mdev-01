<script lang="ts" setup>
  import { defineComponent } from 'vue';

  defineComponent({
    name: 'Powers',
  });

  defineProps<{
    powerList: {
      icon: string;
      name: string;
    }[];
  }>();
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
    padding: 20px 16px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 32px;

    > .power {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 32px;

      img {
        width: 24px;
      }

      .text {
        font-size: 12px;
      }
    }
  }
</style>
