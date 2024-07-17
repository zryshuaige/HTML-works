<!-- Advertisement.vue -->
<template>
  <div v-if="!closed" class="advertisement">
    <button @click="closeAd" class="close-button">×</button>
    <p>这里是广告/公告内容，可以根据需要进行编辑。</p>
    <p>网站建设中---</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      closed: false
    };
  },
  methods: {
    closeAd() {
      this.closed = true;
    }
  }
};
</script>

<style scoped>
.advertisement {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #f0f0f0;
  padding: 10px;
  z-index: 999; /* 确保广告在其他内容上面 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
}

.close-button {
  position: absolute;
  top: 5px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #666;
}
</style>
