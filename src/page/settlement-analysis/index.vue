<template>
    <!-- 结算分析 -->
    <div class="aside">
        <el-aside>
            <SideMenu :itemList="items"></SideMenu>
        </el-aside>
        <el-main class="main">
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
            items: [
                {
                    path: 'settlement',
                    title: '大客户报表',
                    nextItems: [
                        {
                            index: 'settlement-detail',
                            title: '公交集团充电明细'
                        }
                    ]
                }
            ]
        };
    },
    methods: {}
};
</script>
<style lang="less" scoped>
.aside {
    width: 100%;
    height: 100%;
    .main {
        width: 100%;
        height: 100%;
    }
}
</style>
