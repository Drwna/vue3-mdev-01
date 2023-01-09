<script lang="ts" setup>
  import { defineComponent, ref } from 'vue';
  import Icon from '@/component/Icon.vue';
  import { showImagePreview } from 'vant';
  import 'vant/es/image-preview/style';
  import { cropper } from 'vue-picture-cropper';

  defineComponent({ name: 'ProfileList' });

  const previewAvatar = (e: Event) => {
    const imgSrc = (e.target as HTMLImageElement).src;
    if (!imgSrc) return;
    showImagePreview({ images: [imgSrc], showIndex: false, closeable: true });
  };

  const isShowModal = ref(false);
  const picture = ref(''); // 上传的图片
  const result = ref(''); // 裁剪后的图片
  const uploadedPic = ref(''); // 上传成功的图片

  const editAvatar = () => {
    console.log('edit avatar');
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/jpg, image/jpeg, image/png, image/gif';
    input.click();
    input.onchange = (e: Event) => {
      picture.value = '';
      result.value = '';
      uploadedPic.value = '';
      const { files } = e.target as HTMLInputElement;
      if (!files || !files.length) return;
      const file = files[0];
      console.log(files, file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        picture.value = String(reader.result);
        isShowModal.value = true;
      };
    };
  };

  const getResult = () => {
    if (!cropper) return;
    result.value = cropper.getDataURL();
  };
</script>

<template>
  <ul class="list">
    <li class="list-item" @click="editAvatar">
      <div class="content">
        <div class="title">头像</div>
        <div class="value">
          <img @click.stop="previewAvatar" class="avatar" src="@/assets/images/artmart/avatar.png" alt="avatar" />
          <!--          <van-image @click.stop="previewAvatar" class="avatar" round src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />-->
        </div>
      </div>
      <Icon name="artmart-arrow" />
    </li>
    <li class="list-item">
      <div class="content">
        <div class="title">名字</div>
        <div class="value"> name</div>
      </div>
      <Icon name="artmart-arrow" />
    </li>
  </ul>
  <img :src="picture" alt="" />
  <img :src="result" alt="" />
  <div v-if="isShowModal" class="modal-wrapper">

  </div>
</template>

<style lang="scss" scoped>
  .list {
    display: flex;
    flex-direction: column;
    &-item {
      display: flex;
      align-items: center;
      padding: 10px 0;
      margin: 0 10px;
      gap: 8px;
      border-bottom: 1px solid #e5e5e5;
      position: relative;
      input[type='file'] {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
      }
      > .content {
        flex-grow: 1;
        display: flex;
        justify-content: space-between;
        .title {
          font-size: 18px;
          color: #171717;
          display: flex;
          align-items: center;
        }
        .value {
          font-size: 18px;
          display: flex;
          align-items: center;
          .avatar {
            width: 48px;
            height: 48px;
          }
        }
      }
      > .icon {
        width: 18px;
        color: #b2b2b2;
      }
    }
  }
</style>
