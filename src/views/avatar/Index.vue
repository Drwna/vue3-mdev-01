<script lang="ts" setup>
  import { defineComponent, reactive, ref } from 'vue';
  import VuePictureCropper, { cropper } from 'vue-picture-cropper';
  import { getCurrUserInfo, uploadImg } from '@/api/user';
  import { createHDCanvas } from '@/utils';

  defineComponent({
    name: 'Avatar',
  });

  const isShowModal = ref<boolean>(false);
  const uploadInput = ref<HTMLInputElement | null>(null);
  const pic = ref<string>('');
  const uploadedImg = ref<string>('');
  const result = reactive<{ base64: string; blobURL: string; blob: Blob | null }>({
    base64: '',
    blobURL: '',
    blob: null,
  });

  const selectFile = (e: Event) => {
    // Reset last selection and results
    pic.value = '';
    result.base64 = '';
    result.blobURL = '';
    result.blob = null;
    uploadedImg.value = '';

    // Get selected files
    const { files } = e.target as HTMLInputElement;
    if (!files || !files.length) return;

    // Convert to dataURL and pass to the cropper component
    const file = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // Update the picture source of the `img` prop
      pic.value = String(reader.result);

      // Show the modal
      isShowModal.value = true;

      // Clear selected files of input element
      if (!uploadInput.value) return;
      uploadInput.value.value = '';
    };
  };

  const getResult = async () => {
    if (!cropper) return;
    const base64 = cropper.getDataURL();
    const blob: Blob | null = await cropper.getBlob();
    if (!blob) return;

    const file = await cropper!.getFile({
      fileName: 'userAvatar',
    });

    console.log({ base64, blob, file });
    result.base64 = base64;
    result.blobURL = URL.createObjectURL(blob);
    // result.blob = blob;
    isShowModal.value = false;

    const img = new Image();
    img.src = result.blobURL;
    img.width = 60;
    img.height = 60;
    img.onload = () => {
      const canvas = createHDCanvas(60, 60);
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(img, 0, 0, 60, 60);
      canvas.toBlob((blob) => (result.blob = blob));
    };
  };
  const ready = () => {
    console.log('Cropper is ready.');
  };
  const onUpload = async () => {
    const formData = new FormData();
    formData.append('file', result.blob as Blob);
    console.log('上传的formData', formData.get('file'));
    const response = await uploadImg(formData);
    console.log('uploadImg 响应结果：', response);
    uploadedImg.value = response.rtnObj1;
  };

  const userInfo = reactive<Record<string, string>>({});
  const getInfo = async () => {
    const response = await getCurrUserInfo();
    console.log('getCurrUserInfo 响应结果：', response);
    Object.assign(userInfo, response);
  };
</script>

<template>
  <div>
    <h1>头像上传</h1>
    <hr />

    <van-button @click="getInfo">获取用户信息</van-button>

    <van-button type="primary" class="select-picture">
      {{ isShowModal ? '重新选择' : '选择图片' }}
      <input @change="selectFile" ref="uploadInput" type="file" accept="image/jpg, image/jpeg, image/png, image/gif" />
    </van-button>

    <div class="imgs" v-if="result.base64">
      <div class="preview">
        <img :src="result.base64" alt="dataURL" />
      </div>
    </div>

    <div class="modal-wrap" v-if="isShowModal">
      <div class="modal-content">
        <VuePictureCropper
          :boxStyle="{
            width: '100%',
            height: '100%',
            backgroundColor: '#f8f8f8',
            margin: 'auto',
          }"
          :img="pic"
          :options="{
            viewMode: 1,
            dragMode: 'crop',
            aspectRatio: 1,
            minCropBoxWidth: 100,
            minCropBoxHeight: 100,
          }"
          @ready="ready"
        />
      </div>
      <div class="btns">
        <van-button @click="isShowModal = false" class="btn" type="primary">取消</van-button>
        <van-button @click="getResult" class="btn" type="primary">裁剪</van-button>
      </div>
    </div>

    <van-button v-if="!!result.base64" @click="onUpload" type="primary">上传</van-button>
    <div class="result" v-if="!!uploadedImg">
      <p class="text">上传结果：</p>
      <div class="preview">
        <img :src="uploadedImg" alt="上传的图片" />
      </div>
      <p>{{ uploadedImg }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  h1 {
    padding-top: 20px;
    text-align: center;
  }

  .imgs {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    .preview {
      //width: 200px;
      //height: 200px;
      margin: 0 20px;
      img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
      }
    }
  }

  .modal-wrap {
    width: 100%;
    height: 100%;
    .modal-content {
      width: 100%;
      height: 100%;
    }
    .btns {
      margin-top: 20px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
  }

  .select-picture {
    // 美化按钮
    font-size: 16px;
    padding: 10px 20px;
    position: relative;
    margin-bottom: 20px;
    input[type='file'] {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }
  }

  .result {
    border: 1px solid red;
    padding: 14px;
    p {
      font-size: 20px;
      // 换行
      word-break: break-all;
    }
    .preview {
      font-size: 14px;
      img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
</style>
