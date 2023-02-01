<template>
    <div>
        <!-- 订单分析 -->
        <!-- 一级菜单下面所拥有的二级菜单 -->
        <el-aside>
            <SideMenu :itemList="itemList"></SideMenu>
        </el-aside>
        <!-- 以及二级菜单所对应的页面 -->
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
    data() {
        return {
            itemList: [
                {
                    path: 'order',
                    title: '订单报表',
                    nextItems: [
                        { index: 'charge-details', title: '充电成功记录明细' },
                        { index: 'charging-information', title: '充电记录尖峰平谷信息' },
                        { index: 'charging-vehicle', title: '车辆充电尖峰平谷信息' }
                    ]
                }
            ]
        };
    }
};
</script>
