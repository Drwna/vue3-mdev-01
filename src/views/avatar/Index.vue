<script lang="ts" setup>
import { defineComponent, reactive, ref } from "vue";
  import VuePictureCropper, { cropper } from 'vue-picture-cropper';

  defineComponent({
    name: 'Avatar',
  });

  const isShowModal = ref<boolean>(false);
  const uploadInput = ref<HTMLInputElement | null>(null);
  const pic = ref<string>('');
  const result = reactive({
    dataURL: '',
    blobURL: '',
  });

  function selectFile(e: Event) {
    // Reset last selection and results
    pic.value = '';
    result.dataURL = '';
    result.blobURL = '';

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
  }
</script>

<template>
  <div> 头像</div>

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
      aspectRatio: 16 / 9,
    }"
    @ready="ready"
  />
</template>

<style lang="scss" scoped></style>
