<script lang="ts" setup>
  import { defineComponent, reactive, ref } from 'vue';
  import ProgressDemo from '@/views/vote/Progress.vue';
  import { getVoteList } from '@/api/user';

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
    <h1>投票</h1>
    <hr />
    <button @click="toggle">显示/隐藏</button>

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
  h1 {
    text-align: center;
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
