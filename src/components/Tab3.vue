<template>
  <div id="container" style="width: 100%; height: 100vh;"></div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  name: 'MapComponent',
  setup() {
    onMounted(() => {
      // 创建一个加载高德地图API的函数
      const loadAMapScript = () => {
        return new Promise((resolve, reject) => {
          if (typeof AMap !== 'undefined') {
            resolve();
            return;
          }
          const script = document.createElement('script');
          script.charset = 'utf-8';
          script.src = 'https://webapi.amap.com/maps?v=2.0&key=b5e83a12a0822a58ca0e651dc933743b&callback=onApiLoaded';
          script.onerror = reject;
          document.head.appendChild(script);

          window.onApiLoaded = () => {
            resolve();
          };
        });
      };

      // 加载高德地图API并初始化地图
      loadAMapScript().then(() => {
        const map = new AMap.Map('container', {
          center: [120.3949, 30.3199],
          zoom: 6,
          zooms:[17,20],
        });
        // 添加工具栏
        map.plugin(['AMap.ToolBar'], () => {
          map.addControl(new AMap.ToolBar());
        });

        // 声明点击事件的回调函数
        function onClick(e) {
          console.log(e);
        }

        // 给地图实例绑定点击事件 onClick
        map.on('click', onClick);
      }).catch((error) => {
        console.error('高德地图加载失败:', error);
      });
    });
  },
};



</script>

<style scoped>
#container {
  width: 100%;
  height: 100vh;
}
</style>
 
