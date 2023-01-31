<template>
    <div>
      <div class="main">特来电</div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="首页" name="home">
         <a href="http://localhost:8080/test1" target="_blank">BI及报表中心</a>
      </el-tab-pane>
        <el-tab-pane label="功能地图" name="map">功能地图</el-tab-pane>
      </el-tabs>
    </div>
  </template>
  
  <script>
  export default {
    name: "Layout",
    data() {
      return {
        activeName: "home",
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
    },
    created() {},
    computed: {},
  };
  </script>
  <style scoped>
  .main {
    width: 100%;
    height: 60px;
    background-color: #00a7cb;
    font-size: 25px;
    font-style: italic;
    display: flex;
    align-items: center;
    color: white;
    padding-left: 20px;
    font-weight: 700;
  }
  </style>
  