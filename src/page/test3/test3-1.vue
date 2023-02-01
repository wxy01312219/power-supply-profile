<template>
<div class="content-box" >
  <div class="container">
    <p>主体页面 3 - 1 </p>
    <div class="test-div">
      <el-tree
        :data="treeData"
        show-checkbox
        node-key="id"
        :props="defaultProps">
      </el-tree>
    </div>
    <dayChargingTab :data="chargingTabList"/>
  </div>
</div>
</template>

<script>
import dayChargingTab from '@/components/charging-tab/day-charging-pile.vue'
export default {
  components:{dayChargingTab},
  data(){
    return{
      treeData: [
        {
          id: 1,
          label: '一级 1',
          children: [
            { 
              id: 4, 
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                }, 
                {
                  id: 10,
                  label: '三级 1-1-2'
                }
              ]
            }
          ]
        }, 
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1'
            }, 
            {
              id: 6,
              label: '二级 2-2'
            }
          ]
        }, 
        {
          id: 3,
          label: '一级 3',
          children: [
            { 
              id: 7, 
              label: '二级 3-1' 
            }, 
            { 
              id: 8, 
              label: '二级 3-2' 
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      chargingTabList:[
        {
         id:1,
         text1:165.19,
         text2:'武汉公交陶家岭充电站',
         text3:2808.19,
         month:10,
         year:120,
         total:2400,
        },
        {
         id:2,
         text1:180.25,
         text2:'武汉公交新国博站充电站',
         text3:3606.19,
         month:15,
         year:140,
         total:3214,
        },
        {
         id:3,
         text1:241.19,
         text2:'武汉公交莽村充电站',
         text3:1489.19,
         month:25,
         year:263,
         total:2688,
        },
        {
         id:4,
         text1:230.19,
         text2:'武汉公交向阳村充电站',
         text3:3657.19,
         month:26,
         year:366,
         total:5489,
        },
        {
         id:5,
         text1:520.19,
         text2:'武汉公交永旺充电站',
         text3:7777.19,
         month:60,
         year:700,
         total:9564,
        },
        {
         id:6,
         text1:520.19,
         text2:'武汉公交永旺充电站',
         text3:7777.19,
         month:60,
         year:700,
         total:9564,
        },
        {
         id:7,
         text1:520.19,
         text2:'武汉公交永旺充电站',
         text3:7777.19,
         month:60,
         year:700,
         total:9564,
        },
        {
         id:8,
         text1:520.19,
         text2:'武汉公交永旺充电站',
         text3:7777.19,
         month:60,
         year:700,
         total:9564,
        },
        {
         id:9,
         text1:520.19,
         text2:'武汉公交永旺充电站',
         text3:7777.19,
         month:60,
         year:700,
         total:9564,
        },
        {
         id:10,
         text1:520.19,
         text2:'武汉公交永旺充电站',
         text3:7777.19,
         month:60,
         year:700,
         total:9564,
        },
        {
         id:11,
         text1:520.19,
         text2:'武汉公交永旺充电站',
         text3:7777.19,
         month:60,
         year:700,
         total:9564,
        },
        {
         id:12,
         text1:520.19,
         text2:'武汉公交永旺充电站',
         text3:7777.19,
         month:60,
         year:700,
         total:9564,
        },
        {
         id:13,
         text1:520.19,
         text2:'武汉公交永旺充电站',
         text3:7777.19,
         month:60,
         year:700,
         total:9564,
        },
        {
         id:14,
         text1:520.19,
         text2:'武汉公交永旺充电站',
         text3:7777.19,
         month:60,
         year:700,
         total:9564,
        },
        {
         id:15,
         text1:520.19,
         text2:'武汉公交永旺充电站',
         text3:7777.19,
         month:60,
         year:700,
         total:9564,
        },
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.content-box{
    height: 100%;
    .container{
    width: 100%;
    min-height: 500px;
    }
}
</style>