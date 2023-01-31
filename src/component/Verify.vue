<script lang="ts" setup>
  import { computed, defineComponent, ref, watch } from 'vue';
  import { getIdentifyCode } from '@/api/user';
  import { blurBg } from '@/utils';
  import { showFailToast } from 'vant/es';
  import Icon from '@/component/Icon.vue';

  defineComponent({ name: 'verify' });

  const props = defineProps({
    phoneOrEmail: {
      type: String,
      required: true,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  });
  const emit = defineEmits(['finished', 'update:modelValue']);
  const show = computed({
    set(value) {
      emit('update:modelValue', value);
    },
    get() {
      return props.modelValue;
    },
  });
  const div = ref<HTMLDivElement>();
  const idiomString = ref('');
  const idiomArray = ref([] as string[]);
  const idiom = computed(() => idiomArray.value.map((w) => w.slice(0, 1)).join(''));

  type ObjParam = {
    [key in 'userEMail' | 'mobilePhoneNo']: string;
  };
  const setWord = async () => {
    // {"mobilePhoneNo":"13816332625","userEMail":"andysh@aliyun.com"}
    const key = props.phoneOrEmail.includes('@') ? 'userEMail' : 'mobilePhoneNo';
    const objParam = { [key]: props.phoneOrEmail } as ObjParam;
    console.log('getIdentifyCode 请求参数： ====>', objParam);
    const response = await getIdentifyCode(objParam);

    console.log('getIdentifyCode 响应结果：', response);
    if (response.successTag) {
      blurBg(div.value!);
      idiomString.value = response.rtnObj1;
    } else {
      showFailToast(response.message);
    }
  };
  const refresh = () => {
    setWord();
    idiomArray.value = [];
  };
  watch(show, (value) => {
    if (value) {
      refresh();
    }
  });
  const close = () => (show.value = false);
  const onClick = (e: Event) => {
    const target = (e?.target as HTMLElement).dataset.word;
    if (!target) return;
    const index = idiomArray.value.indexOf(target);
    if (index >= 0) {
      idiomArray.value.splice(index, 1);
      return;
    }
    idiomArray.value.push(target);
  };
  const onClickOverlay = (e: Event) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };
  const onConfirm = () => {
    if (idiomArray.value.length >= idiomString.value.length) {
      emit('finished', idiom.value);
    } else {
      showFailToast('请排列好文字!');
    }
  };
</script>

<template>
  <div class="popup" v-if="show" @click="onClickOverlay">
    <div class="box">
      <div class="close" @click="close">
        <Icon name="close" />
      </div>
      <h3 class="title">请点击文字，排列成正确的顺序</h3>
      <div class="result">
        <div class="idiom">
          {{ idiom }}
        </div>
        <button class="refresh" @click="refresh">刷新</button>
      </div>
      <div class="words" ref="div">
        <div
          @click="onClick"
          v-for="(word, index) in idiomString"
          :key="word + index"
          :data-word="word + index"
          :class="{ selected: idiomArray.includes(word + index) }"
          class="word"
        >
          {{ word }}
        </div>
      </div>
      <div class="confirm">
        <van-button @click="onConfirm" block type="primary">确认</van-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box {
    width: calc(100vw - 2 * var(--van-padding-md));
    background-color: #fff;
    border-radius: 10px;
    padding-top: 20px;

    .close {
      text-align: right;
      padding-right: 16px;
      font-size: 14px;
    }

    .title {
      text-align: center;
      font-size: 16px;
      padding-bottom: 10px;
    }

    .result {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: right;
      padding: 10px 20px;
      font-size: 16px;

      .idiom {
        flex-grow: 1;
        text-align: center;
        color: #990505;
        font-size: 20px;
      }

      .refresh {
        border: none;
        background: var(--van-button-primary-background);
        cursor: pointer;
        font-size: 14px;
        color: #fff;
        padding: 6px;
        border-radius: 4px;
      }
    }

    .words {
      height: 140px;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      position: relative;

      .word {
        font-size: 28px;

        &.selected {
          color: #fff;
          background-color: #999999;
        }
      }
    }

    .confirm {
      padding: 16px;
      display: flex;
      justify-content: center;
    }
  }
</style>
