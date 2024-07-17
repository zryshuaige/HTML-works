<template>
  <div>
    <div>
      <h2>Tab 1 Content</h2>
    </div>
    <div class="video-container" v-html="bilibiliEmbedCode"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const bilibiliEmbedCode = ref(`
  <iframe 
    src="//player.bilibili.com/player.html?bvid=BV1J6421Z7gn&high_quality=1&autoplay=0" 
    scrolling="no" 
    frameborder="0" 
    allowfullscreen="true">
  </iframe>
`);
</script>

<style scoped>
.video-container {
  width: 100%;
  max-width: 1800px; /* 最大宽度，可以根据需要调整 */
  margin: 0 auto; /* 居中对齐 */
  position: relative;
  padding-bottom: 56.25%; /* 16:9 比例 */
  height: 0;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
