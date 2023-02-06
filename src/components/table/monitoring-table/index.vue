<template>
    <div class="main-table">
        <!-- 顶部 -->
        <div class="table-top">
            <div class="table-topOne">
                <span class="span-top">空闲</span><span></span><span><img width="14px" src="@/assets/img/table-search.png" alt=""/></span>
            </div>
            <div class="table-topTwo">201号直流 | 4201050230201 | 群充组:1,共10模块,18kW-750V常规</div>
            <div class="table-topThree">额定: 功率180.00kW | 电流200.00A | 电压750.00V</div>
        </div>
        <!-- 中间 -->
        <div class="table-main">
            <div>判定车系: 111</div>
            <part left="车位" right="车牌号" />
            <part left="车架号" right="路线" />
            <part left="初始SOC" right="订单车系" />
            <part left="当前SOC" right="车辆自编号" />
            <part left="电量" right="车辆额定电量" />
            <part left="充电模式" right="群充策略" />
            <part left="辅源类型" right="一级入口" />
            <part left="启动方式" right="二级入口" />
        </div>
        <hr />
        <div class="table-main">
            <part left="插枪时间" right="排队时间" />
            <part left="充电开始时间" right="预计剩余时间" />
            <part left="充电停止时间" right="充电时长" />
            <part left="充电用户" right="支付账户" />
            <part left="刷卡卡号" right="使用人" />
        </div>
        <hr />
        <div class="table-main">
            <part left="电池最高温度" right="电池最低温度" />
            <part left="当前功率" right="需求功率" />
            <part left="当前电流" right="需求电流" />
            <part left="当前电压" right="需求电压" />
            <part left="限制功率" right="限制电流" />
            <part left="单双枪模式" right="是否主枪" />
        </div>
        <hr />
        <div class="table-main">
            <part left="最大需求功率" right="平均需求功率" />
            <part left="最大充电功率" right="平均充电功率" />
        </div>
    </div>
</template>

<script>
import part from './part.vue';
export default {
    name: 'monitoring-table',
    components: {
        part
    },
    data() {
        return {};
    },
    created() {},
    computed: {},
    methods: {}
};
</script>
<style lang="less" scoped>
.main-table {
    width: 520px;
    height: 720px;
    padding: 10px 20px;
    background-color: pink;
    border-radius: 5px;
    .table-top {
        width: 100%;
        min-height: 80px;
        .table-topOne {
            display: flex;
            font-weight: 700;
            justify-content: space-between;
        }
        .table-topTwo,
        .table-topThree {
            font-weight: 700;
            display: flex;
        }
    }
    .table-main {
        width: 100%;
        padding: 10px 0px;
    }
}
</style>
