<template>
    <div class="content-box">
        <breadcrumb />
        <!-- 电站实时监控 -->
        <div class="container">
            <p>电站实时监控</p>
            <div class="test-div" style="width:400px;">
                <el-carousel height="150px" class="customize-carousel">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3>{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
        <totalChargingTab :data="chargingTabList" />
        </div>
    </div>
</template>

<script>
import totalChargingTab from '@/components/charging-tab/total-charging-pile.vue';
import breadcrumb from '@/components/breadcrumb/index.vue';
export default {
    components: { totalChargingTab,breadcrumb },
    data() {
        return {
            chargingTabList: [
                {
                    id: 1,
                    text1: 165.19,
                    text2: '武汉公交陶家岭充电站',
                    text3: 2808.19,
                    month: 10,
                    year: 120,
                    total: 2400
                },
                {
                    id: 2,
                    text1: 180.25,
                    text2: '武汉公交新国博站充电站',
                    text3: 3606.19,
                    month: 15,
                    year: 140,
                    total: 3214
                },
                {
                    id: 3,
                    text1: 241.19,
                    text2: '武汉公交莽村充电站',
                    text3: 1489.19,
                    month: 25,
                    year: 263,
                    total: 2688
                },
                {
                    id: 4,
                    text1: 230.19,
                    text2: '武汉公交向阳村充电站',
                    text3: 3657.19,
                    month: 26,
                    year: 366,
                    total: 5489
                },
                {
                    id: 5,
                    text1: 520.19,
                    text2: '武汉公交永旺充电站',
                    text3: 7777.19,
                    month: 60,
                    year: 700,
                    total: 9564
                },
                {
                    id: 6,
                    text1: 520.19,
                    text2: '武汉公交永旺充电站',
                    text3: 7777.19,
                    month: 60,
                    year: 700,
                    total: 9564
                },
                {
                    id: 7,
                    text1: 520.19,
                    text2: '武汉公交永旺充电站',
                    text3: 7777.19,
                    month: 60,
                    year: 700,
                    total: 9564
                },
                {
                    id: 8,
                    text1: 520.19,
                    text2: '武汉公交永旺充电站',
                    text3: 7777.19,
                    month: 60,
                    year: 700,
                    total: 9564
                }
            ]
        };
    }
};
</script>

<style lang="scss">
.customize-carousel .el-carousel__item h3 {
    color: #475669;
    font-size: 16px;
    line-height: 150px;
    margin: 0 50%;
}
.customize-carousel .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
.customize-carousel .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
.container{
    width: 100%;
    height: 100%;
}
</style>
