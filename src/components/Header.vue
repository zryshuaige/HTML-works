<template>

  <div class="yiyan" :style="{ color: '#2bded' }">
    {{ hitokoto }}
  </div>
  <el-header style="text-align: right; font-size: 12px">
    <div class="toolbar">
      <el-dropdown>
        <el-icon style="margin-right: 8px; margin-top: 1px">
          <setting />
        </el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>View</el-dropdown-item>
            <el-dropdown-item>Add</el-dropdown-item>
            <el-dropdown-item>Delete</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span>Tom</span>
    </div>
  </el-header>
</template>

<script lang="ts" setup>
import { Setting } from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue';
import { getHitokoto } from '@/api/index';

const hitokoto = ref('');

const fetchHitokoto = async () => {
  try {
    const data = await getHitokoto();
    hitokoto.value = data.hitokoto;
  } catch (error) {
    console.error("Failed to fetch hitokoto:", error);
  }
};

onMounted(() => {
  fetchHitokoto();
});
</script>

<style scoped>
.toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: left;
  height: 100%;
  right: 20px;
}

.yiyan {
  text-align: center;
  /* 居中显示 */
  padding: 20px;
  background-color: #2bded2;
}
</style>
