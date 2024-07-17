<template>
  <div>
    <h2>Tab 2 Content</h2>
    <van-icon name="chat-o" />
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-button type="warning">警告按钮</van-button>

    <!-- 添加更多内容 -->
  </div>

  <div>
    <van-barrage v-model="list">
      <div class="video" style="width: 100%; height: 150px"></div>
    </van-barrage>
    <van-space style="margin-top: 10px">
      <van-button @click="add" type="primary" size="small">弹幕</van-button>
    </van-space>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const defaultList = [
      { id: 100, text: '轻量' },
      { id: 101, text: '可定制的' },
      { id: 102, text: '移动端' },
      { id: 103, text: 'Vue' },
      { id: 104, text: '组件库' },
      { id: 105, text: 'VantUI' },
      { id: 106, text: '666' },
    ];

    const list = ref([...defaultList]);
    const add = () => {
      list.value.push({ id: Math.random(), text: 'Barrage' });
    };

    return { list, add };
  },
};

</script>

<style scoped>
/* 你的样式代码 */
</style>
