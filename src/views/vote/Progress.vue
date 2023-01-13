<script lang="ts" setup>
  import { computed, defineComponent, ref } from 'vue';

  defineComponent({
    name: 'Progress-demo',
  });

  const prop = defineProps<{ percentage: number; text: string; ticket: number; avatarUrl: string }>();
  const width = computed(() => (prop.percentage >= 100 ? '100%' : `${prop.percentage}%`));
</script>

<template>
  <div class="item">
    <div class="left">
<!--      https://avatars.githubusercontent.com/u/25154432?v=4-->
      <img class="avatar" :src="avatarUrl" alt="avatar" />
    </div>
    <div class="right">
      <div class="info">
        <span class="name">【{{ prop.text }}】获胜</span>
        <span class="ticket">{{ prop.ticket }}票</span>
      </div>
      <div class="progress">
        <div class="bg"></div>
        <div class="bar"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .item {
    display: flex;
    gap: 12px;
    .left {
      width: 48px;
      height: 48px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 12px;
      }
    }
    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .name {
          font-size: 16px;
          font-weight: bold;
        }
        .ticket {
          font-size: 14px;
          color: #999;
        }
      }
      .progress {
        position: relative;
        width: 100%;
        height: 8px;
        background-color: #eee;
        border-radius: 8px;
        overflow: hidden;
        .bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #ccc;
          border-radius: 8px;
        }
        .bar {
          position: absolute;
          top: 0;
          left: 0;
          width: v-bind(width);
          height: 100%;
          border-radius: 8px;
          background: linear-gradient(to right, #fbe04b, #ed4948);
        }
      }
    }
  }
</style>
