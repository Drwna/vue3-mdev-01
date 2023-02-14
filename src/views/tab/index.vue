<script lang="ts" setup>
  import { defineComponent, inject, reactive, ref } from 'vue';
  import { getList } from '@/api/user';
  import Icon from '@/component/Icon.vue';
  import TitleBar from '@/component/TitleBar.vue';

  defineComponent({ name: 'TabList' });

  const active = ref('1');
  const currentPage = ref(1);
  const orderList = reactive<{
    list: { index: number; orderNo: string; amount: number }[];
    page: number;
    total: number;
  }>({ list: [], page: 0, total: 0 });
  const onChange = async () => {
    const response = await getList({ page: currentPage.value });
    console.log(`第${currentPage.value}页`);
    Object.assign(orderList, response.data);
    // orderList.data.splice(0, orderList.data.length, ...response.data.list);
  };
  // 初始化
  getList({ page: 1 }).then((res) => {
    console.log('响应的数据：', res.data);
    Object.assign(orderList, res.data);
    console.log('orderList', orderList);
  });
  const onDelete = (index: number) => {
    console.log('delete', index);
    orderList.list.map((item, i) => {
      if (item.index === index) {
        orderList.list.splice(i, 1);
        // onChange();
      }
    });
  };

  const hasBack = inject('hasBack', true);
  const hasTitle = inject('hasTitle', true);
</script>

<template>
  <div>
    <TitleBar v-if="hasTitle" title="tab list" :hasBack="hasBack" />
    <div class="tabs">
      <van-tabs v-model:active="active" swipeable>
        <van-tab title="选项 1" name="1">
          <div class="order-list">
            <div class="list">
              <van-cell class="order" center v-for="{ index, orderNo, amount } in orderList.list" :key="index">
                <template #title>
                  <div class="order-item">
                    <div class="content">
                      <span> {{ index }} </span>
                      <span class="no"> {{ orderNo }}</span>
                      <span> {{ amount }} </span>
                    </div>
                  </div>
                </template>
                <template #right-icon>
                  <Icon name="delete" @click="onDelete(index)" />
                </template>
              </van-cell>
            </div>
            <van-pagination v-model="currentPage" :page-count="orderList.total" @change="onChange" mode="simple" />
          </div>
        </van-tab>
        <van-tab title="选项 2" name="1">内容 2</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .tabs {
    height: 100%;
    > div {
      display: flex;
      flex-direction: column;
      height: 100%;
      :deep(.van-tabs__content) {
        flex: 1;
      }
    }
  }

  .order-list {
    flex: 1;
    .list {
      height: 450px;
      .order {
        :deep(.van-cell__title) {
          display: flex;
        }
        &-item {
          flex-grow: 1;
          .content {
            flex: 1;
            display: flex;
            justify-content: space-between;
            .no {
              width: 200px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
            .amount {
            }
          }
        }
        .icon {
          margin-left: 10px;
          width: 18px;
          height: 18px;
        }
      }
    }
  }
</style>
