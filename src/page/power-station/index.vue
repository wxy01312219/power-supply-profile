<template>
  <div>
    <!-- 电站分析 -->
    <el-aside>
      <SideMenu :itemList='itemList'></SideMenu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </div>
</template>

<script>
import SideMenu from '@/components/sidemenu/SideMenu';
export default {
  components: {
    SideMenu
  },
  data(){
    return{
      itemList: [
                {
                    path: 'power',
                    title: '电站监控',
                    nextItems: [
                    { index: 'power-platform', title: '监控平台' },
                    { index: 'power-situation', title: '电站情况一览' },
                    { index: 'power-monitoring', title: '电站实时监控' }
                    ]
                },
                {
                    path: 'power',
                    title: '电站分析',
                    nextItems: [
                    { index: 'power-historical-data', title: '电站历史数据' },
                    { index: 'power-data-analysis', title: '电站数据分析' },
                    ]
                }
            ]
    }
  },
}
</script>