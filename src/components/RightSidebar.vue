<template>
  <div class="right-sidebar">
    <!-- 你的侧栏内容 -->
    <div class="profile">
      <img src="/avatar.jpg" alt="Avatar" class="avatar">
      <p>状态：在线</p>
    </div>



    <div>
      <van-tag type="primary">标签</van-tag>
      <van-tag round type="primary">标签</van-tag>
    </div>

  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    //name:'RightSidebar'
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
.right-sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 10px;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
