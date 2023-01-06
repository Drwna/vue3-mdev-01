<script lang="ts" setup>
  import { computed, defineComponent, ref, watch } from 'vue';
  import { getIdentifyCode } from '@/api/user';
  import { blurBg } from '@/utils';
  import { showFailToast } from 'vant/es';

  defineComponent({
    name: 'verify',
  });

  const props = defineProps({
    phone: {
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

  const setWord = async () => {
    const response = await getIdentifyCode({ mobilePhoneNo: props.phone });
    console.log('getIdentifyCode 响应结果：', response);
    if (response.successTag) {
      blurBg(div.value!);
      idiomString.value = response.rtnObj1;
    } else {
      showFailToast(response.message);
    }
  };
  const onClick = (e: Event) => {
    const target = (e?.target as HTMLElement).dataset.word;
    if (!target) return;
    const index = idiomArray.value.indexOf(target);
    if (index >= 0) {
      idiomArray.value.splice(index, 1);
      return;
    }
    idiomArray.value.push(target);
    if (idiomArray.value.length >= idiomString.value.length) {
      emit('finished', idiom.value);
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

  const onClickOverlay = (e: Event) => {
    if (e.target === e.currentTarget) {
      show.value = false;
    }
  };

</script>

<template>
  <div class="popup" v-if="show" @click="onClickOverlay">
    <div class="box">
      <div class="select-word">
        <div>成语：{{ idiom }}</div>
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

    .select-word {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: right;
      padding: 10px 20px;
      font-size: 20px;

      .refresh {
        border: none;
        background: #00ffff;
        cursor: pointer;
        font-size: 16px;
        color: #000;
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
  }
</style>
