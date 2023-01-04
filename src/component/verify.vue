<script lang="ts" setup>
  import { defineComponent, defineEmits, onMounted, ref, watchEffect } from 'vue';

  defineComponent({
    name: 'verify',
  });

  const props = defineProps({
    words: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
  });
  const emit = defineEmits(['refresh', 'success', 'fail', 'update:modelValue']);

  const drawBg = (div: HTMLDivElement) => {
    if (!div) return;
    const width = div.offsetWidth;
    const height = div.offsetHeight;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    // 生成随机的干扰线
    for (let i = 0; i < 10; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * width, Math.random() * height);
      ctx.lineTo(Math.random() * width, Math.random() * height);
      ctx.strokeStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`;
      ctx.stroke();
    }
    // 生成随机的干扰点
    for (let i = 0; i < 800; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * width, Math.random() * height, 1, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`;
      ctx.fill();
    }
    div.style.backgroundImage = `url(${canvas.toDataURL()})`;
  };

  const randomWord = (word: string) =>
    word
      .split('')
      .sort(() => Math.random() - 0.5)
      .join('');

  const div = ref<HTMLDivElement>();
  const wordArray = ref(randomWord(props.words));
  const selectedWords = ref([] as string[]);

  const select = (e: Event) => {
    const target = (e?.target as HTMLElement).dataset.word;
    if (!target) return;
    if (selectedWords.value.length >= 4 || selectedWords.value.includes(target)) return;
    selectedWords.value.push(target);
    if (selectedWords.value.map((w) => w.slice(0, 1)).join('') === props.words) {
      emit('success');
    } else if (selectedWords.value.length >= 4) {
      emit('fail');
    }
  };

  const reset = () => {
    selectedWords.value = [];
    wordArray.value = randomWord(props.words);
  };

  const refresh = () => {
    reset();
    emit('refresh');
  };

  watchEffect(() => {
    wordArray.value = randomWord(props.words);
  });

  onMounted(() => {
    div.value && drawBg(div.value);
  });

  defineExpose({
    refresh,
  });

</script>

<template>
  <div class="box">
    <div class="select-word">
      <div>成语：{{ selectedWords.map((w) => w.slice(0, 1)).join('') }}</div>
      <button class="refresh" @click="refresh">刷新</button>
    </div>
    {{ modelValue }}
    <div class="words" ref="div">
      <div
        v-model="modelValue"
        @click="select"
        v-for="(word, index) in wordArray"
        :key="word + index"
        :data-word="word + index"
        :class="{ selected: selectedWords.includes(word + index) }"
        class="word"
      >
        {{ word }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .box {
    .select-word {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: right;
      padding: 0 20px;
      font-size: 20px;
      .refresh {
        border: none;
        background: #00ffff;
        cursor: pointer;
        font-size: 16px;
        color: #000;
        padding: 6px;
        border-radius: 4px;
        margin-bottom: 10px;
      }
    }
    .words {
      height: 140px;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      position: relative;
      .word.selected {
        color: #fff;
        background-color: #999999;
      }
    }
  }
</style>
