<!-- TabContent.vue -->
<template>
    <div>
      <component :is="currentTabComponent"></component>
    </div>
  </template>
  
  <script>
  import Tab1 from './Tab1.vue';
  import Tab2 from './Tab2.vue';
  import Tab3 from './Tab3.vue';
  
  export default {
    props: {
      currentTab: {
        type: String,
        required: true
      }
    },
    computed: {
      currentTabComponent() {
        return this.currentTab === 'Tab1' ? Tab1 :
               this.currentTab === 'Tab2' ? Tab2 :
               Tab3;
      }
    }
  }
  </script>
  
  <style scoped>
  /* 根据需要添加样式 */
  </style>
  