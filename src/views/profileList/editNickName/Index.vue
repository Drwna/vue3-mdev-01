<script lang="ts" setup>
  import { defineComponent } from 'vue';
  import { editUserProfile } from '@/api/user';
  import { formData, ruleList } from '@/views/profileList/editNickName/editNickName';
  import EditInfoLayout from '@/component/editInfoLayout/Index.vue';
  import { useUserStore } from '@/stores/modules/user';

  defineComponent({ name: 'EditNickName' });

  const storeUser = useUserStore();
  console.log(formData);
  const onSave = async () => {
    console.log('保存', formData);
    const response = await editUserProfile(formData);
    console.log('updateUserInfo 响应结果：', response);
    if (response.successTag) {
      storeUser.nickName = formData.nickName;
    }
  };
</script>

<template>
  <EditInfoLayout title="修改昵称" @save="onSave">
    <van-form @submit="onSave">
      <van-field class="nickName" v-model="formData.nickName" :rules="ruleList.nickName" clearable />
    </van-form>
  </EditInfoLayout>
</template>

<style lang="scss" scoped>
  .nickName {
    width: 100%;
    font-size: 24px;
    border: none;
    border-bottom: 1px solid #0fdc0f;
  }
</style>
