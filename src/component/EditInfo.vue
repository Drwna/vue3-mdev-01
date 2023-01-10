<script lang="ts" setup>
  import { defineComponent, reactive, ref } from 'vue';
  import Icon from '@/component/Icon.vue';
  import { useRouter } from 'vue-router';
  import { editUserProfile } from '@/api/user';

  defineComponent({ name: 'EditInfo' });
  const emit = defineEmits(['click']);

  const formData = reactive<{ userEMail: string; nickName: string } | { userEMail: string } | { nickName: string }>({ nickName: '' });
  const router = useRouter();
  const onBack = () => router.back();
  const onClick = async () => {
    console.log('保存', formData);
    const response = await editUserProfile(formData);
    console.log('updateUserInfo 响应结果：', response);
    emit('click');
  };
</script>

<template>
  <div class="edit">
    <div class="bar">
      <Icon @click="onBack" class="bar-icon" name="leftArrow" />
      <span>编辑昵称</span>
      <button @click="onClick" class="bar-button" type="button">保存</button>
    </div>
    <div class="content">
      <input type="text" v-model="formData.nickName" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .edit {
    padding: 10px 14px 0 14px;
    .bar {
      text-align: center;
      position: relative;
      font-size: 18px;
      padding: 10px 0;
      &-icon {
        width: 18px;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
      &-button {
        padding: 8px 10px;
        font-size: 18px;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        background-color: #1989fa;
        color: #fff;
        border-radius: 4px;
      }
    }
    .content {
      padding-top: 18px;
      input {
        width: 100%;
        font-size: 24px;
        border: none;
        border-bottom: 1px solid #0fdc0f;
      }
    }
  }
</style>
