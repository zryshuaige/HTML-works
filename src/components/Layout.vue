<template>
  <el-container class="layout-container-demo">
    <Sidebar />
    <el-container>
      <Header />
      <MainContent />
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
import MainContent from './MainContent.vue'
</script>

<style scoped>
.layout-container-demo {
  height: 100vh; /* 使整个容器充满视窗 */
  display: flex;
}

.layout-container-demo .el-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.layout-container-demo .el-header {
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
  flex-shrink: 0; /* 防止header被压缩 */
  height: 120px;
}

.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
  flex-shrink: 0; /* 防止aside被压缩 */
}

.layout-container-demo .el-main {
  padding: 0;
  overflow: auto; /* 确保内容溢出时可滚动 */
  flex-grow: 1; /* 使main区域扩展以填满剩余空间 */
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
