<script lang="ts" setup>
  import { computed, defineComponent, reactive, ref } from 'vue';
  import TitleBar from '@/component/TitleBar.vue';
  import type { CheckboxGroupInstance, CheckboxInstance } from 'vant';
  import { getImageWishList } from '@/api/user';

  defineComponent({ name: 'MySelect' });

  type ImageWishList = {
    id: string;
    name: string;
    author: string;
    price: string;
    desc: string;
    imgUrl: string;
    size: string;
  };

  const checked = ref<string[]>([]);
  const allChecked = ref(false);
  const checkboxGroupRef = ref<CheckboxGroupInstance>();
  const checkboxRefs = ref<any[]>([]);
  const imageList = reactive<ImageWishList[]>([]);
  const btnDisabled = computed(() => checked.value.length === 0);
  const totalPrice = computed(() =>
    imageList
      .reduce((total, item) => {
        if (checked.value.includes(item.id)) {
          return total + Number(item.price);
        }
        return total;
      }, 0)
      .toFixed(2),
  );
  // onBeforeUpdate(() => {
  //   checkboxRefs.value = [];
  // });
  const toggle = (index: number) => {
    (checkboxRefs.value[index] as CheckboxInstance).toggle();
    allChecked.value = imageList.length === checked.value.length;
  };
  const toggleAll = () => {
    checkboxGroupRef.value?.toggleAll(allChecked.value);
  };
  const fetchData = async () => {
    const response = await getImageWishList();
    console.log('fetch 响应的结果：', response);
    imageList.push(...response.data.list);
  };
  fetchData();
  const onSubmit = () => console.log('选中的值', checked.value);
</script>

<template>
  <div style="display: flex; flex-flow: column; height: 100%">
    <van-sticky>
      <TitleBar title="选择图片" style="background-color: #fff" />
    </van-sticky>

    <van-checkbox
      v-model="allChecked"
      @click="toggleAll"
      shape="square"
      style="font-size: 16px; justify-content: flex-end; padding-right: var(--van-cell-horizontal-padding)"
      >全选
    </van-checkbox>
    <div style="flex: 1; overflow: auto">
      <van-checkbox-group v-model="checked" ref="checkboxGroupRef">
        <van-cell-group inset>
          <van-cell v-for="(item, index) in imageList" clickable :key="item.id" @click="toggle(index)">
            <template #title>
              <div class="card">
                <div class="image"><img :src="item.imgUrl" :alt="item.name" /></div>
                <div class="info">
                  <div class="price">{{ item.price }}</div>
                  <div class="author">{{ item.author }}</div>
                  <div class="desc">{{ item.desc }}</div>
                  <div class="size">{{ item.size }}</div>
                </div>
              </div>
            </template>
            <template #right-icon>
              <van-checkbox :name="item.id" :ref="(el) => (checkboxRefs[index] = el)" @click.stop />
            </template>
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
    </div>

    <div style="padding: 20px; display: flex; align-items: center; justify-content: space-between">
      <span>总价{{ totalPrice }}</span>
      <van-button @click="onSubmit" :disabled="btnDisabled" type="primary" style="">购买</van-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    display: flex;
    gap: 12px;
    .image {
      width: 100px;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price {
        font-size: 16px;
        font-weight: bold;
      }
      .author {
        font-size: 16px;
        color: #333;
      }
      .desc {
        font-size: 14px;
        color: #999;
      }
      .size {
        font-size: 14px;
        color: #999;
      }
    }
  }
</style>
