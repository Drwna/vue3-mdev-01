<script lang="ts" setup>
  import { defineComponent, reactive, ref } from 'vue';
  import ProgressDemo from '@/views/vote/Progress.vue';
  import { getVoteList } from '@/api/user';
  import TitleBar from '@/component/TitleBar.vue';

  defineComponent({
    name: 'index',
  });

  type VoteItem = {
    percentage: number;
    text: string;
    ticket: number;
    avatarUrl: string;
  };

  const data = reactive<VoteItem[]>([]);

  const getData = async () => {
    const response = await getVoteList();
    console.log(response, response.data.list);
    data.push(...response.data.list.sort((a: VoteItem, b: VoteItem) => b.ticket - a.ticket));
  };

  getData();

  const showBottom = ref(false);
  const toggle = () => (showBottom.value = !showBottom.value);
</script>

<template>
  <div>
    <TitleBar title="投票" />
    <div style="text-align: center">
      <van-button @click="toggle" type="primary">显示投票结果</van-button>
    </div>
    <van-popup v-model:show="showBottom" round position="bottom">
      <div class="wrapper">
        <h2>标题</h2>
        <div class="content" v-for="{ percentage, text, ticket, avatarUrl } in data" :key="text">
          <ProgressDemo :percentage="percentage" :text="text" :ticket="ticket" :avatarUrl="avatarUrl" />
        </div>
        <div class="close">
          <van-button block round @click="toggle">我知道了</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<style lang="scss" scoped>
  :deep(.van-overlay),
  :deep(.van-popup--bottom) {
    max-width: $maxWidth;
    left: 50%;
    transform: translateX(-50%);
  }

  .wrapper {
    height: 340px;
    h2 {
      text-align: center;
      font-size: 24px;
      padding: 10px;
    }
    .content {
      padding: 12px 20px;
      display: flex;
      flex-flow: column;
      gap: 20px;
    }
    .close {
      padding: 12px 32px;
    }
  }
</style>
