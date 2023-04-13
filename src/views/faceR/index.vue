<script lang="ts" setup>
  import { defineComponent, onMounted, ref } from 'vue';
  import TitleBar from '@/component/TitleBar.vue';

  defineComponent({ name: 'faceR' });

  const width = 300;
  const height = 300;

  const accessToken = '24.638734e068af79928a24168be63ed323.2592000.1683876277.282335-32301683';
  const group_id_list = 'test_user_001';
  const image_type = 'BASE64';
  const type = 'search'; // 人脸库1：N搜索 文档: https://ai.baidu.com/ai-doc/FACE/Gk37c1uzc
  const url = `https://aip.baidubce.com/rest/2.0/face/v3/${type}?access_token=${accessToken}`;

  const $video = ref<HTMLVideoElement>();
  const $canvas = ref<HTMLCanvasElement>();
  const msg = ref('');
  const result = ref('');

  onMounted(() => {
    console.log('挂载了：', $video.value, $canvas.value, msg.value);
  });

  function openCamera() {
    const constraints = { video: { width: 300, height: 300, facingMode: 'user' } };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        console.log('stream：', stream);
        if (!$video.value) return;
        $video.value.srcObject = stream;
        $video.value.play();
      })
      .catch((error) => {
        console.log(`访问用户媒体设备失败 ${error}`);
      });
  }

  // @ts-ignore
  if (navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia) {
    openCamera();
    msg.value = '正在识别中...';
    let count = 0,
      maxCount = 3;

    const timer = setInterval(() => {
      if (!$video.value || !$canvas.value) return;
      count++;
      if (count > maxCount) {
        msg.value = '识别超时,请稍后重试';
        clearInterval(timer);
        return;
      }
      const ctx = $canvas.value.getContext('2d')!;
      ctx.drawImage($video.value, 0, 0, width, height);
      const image = $canvas.value.toDataURL('image/jpeg', 0.8).slice(22);

      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image, image_type, group_id_list }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.result) {
            clearInterval(timer);
            msg.value = '识别完成';
            const { group_id, user_id, user_info, score } = res.result.user_list[0];
            result.value = `
              <p>用户组：${group_id}</p>
              <p>用户ID：${user_id}</p>
              <p>用户信息：${user_info}</p>
              <p>置信度：${score}</p>
              `;
          }
        })
        .catch((err) => {
          console.log('err：', err);
        });
    }, 1000);
  } else {
    alert('不支持访问用户媒体');
  }
</script>

<template>
  <TitleBar title="人脸识别" />
  <div class="flex-col-center">
    <video ref="$video" :width="width" :height="height" class="video"></video>
    <p class="msg">{{ msg }}</p>
    <canvas ref="$canvas" class="canvas" :width="width" :height="height"></canvas>
    <div class="result" v-html="result"></div>
  </div>
</template>

<style lang="scss" scoped>
  .flex-col-center {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  .video {
    border: 1px solid grey;
    border-radius: 50%;
  }
  .canvas {
    display: none;
  }
  .msg {
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    color: rgba(239, 68, 68, 1);
  }
  .result {
    margin-top: 10px;
    font-size: 16px;
    display: flex;
    flex-flow: column;
    gap: 4px;
  }
</style>
