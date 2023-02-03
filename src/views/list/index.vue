<script lang="ts" setup>
  import { defineComponent, inject, reactive, ref } from 'vue';
  import { showConfirmDialog } from 'vant';
  import 'vant/es/dialog/style';
  import TitleBar from '@/component/TitleBar.vue';

  defineComponent({ name: 'List' });

  const orderList = reactive<{ index: number; orderNo: string; amount: number }[]>([]);
  const createData = () => {
    for (let i = 0; i < 100; i++) {
      orderList.push({
        index: orderList.length + 1,
        orderNo: Math.floor(Math.random() * 1000000000).toString(),
        amount: Math.floor(Math.random() * 100),
      });
    }
  };

  createData();

  const list = ref<number[]>([]);
  const loading = ref(false);
  const finished = ref(false);

  const onLoad = () => {
    // 异步更新数据
    console.log('on load ');
    // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        list.value.push(list.value.length + 1);
      }

      // 加载状态结束
      loading.value = false;

      // 数据全部加载完成
      if (list.value.length >= 40) {
        finished.value = true;
      }
    }, 1000);
  };

  const onDelete = (index: number) => {
    showConfirmDialog({
      title: '提示',
      message: '确定删除吗？',
    })
      .then(() => {
        orderList.forEach((item, i) => {
          if (item.index === index) {
            orderList.splice(i, 1);
          }
        });
      })
      .catch(() => {
        console.log('取消删除');
      });
  };

  // position 为关闭时点击的位置
  const beforeClose = ({ position }: { position: string }): void | boolean => {
    switch (position) {
      case 'left':
      case 'cell':
      case 'outside':
        return true;
      case 'right':
      // showConfirmDialog({ title: '确定删除吗？' }).then((res) => {
      //   console.log('res', res);
      // });
    }
  };
  const hasBack = inject('hasBack', true);
</script>

<template>
  <div class="list">
    <div class="title">
      <TitleBar title="list" :hasBack="hasBack" />
      <van-cell class="order-title">
        <template #title>
          <div class="order-item">
            <span> 序号 </span>
            <span> 订单编号</span>
            <span> 金额 </span>
          </div>
        </template>
      </van-cell>
    </div>
    <div class="content">
      <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-swipe-cell :before-close="beforeClose" v-for="{ index, orderNo, amount } in orderList" :key="index">
          <van-cell>
            <template #title>
              <div class="order-item">
                <span> {{ index }} </span>
                <span> {{ orderNo }}</span>
                <span> {{ amount }} </span>
              </div>
            </template>
          </van-cell>
          <template #right>
            <van-button square type="danger" text="删除" @click="onDelete(index)" />
          </template>
        </van-swipe-cell>
      </van-list>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .list {
    display: flex;
    flex-direction: column;
    height: 100%;
    .order-item {
      display: flex;
      justify-content: space-between;
    }
    .content {
      flex: 1;
      overflow: auto;
    }
  }
</style>
