<script lang="ts" setup>
import { onRegister, formData, ruleList } from "@/views/register/register";

</script>

<template>
  <van-form @submit="onRegister"
            @input="formData.userNo = formData.userEmail">
    <van-cell-group inset>
      <van-field
        v-model="formData.userEmail"
        name="userEmail"
        label="userEmail"
        placeholder="email"
        :rules="ruleList.userEmail"
      />
      <van-field
        v-model="formData.userPwd"
        name="userPwd"
        label="password"
        placeholder="password"
        :rules="ruleList.userPwd"
      />
      <van-field
        v-model="formData.confirmPwd"
        type="password"
        name="confirmPwd"
        label="confirm password"
        placeholder="confirm password"
        :rules="ruleList.confirmPwd"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

</template>

<style lang="scss" scoped>

</style>
