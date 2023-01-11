<script lang="ts" setup>
  import { defineComponent, reactive } from 'vue';
  import { validator } from '@/utils/verify';
  import EditInfoLayout from '@/component/editInfoLayout/Index.vue';

  defineComponent({ name: 'Auth' });

  const formData = reactive({
    userName: '',
    idNo: '',
  });

  const ruleList = reactive({
    userName: [{ validator, message: '', c: 'name' }],
    idCard: [{ validator, message: '', c: 'idNo' }],
  });
  const onAuth = () => {
    console.log('认证数据：', formData);
  };
</script>

<template>
  <EditInfoLayout title="实名认证" :has-save-btn="false">
    <van-form @submit="onAuth">
      <van-cell-group inset>
        <van-field v-model="formData.userName" :rules="ruleList.userName" name="name" label="姓名" placeholder="姓名" />
        <van-field
          v-model="formData.idNo"
          :rules="ruleList.idCard"
          name="idNo"
          type="number"
          label="身份证号"
          placeholder="身份证号"
          maxlength="18"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </EditInfoLayout>
</template>

<style lang="scss" scoped></style>
