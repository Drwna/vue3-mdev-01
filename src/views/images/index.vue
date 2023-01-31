<script lang="ts" setup>
  import { computed, defineComponent, getCurrentInstance, inject, reactive, ref, watch } from 'vue';
  import TitleBar from '@/component/TitleBar.vue';
  import { getImageList } from '@/api/user';
  import Icon from '@/component/Icon.vue';
  import { sortArr } from '@/utils';

  import a1 from '@/assets/images/artwork/1101s.png';
  import a2 from '@/assets/images/artwork/1102s.png';
  import a3 from '@/assets/images/artwork/1103s.png';
  import a4 from '@/assets/images/artwork/3102s.png';
  import a5 from '@/assets/images/artwork/3103s.jpg';
  import a6 from '@/assets/images/artwork/3126s.png';

  defineComponent({ name: 'Images' });

  type ImageList = {
    id: string;
    name: string;
    author: string;
    price: string;
    imgUrl: string;
    isCollect: boolean;
  };
  const imageList = reactive<ImageList[]>([]);
  const loading = ref(false);
  const finished = ref(false);
  const value2 = ref('default');
  const option2 = [
    { text: '默认排序', value: 'default' },
    { text: '价格从低到高', value: 'asc' },
    { text: '价格从高到低', value: 'desc' },
  ];
  const formData = reactive({ page: 0 });
  const artworkList = [a1, a2, a3, a4, a5, a6];
  const onLoad = async () => {
    console.log('fetch Data');
    formData.page += 1;
    const response = await getImageList(formData);
    console.log('fetch 响应的结果：', response);
    response.data.list.map((item: ImageList) => {
      item.imgUrl = artworkList[Math.floor(Math.random() * 6)];
    });
    imageList.push(...response.data.list);

    if (imageList.length >= 60) {
      finished.value = true;
      console.log('finished', imageList.length);
    }

    loading.value = false;
  };

  const that = getCurrentInstance()?.appContext.config.globalProperties;
  // const redrawVueMasonry = inject('redrawVueMasonry') as Function;
  console.log(imageList);
  watch(value2, (val) => {
    console.log(imageList);
    if (val === 'asc' || val === 'desc') {
      console.log('新', val);
      sortArr(imageList, 'price', val);
      // 强制渲染视图
      imageList.push({ id: 'temp' + Math.random(), name: '', author: '', price: '', imgUrl: '', isCollect: false });
      // that?.$redrawVueMasonry();
      // redrawVueMasonry();
    }
  });
</script>

<template>
  <van-sticky>
    <TitleBar title="图片展示" style="background-color: #fff; padding-top: 14px" />
  </van-sticky>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>

    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div v-masonry transition-duration="0.25s" item-selector=".item" class="wrapper">
        <div
          :data-id="id"
          v-masonry-tile
          class="item"
          v-for="{ id, name, imgUrl, isCollect, price, author } in imageList"
          :key="id"
          :style="{ padding: id.includes('temp') ? '0' : 'auto' }"
        >
          <div v-if="!id.includes('temp')">
            <img class="image" :src="imgUrl" :alt="name" />
            <div class="row">
              <span class="status">{{ price }}</span>
              <Icon v-if="isCollect" name="collect" />
              <Icon class="collected" v-else name="artmart-like" />
            </div>
            <div class="author">
              <p>{{ author }}</p>
            </div>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<style lang="scss" scoped>
  .title {
    padding: 0 20px;
    text-align: right;
  }

  .wrapper {
    width: 100%;
    //display: flex;
    //flex-wrap: wrap;
    position: relative;
    .item {
      position: absolute;
      width: 50%;
      padding: 14px;
      .image {
        width: 100%;
        object-fit: contain;
      }
      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 0;
        .status {
          color: #999;
          font-size: 16px;
        }
        .icon {
          width: 20px;
          height: 20px;
          color: #999;
          &.collected {
            color: #ff4d4f;
          }
        }
      }
      .author {
        p {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
</style>
