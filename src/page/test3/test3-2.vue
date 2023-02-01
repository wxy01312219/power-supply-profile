<template>
    <div class="content-box">
        <div class="container">
            <p>主题页面 3 - 2</p>
            <div class="test-div">
                <el-alert title="成功提示的文案" type="success" :closable="false" center show-icon> </el-alert>
                <el-alert title="消息提示的文案" type="info" show-icon> </el-alert>
                <el-alert title="警告提示的文案" type="warning" close-text="好的"> </el-alert>
                <el-alert title="错误提示的文案" type="error" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon>
                </el-alert>
            </div>
            <totalChargingTab :data="chargingTabList" />
        </div>
    </div>
</template>

<script>
import totalChargingTab from '@/components/charging-tab/total-charging-pile.vue';
export default {
    components: { totalChargingTab },
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
                },
            ]
        };
    }
};
</script>
<style lang="less" scoped>
.content-box {
    height: 100%;
    .container {
        width: 100%;
        min-height: 800px;
    }
}
</style>
