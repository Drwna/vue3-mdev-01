<script lang="ts" setup>
  import { defineComponent, ref } from 'vue';
  import Icon from '@/component/Icon.vue';
  import { showImagePreview } from 'vant';
  import 'vant/es/image-preview/style';
  import VuePictureCropper, { cropper } from 'vue-picture-cropper';
  import { useUserStore } from '@/stores/modules/user';
  import { uploadImg } from '@/api/user';
  import { storeToRefs } from 'pinia';
  import { useRouter } from 'vue-router';

  defineComponent({ name: 'ProfileList' });

  const router = useRouter();
  const storeUser = useUserStore();
  const { avatarUrl } = storeToRefs(storeUser);
  // const avatar = userStore.avatar;
  const isShowModal = ref(false);
  const inputPic = ref(''); // 上传的图片
  const resultBlob = ref<Blob | null>(null); // 裁剪后的blob图片

  const previewAvatar = (e: Event) => {
    const imgSrc = (e.target as HTMLImageElement).src;
    if (!imgSrc) return;
    showImagePreview({ images: [imgSrc], showIndex: false });
  };
  const editAvatar = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/jpg, image/jpeg, image/png, image/gif';
    input.click();
    input.onchange = (e: Event) => {
      inputPic.value = '';
      const { files } = e.target as HTMLInputElement;
      if (!files || !files.length) return;
      const file = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        inputPic.value = String(reader.result);
        isShowModal.value = true;
      };
    };
  };
  const reset = () => cropper?.reset();
  const upload = async () => {
    const formData = new FormData();
    formData.append('file', resultBlob.value as Blob);
    const response = await uploadImg(formData);
    console.log('uploaded 响应结果', response);
    storeUser.avatarUrl = response.rtnObj1;
  };
  const getResult = async () => {
    if (!cropper) return;
    resultBlob.value = await cropper.getBlob({
      width: 180,
      height: 180,
    });
    isShowModal.value = false;
    await upload();
  };
  const goAuth = () => router.push('/profileList/auth');
</script>

<template>
  <h1>
    个人信息
    <Icon name="leftArrow" @click="router.back()" />
  </h1>
  <div class="avatar">
    <div class="avatar-img">
      <img @click.stop="previewAvatar" :src="avatarUrl" alt="avatar" />
      <div @click="editAvatar" class="avatar-edit">编辑</div>
    </div>
  </div>
  <ul class="list">
    <li class="list-item" @click="router.push('profileList/editNickName')">
      <div class="content">
        <div class="title">昵称</div>
        <div class="value">{{ storeUser.nickName }}</div>
      </div>
      <Icon name="artmart-arrow" />
    </li>
    <li class="list-item" @click="router.push('profileList/editEMail')">
      <div class="content">
        <div class="title">邮箱</div>
        <div class="value">{{ storeUser.userEMail }}</div>
      </div>
      <Icon name="artmart-arrow" />
    </li>
    <li class="list-item" @click="goAuth">
      <div class="content">
        <div class="title">实名认证</div>
        <div class="value">未认证</div>
      </div>
      <Icon name="artmart-arrow" />
    </li>
    <li class="list-item" @click="router.push('resetPassword')">
      <div class="content">
        <div class="title">重置密码</div>
        <div class="value"></div>
      </div>
      <Icon name="artmart-arrow" />
    </li>
    <li class="list-item">
      <div class="content">
        <div class="title">注销账号</div>
        <div class="value"></div>
      </div>
      <Icon name="artmart-arrow" />
    </li>
  </ul>
  <div v-if="isShowModal" class="modal">
    <div class="modal-content">
      <VuePictureCropper
        :img="inputPic"
        :boxStyle="{
          width: '100%',
          height: '100%',
          backgroundColor: '#f8f8f8',
          margin: 'auto',
        }"
        :options="{
          viewMode: 1,
          dragMode: 'crop',
          aspectRatio: 1,
          minCropBoxWidth: 100,
          minCropBoxHeight: 100,
        }"
      />
    </div>
    <div class="modal-feature">
      <van-button type="primary" @click="isShowModal = false">取消</van-button>
      <van-button type="primary" @click="reset">重置</van-button>
      <van-button type="primary" @click="getResult">确认</van-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  h1 {
    padding-top: 20px;
    text-align: center;
    font-size: 24px;
    .icon {
      width: 16px;
      height: 16px;
      position: absolute;
      left: 10px;
    }
  }

  .avatar {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #000;
    margin-bottom: 20px;
    &-img {
      padding-top: 16px;
      text-align: center;
      font-size: 0;
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
    }
    &-edit {
      font-size: 14px;
      margin-top: 4px;
    }
  }

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

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 1);
    z-index: 999;
    &-content {
      width: 100%;
      max-height: calc(100% - 60px);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
    }
    &-feature {
      width: 100%;
      height: 50px;
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: space-evenly;
    }
  }
</style>
